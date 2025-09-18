import React, {useEffect, useState} from 'react'
import BreadCrumb from "./BreadCrumb.jsx";
import {findProductById, productDetail} from "../../../constants/index.js";
import {useParams} from "react-router-dom";
import {useCart} from "../../contexts/CartContext.jsx";
import {useWishlist} from "../../contexts/WishlistContext.jsx";

const ProductDetailPage = ({ productData }) => {

    const { id } = useParams()
    const { addToCart } = useCart()
    const { toggleWishlist, isInWishlist } = useWishlist()

    // Use productData prop if provided, otherwise find by ID from the URL
    const product = productData || findProductById(parseInt(id))

    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('Black')
    const [quantity, setQuantity] = useState(1)
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [isAddingToCart, setIsAddingToCart] = useState(false)


    useEffect(() => {
        if (product) {
            // Set default color when product loads
            if (product.colors && product.colors.length > 0) {
                setSelectedColor(product.colors[0])
            }
        }
    }, [product])


    if (!product) {
        return (
            <div className="min-h-screen bg-white mt-[140px] flex item-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        )
    }


    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size')
            return
        }

        setIsAddingToCart(true)

        try {
            addToCart(product, selectedSize, selectedColor, quantity)
            alert(`Added ${quantity} x ${product.name} to cart!`)
        } catch (error) {
            alert(error.message)
        } finally {
            setIsAddingToCart(false)
        }
    }


    const handleBuyNow = () => {
        if (!selectedSize) {
            alert('Please select a size')
            return
        }
        // Direct checkout logic
        console.log('Buy now clicked')
    }

    // Add to cart then redirect to cart page
    try {
        addToCart(product, selectedSize, selectedColor, quantity)
        window.location.href = '/cart'
    } catch (error) {
        alert(error.message)
    }

    const handleWishlistToggle = () => {
        const added = toggleWishlist(product)
        if (added) {
            alert(`Added ${product.name} to wishlist!`)
        } else {
            alert(`Removed ${product.name} from wishlist!`)
        }
    }

    const getColorStyle = (color) => {
        const colorMap = {
            'Black': '#000000',
            'White': '#ffffff',
            'Navy': '#1e3a8a',
            'Gray': '#6b7280',
            'Blue': '#3b82f6',
            'Red': '#ef4444',
            'Green': '#22c55e',
            'Yellow': '#eab308',
            'Pink': '#ec4899',
            'Purple': '#a855f7',
            'Silver': '#c0c0c0',
            'Gold': '#ffd700'
        }
        return colorMap[color] || '#94a3b8'
    }

    return (
        <div className="min-h-screen bg-white mt-[140px]">
            <div className="max-w-7xl mx-auto px-8 py-8">
                {/* Breadcrumb */}
                <BreadCrumb />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                            {product.image && product.images[activeImageIndex] ? (
                                <img
                                    src={product.images[activeImageIndex]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                        e.target.nextElementSibling.style.display = 'flex'
                                    }}
                                />
                            ) : null}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-6xl">
                                👕
                            </div>
                        </div>

                        {/* Thumbnail Images */}
                        {product.image && product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-2">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImageIndex(index)}
                                        className={`aspect-square bg-gray-200 rounded overflow-hidden border-2 ${
                                            activeImageIndex === index ? 'border-black' : 'border-transparent'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.name} ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none'
                                                e.target.nextElementSibling.style.display = 'flex'
                                            }}
                                        />
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-2xl">
                                            👕
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Title and Price */}
                        <div>
                            <h1 className="text-3xl font-bold text-black mb-2">{productDetail.name}</h1>
                            <p className="text-gray-600 mb-4">{productDetail.brand} • {productDetail.category}</p>

                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-2xl font-bold">€{productDetail.price}</span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-lg text-gray-500 line-through">€{productDetail.originalPrice}</span>
                                        <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                                            {productDetail.discount}
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    {'★'.repeat(Math.floor(productDetail.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                                </div>
                                <span className="text-sm text-gray-600">({productDetail.reviews} reviews)</span>
                            </div>
                        </div>

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div>
                                <h3 className="text-sm font-semibold mb-3">Color: {selectedColor}</h3>
                                <div className="flex gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full border-2 ${
                                                selectedColor === color ? 'border-black' : 'border-gray-300'
                                            }`}
                                            style={{ backgroundColor: getColorStyle(color) }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div>
                                <h3 className="text-sm font-semibold mb-3">Size</h3>
                                <div className="grid grid-cols-6 gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`py-2 text-sm font-medium border ${
                                                selectedSize === size
                                                    ? 'border-black bg-black text-white'
                                                    : 'border-gray-300 hover:border-black'
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <h3 className="text-sm font-semibold mb-3">Quantity</h3>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2">
                            {product.inStock ? (
                                <>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-green-600">
                                        In Stock {product.stockCount && `(${product.stockCount} left)`}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm text-red-600">Out of Stock</span>
                                </>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={handleAddToCart}
                                disabled={!product.inStock || isAddingToCart}
                                className="w-full py-3 bg-black text-white font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                            >
                                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                            </button>

                            <button
                                onClick={handleBuyNow}
                                disabled={!product.inStock}
                                className="w-full py-3 border border-black text-black font-semibold hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                            >
                                Buy Now
                            </button>

                            <button
                                onClick={handleWishlistToggle}
                                className={`w-full py-3 border font-semibold transition-colors ${
                                    isInWishlist(product.id)
                                        ? 'border-red-500 text-red-500 hover:bg-red-50'
                                        : 'border-gray-300 text-gray-700 hover:border-black'
                                }`}
                            >
                                {isInWishlist(product.id) ? '❤️ Remove from Wishlist' : '♡ Add to Wishlist'}
                            </button>
                        </div>

                        {/* Product Features */}
                        {product.features && product.features.length > 0 && (
                            <div>
                                <h3 className="text-sm font-semibold mb-3">Features</h3>
                                <ul className="space-y-1">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="text-sm text-gray-600 flex items-center">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Description */}
                        {product.description && (
                            <div>
                                <h3 className="text-sm font-semibold mb-3">Description</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">You might also like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }, (_, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden group-hover:shadow-lg transition-shadow">
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">
                                        👕
                                    </div>
                                </div>
                                <h3 className="font-medium text-sm mb-1">Related Product {i + 1}</h3>
                                <p className="text-sm text-gray-600 mb-1">Men's Clothing</p>
                                <p className="font-semibold">€{Math.floor(Math.random() * 100 + 50)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage