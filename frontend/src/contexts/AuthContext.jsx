import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Initializing auth state from localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('luxe_user')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
        setLoading(false)
    },[])

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('luxe_user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('luxe_user')
        localStorage.removeItem('luxe_cart')
        localStorage.removeItem('luxe_wishlist')
    }

    const signUp = (userData) => {
        // Adding default properties
        const newUser = {
            ...userData,
            id: Date.now(), // Generating a temporary ID
            role: 'user',
            createdAt: new Date().toISOString(),
            orders: [],
            addresses: []
        }
        login(newUser)
    }

    const value = {
        user,
        login,
        logout,
        signUp,
        loading,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}