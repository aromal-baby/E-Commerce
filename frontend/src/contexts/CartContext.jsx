import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const { user } = useAuth()

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('luxe_cart')
        if (savedCart) {
            setCartItems(JSON.parse(savedCart))
        }
    }, [])

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('luxe_cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product, size, color, quantity = 1) => {
        if (!size) {
            throw new Error('Please select a size')
        }

        const existingItemIndex = cartItems.findIndex(
            item => item.id === product.id && item.size === size && item.color === color
        )

        if (existingItemIndex > -1) {
            // Update existing item quantity
            setCartItems(prev => prev.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ))
        } else {
            // Add new item
            const cartItem = {
                ...product,
                size,
                color,
                quantity,
                cartId: `${product.id}-${size}-${color}`, // Unique cart identifier
                addedAt: new Date().toISOString()
            }
            setCartItems(prev => [...prev, cartItem])
        }
    }

    /* Functionalities */

    // Removing from the cart
    const removeFromCart = (cartId) => {
        setCartItems(prev => prev.filter(item => item.cartId !== cartId))
    }

    // updating the cart
    const updateQuantity = (cartId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(cartId)
            return
        }

        setCartItems(prev => prev.map(item =>
            item.cartId === cartId ? { ...item, quantity: newQuantity } : item
        ))
    }

    // Clearing the cart
    const clearCart = () => {
        setCartItems([])
    }

    // Getting the total amount for items in cart
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    // Getting the item count in cart
    const getCartItemCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}