import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('profile')
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || ''
    })

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const handleSave = () => {
        // Update user profile logic
        console.log('Saving profile:', formData)
        setIsEditing(false)
    }

    const tabs = [
        { id: 'profile', name: 'Profile', icon: '👤' },
        { id: 'orders', name: 'Orders', icon: '📦' },
        { id: 'addresses', name: 'Addresses', icon: '📍' },
        { id: 'security', name: 'Security', icon: '🔒' }
    ]

    return (
        <div className="min-h-screen bg-gray-50 mt-[140px]">
            <div className="max-w-4xl mx-auto px-8 py-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                                👤
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                                <p className="text-gray-600">{user?.email}</p>
                                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {user?.role === 'admin' ? 'Administrator' : 'Customer'}
                </span>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Sign out
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <nav className="bg-white rounded-lg shadow-sm p-4">
                            <ul className="space-y-2">
                                {tabs.map((tab) => (
                                    <li key={tab.id}>
                                        <button
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                                activeTab === tab.id
                                                    ? 'bg-black text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            <span>{tab.icon}</span>
                                            <span>{tab.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            {activeTab === 'profile' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-bold">Profile Information</h2>
                                        {!isEditing ? (
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
                                            >
                                                Edit Profile
                                            </button>
                                        ) : (
                                            <div className="space-x-2">
                                                <button
                                                    onClick={() => setIsEditing(false)}
                                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={handleSave}
                                                    className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{user?.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <p className="text-gray-900">{user?.email}</p>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            {isEditing ? (
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{user?.phone || 'Not provided'}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'orders' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-6">Order History</h2>
                                    <div className="space-y-4">
                                        {/* Sample orders - replace with real data */}
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-medium">Order #12345</h3>
                                                    <p className="text-sm text-gray-600">Placed on March 15, 2024</p>
                                                </div>
                                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Delivered</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">3 items • €157.00</p>
                                            <div className="flex space-x-2">
                                                <button className="text-sm text-black hover:underline">View Details</button>
                                                <button className="text-sm text-black hover:underline">Reorder</button>
                                            </div>
                                        </div>

                                        <div className="text-center py-8">
                                            <p className="text-gray-500">No more orders to show</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'addresses' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-bold">Shipping Addresses</h2>
                                        <button className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800">
                                            Add Address
                                        </button>
                                    </div>
                                    <div className="text-center py-8">
                                        <p className="text-gray-500">No addresses saved yet</p>
                                        <p className="text-sm text-gray-400 mt-2">Add an address to speed up checkout</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'security' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-medium mb-2">Password</h3>
                                            <p className="text-gray-600 mb-4">Change your password to keep your account secure</p>
                                            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                                                Change Password
                                            </button>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium mb-2">Two-Factor Authentication</h3>
                                            <p className="text-gray-600 mb-4">Add an extra layer of security to your account</p>
                                            <button className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800">
                                                Enable 2FA
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage