import React from 'react'
import { Heart } from 'lucide-react'
import { featuredProductsHome } from "../../../constants/index.js";

const FeaturedCollections = () => {

    const HomepageCard = ({ product }) => (
        <div className="flex-shrink-0 w-full h-126 py-3 relative group cursor-pointer hover:outline-1 outline-black outline-offset-2">
            {/* Background Image */}
            <div className="w-full h-96 bg-gray-200 overflow-hidden relative">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                        {product.placeholder}
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Content */}
            <div className="absolute top-80 left-0 right-0 p-6 bg-white text-black">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm mb-4 opacity-90">{product.brand}</p>
                <button className="text-sm font-medium underline hover:no-underline transition-all">
                    Shop now
                </button>
            </div>
        </div>
    )

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Featured Collection
                </h2>

                {/* Products Grid */}
                <div className="relative">
                    <div

                        className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {featuredProductsHome.map((product) => (
                            <div key={product.id} className="w-80 flex-shrink-0">
                                <HomepageCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollections