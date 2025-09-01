import React from 'react'
import ProductCard from "./ProductCard.jsx"

const FeaturedCollections = () => {
    const featuredProducts = [
        {
            id: 1,
            name: "Luxury Blazer",
            price: 450,
            brand: "Premium Brand",
            image: "/images/featured1.jpg",
            placeholder: "🤵"
        },
        {
            className: "-translate-y-1/2",
            id: 2,
            name: "Designer Jeans",
            price: 250,
            brand: "Premium Brand",
            image: "/images/featured2.jpg",
            placeholder: "👖"
        },
        {
            id: 3,
            name: "Sneakers",
            price: 320,
            brand: "Premium Brand",
            image: "/images/featured3.webp",
            placeholder: "👟"
        },
        {
            id: 4,
            name: "Designer Shirt",
            price: 120,
            brand: "Premium Brand",
            image: "/images/designer-shirt.jpg",
            placeholder: "👔"
        }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Featured Collection
                </h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            containerClass="cursor-pointer"
                            showHeart={true}
                            buttonStyle="default"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollections