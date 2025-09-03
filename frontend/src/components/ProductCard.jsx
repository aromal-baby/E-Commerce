import React, { useState } from 'react'
import Button from "./Button.jsx"

const ProductCard = ({
                         product,
                         containerClass = "",
                         cardClass = "",
                         showHeart = true,
                         buttonStyle = "default"
                     }) => {
    const [isFavorited, setIsFavorited] = useState(false)

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited)
    }

    return (
        <div className={`group ${containerClass}`}>
            {/* Combined Product Container */}
            <div className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardClass}`}>
                {/* Product Image Container */}
                <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
                    {/* Heart Icon */}
                    {showHeart && (
                        <button
                            onClick={toggleFavorite}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                        >
                            <svg
                                className={`w-5 h-5 transition-colors ${
                                    isFavorited ? 'fill-red-500 text-red-500' : 'fill-none text-gray-600'
                                }`}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Product Image */}
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}
                        />
                    ) : (
                        // Placeholder
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">{product.placeholder || '👕'}</div>
                                <p className="text-gray-600 text-sm">{product.name}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Product Info - Inside the same container */}
                <div className="p-4 bg-white space-y-3">
                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                            <p className="text-gray-500 text-sm">{product.brand}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    </div>

                </div>
            </div>

            {/* Quick View Button */}
            <div className="flex justify-center mt-10">
                <Button
                    containerClass="text-white !text-sm !px-0 bg-black !h-[37px] !w-[100px]"
                    borderColor="border-black"
                    title="Quick View"
                />
            </div>

        </div>
    )
}

export default ProductCard