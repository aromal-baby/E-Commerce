import React, { useState } from 'react'
import { allProducts } from '../../../constants/index.js'

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('products')
    const [products, setProducts] = useState(allProducts)
    const [isAddingProduct, setIsAddingProduct] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)

    const tabs = [
        { id: 'products', name: 'Products', icon: '📦', count: products.length },
        { id: 'orders', name: 'Orders', icon: '🛒', count: 23 },
        { id: 'users', name: 'Users', icon: '👥', count: 156 },
        { id: 'analytics', name: 'Analytics', icon: '📊', count: null }
    ]

    const deleteProduct = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(prev => prev.filter(p => p.id !== productId))
        }
    }

    const duplicateProduct = (product) => {
        const newProduct = {
            ...product,
            id: Math.max(...products.map(p => p.id)) + 1,
            name: `${product.name} (Copy)`,
            stockCount: 0
        }
        setProducts(prev => [...prev, newProduct])
    }

    return (
        <div className="min-h-screen bg-gray-50 mt-[140px]">
            <div className="max-w-7xl mx-auto px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                            <p className="text-gray-600">Manage your LUXE store</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Total Revenue</p>
                                <p className="text-2xl font-bold text-green-600">€45,231</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    {tabs.map((tab) => (
                        <div key={tab.id} className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">{tab.name}</p>
                                    <p className="text-2xl font-bold">{tab.count || '—'}</p>
                                </div>
                                <div className="text-2xl">{tab.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <nav className="bg-white rounded-lg shadow-sm p-4">
                            <ul className="space-y-2">
                                {tabs.map((tab) => (
                                    <li key={tab.id}>
                                        <button
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                                activeTab === tab.id
                                                    ? 'bg-black text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span>{tab.icon}</span>
                                                <span>{tab.name}</span>
                                            </div>
                                            {tab.count && (
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    activeTab === tab.id ? 'bg-white text-black' : 'bg-gray-200 text-gray-600'
                                                }`}>
                          {tab.count}
                        </span>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-4">
                        {activeTab === 'products' && (
                            <div className="bg-white rounded-lg shadow-sm">
                                {/* Products Header */}
                                <div className="p-6 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-bold">Product Management</h2>
                                        <button
                                            onClick={() => setIsAddingProduct(true)}
                                            className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                </div>

                                {/* Products List */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Product
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Stock
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <tr key={product.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-sm">
                                                            👕
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                                            <div className="text-sm text-gray-500">{product.brand}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 capitalize">{product.category}</div>
                                                    <div className="text-sm text-gray-500 capitalize">{product.type}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">€{product.price}</div>
                                                    {product.originalPrice && (
                                                        <div className="text-sm text-gray-500 line-through">€{product.originalPrice}</div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{product.stockCount}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                product.inStock
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                            }`}>
                              {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={() => setEditingProduct(product)}
                                                            className="text-blue-600 hover:text-blue-900"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => duplicateProduct(product)}
                                                            className="text-green-600 hover:text-green-900"
                                                        >
                                                            Duplicate
                                                        </button>
                                                        <button
                                                            onClick={() => deleteProduct(product.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
                                <div className="space-y-4">
                                    {/* Sample orders */}
                                    {[1, 2, 3, 4, 5].map((order) => (
                                        <div key={order} className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium">Order #{12340 + order}</h3>
                                                    <p className="text-sm text-gray-600">John Doe • john.doe@email.com</p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Placed on {new Date(Date.now() - order * 24 * 60 * 60 * 1000).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium">€{(Math.random() * 200 + 50).toFixed(2)}</p>
                                                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                                        order % 3 === 0 ? 'bg-green-100 text-green-800' :
                                                            order % 3 === 1 ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-blue-100 text-blue-800'
                                                    }`}>
                            {order % 3 === 0 ? 'Delivered' : order % 3 === 1 ? 'Shipping' : 'Processing'}
                          </span>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex space-x-4">
                                                <button className="text-sm text-black hover:underline">View Details</button>
                                                <button className="text-sm text-black hover:underline">Update Status</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'users' && (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-bold mb-6">User Management</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                        {[1, 2, 3, 4, 5].map((user) => (
                                            <tr key={user}>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                            👤
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-sm font-medium">User {user}</p>
                                                            <p className="text-sm text-gray-500">user{user}@email.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                              Customer
                            </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm">{Math.floor(Math.random() * 10)}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    {new Date(Date.now() - user * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button className="text-blue-600 hover:text-blue-900 text-sm">View</button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'analytics' && (
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-bold mb-6">Analytics Dashboard</h2>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-sm font-medium text-gray-600">Total Sales</h3>
                                        <p className="text-2xl font-bold text-green-600">€45,231</p>
                                        <p className="text-sm text-gray-500">+12% from last month</p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-sm font-medium text-gray-600">Orders</h3>
                                        <p className="text-2xl font-bold">1,234</p>
                                        <p className="text-sm text-gray-500">+8% from last month</p>
                                    </div>
                                    <div className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-sm font-medium text-gray-600">Average Order</h3>
                                        <p className="text-2xl font-bold">€87.50</p>
                                        <p className="text-sm text-gray-500">+3% from last month</p>
                                    </div>
                                </div>

                                {/* Top Products */}
                                <div>
                                    <h3 className="text-lg font-medium mb-4">Top Selling Products</h3>
                                    <div className="space-y-3">
                                        {products.slice(0, 5).map((product, index) => (
                                            <div key={product.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                                                <div className="flex items-center">
                          <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs mr-3">
                            {index + 1}
                          </span>
                                                    <div>
                                                        <p className="font-medium">{product.name}</p>
                                                        <p className="text-sm text-gray-500">{Math.floor(Math.random() * 100)} sold</p>
                                                    </div>
                                                </div>
                                                <p className="font-medium">€{(Math.random() * 5000 + 1000).toFixed(0)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel