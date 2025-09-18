// NewInSection.jsx
import React, { useState } from 'react'
import Button from "../common/Button.jsx"
import { allProducts } from "../../../constants/index.js";

const NewInSection = () => {

    const products = allProducts.slice(0, 9).map((p, i) => ({
        id: p.id,
        image: p.image,
        name: p.name,
    }))

    const [currentSet, setCurrentSet] = useState(0)
    const productsPerSet = 3
    const totalSets = Math.ceil(products.length / productsPerSet)

    // Get current 3 products to display
    const getCurrentProducts = () => {
        const start = currentSet * productsPerSet
        const end = start + productsPerSet
        return products.slice(start, end)
    }

    const nextSet = () => {
        setCurrentSet((prev) => (prev + 1) % totalSets)
    }

    const prevSet = () => {
        setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets)
    }

    return (
        <section className="py-16 px-10 bg-white items-center justify-center">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <p className="text-gray-500">969 new Items</p>
                        <h1 className="text-4xl font-bold text-gray-900">New In</h1>
                        <p className="text-gray-600 max-w-md">
                            New arrivals, now dropping five days a week – discover
                            the latest launches onsite from Monday to Friday
                        </p>
                        <Button
                            containerClass="text-white bg-black !h-[48px] !w-[314.64px]"
                            borderColor="border-black"
                            title="Explore New In"
                        />
                    </div>

                    {/* Right Product Carousel */}
                    <div className="flex items-center space-x-4">
                        {/* Products Grid */}
                        <div className="flex space-x-4 flex-1">
                            {getCurrentProducts().map((product, index) => (
                                <div key={product.id} className="flex-1 group cursor-pointer">
                                    {/* Product Image */}
                                    <div className="aspect-[3/4] bg-gray-200 overflow-hidden mb-3">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            // Placeholder for demo
                                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="text-4xl mb-2">
                                                        {index === 0 ? '👗' : index === 1 ? '👔' : '🧥'}
                                                    </div>
                                                    <p className="text-gray-600 text-sm">{product.name}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextSet}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
                            disabled={currentSet === totalSets - 1}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewInSection