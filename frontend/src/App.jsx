import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Context providers
import { AuthProvider } from './contexts/AuthContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { WishlistProvider } from './contexts/WishlistContext.jsx'

// Common Components
import NavBar from "./components/common/NavBar.jsx";
import Announcement from "./components/common/Announcement.jsx";
import Footer from "./components/common/Footer.jsx";
import { useParams } from 'react-router-dom'

/// Homepage
import Hero from "./components/homepage/Hero.jsx";
import NewInSection from "./components/homepage/NewInSection.jsx";
import About from "./components/homepage/About.jsx";
import FeaturedCollections from "./components/homepage/FeaturedCollections.jsx";
import ShowCase from "./components/homepage/ShowCase.jsx";

// Men's Landing
import HeroMen from "./components/men/HeroMen.jsx";
import CategoryCollectionsMen from "./components/men/CategoryCollectionsMen.jsx";
import ProductGridMen from "./components/men/ProductGridMen.jsx";
import FeaturedCollectionMen from "./components/men/FeaturedCollectionMen.jsx";

// Women's Landing
import HeroWomen from "./components/women/HeroWomen.jsx";
import FeaturedCollectionWomen from "./components/women/FeaturedCollectionWomen.jsx";
import CategoryCollectionsWomen from "./components/women/CategoryCollectionsWomen.jsx";
import ProductGridWomen from "./components/women/ProductGridWomen.jsx";
import { productDataWomen,tshirtsMenData, productDetail } from "../constants/index.js";

// Mega Menu Components
import TShirtsMen from "./components/men/TShirtsMen.jsx";
import CategoryExplorationPage from "./components/common/CategoryExplorationPage.jsx";
import Cart from "./components/common/Cart.jsx";
import ProductDetailPage from "./components/common/ProductDetailPage.jsx";
import WishList from "./components/common/WishList.jsx";
import ProfilePage from "./components/auth/ProfilePage.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import SignupPage from "./components/auth/SignupPage.jsx";


const App = () => {
    return (
        <Router>
            <AuthProvider>
                <CartProvider>
                    <WishlistProvider>
                        <main>
                            <NavBar/>
                            <Announcement/>

                            <Routes>
                                {/* Homepage */}
                                <Route path="/" element={<HomePage/>}/>

                                {/* Men's Page */}
                                <Route path="/men" element={<MenPage/>}/>

                                {/* Women's Page */}
                                <Route path="/women" element={<WomenPage/>}/>

                                {/* Accessories Page */}
                                <Route path="/accessories" element={<AccessoriesPage/>}/>

                                {/* Sale Page */}
                                <Route path="/sale" element={<SalePage/>}/>

                                {/* Other Pages */}
                                <Route path="/cart" element={<Cart/>}/>
                                <Route path="/wishlist" element={<WishList/>}/>
                                <Route path="/profile" element={<ProfilePage/>}/>

                                {/* Authentication */}
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/signup" element={<SignupPage />} />

                                {/* MiniMenu Nav links */}
                                <Route path="/men/t-shirts" element={<TShirtsMen/>}/>

                                {/* Centralized page for categories */}
                                <Route path="/category-explore" element={<CategoryExplorationPage/>}/>

                                {/* Product Details */}
                                <Route path="/product/:id" element={<ProductWrapper/>}/>
                            </Routes>
                            <Footer/>
                        </main>
                    </WishlistProvider>
                </CartProvider>
            </AuthProvider>
        </Router>
    )
}

// Page components
const HomePage = () => (
    <>
        <div id="hero-section">
            <Hero />
        </div>
        <NewInSection />
        <About />
        <FeaturedCollections showPrices={false} />
        <ShowCase />
    </>
)

const MenPage = () => (
    <>
        <div id="hero-section">
            <HeroMen />
        </div>
        <CategoryCollectionsMen />
        <FeaturedCollectionMen />
        <ProductGridMen />
    </>
)

const WomenPage = () => (
    <>
        <div id="hero-section">
            <HeroWomen />
        </div>
        <CategoryCollectionsWomen />
        <FeaturedCollectionWomen />
        <ProductGridWomen
            products={productDataWomen}
            title="WOMEN'S COLLECTION"
            description="Discover our latest women's fashion.."
        />
    </>
)

const AccessoriesPage = () => (
    <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Accessories</h1>
                <p className="text-gray-600">Coming Soon...</p>
            </div>
        </div>
    </>
)

const SalePage = () => (
    <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Sale</h1>
                <p className="text-gray-600">Amazing deals coming soon...</p>
            </div>
        </div>
    </>
)


const ProductWrapper = () => {
    const { id } = useParams()
    const productId = parseInt(id)

    // To find any product from any array
    const product = tshirtsMenData.find(p => p.id === productId) ||
        productDataWomen.find(p => p.id === productId) ||
        productDetail // Fallback

    return <ProductDetailPage productData={product} />
}


export default App
