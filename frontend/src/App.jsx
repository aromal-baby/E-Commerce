import React, {useEffect, useState} from 'react'
import Hero from "./components/Hero.jsx";
import NewInSection from "./components/NewInSection.jsx";
import About from "./components/About.jsx";
import FeaturedCollections from "./components/FeaturedCollections.jsx";
import ShowCase from "./components/ShowCase.jsx";
import NavBar from "./components/NavBar.jsx";
import Announcement from "./components/Announcement.jsx";

const App = () => {

    /* Navbar animation */
    const [isScrolled, setIsScrolled] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [navbarTransform, setNavbarTransform] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const maxScrollY = 700

            // Hiding the announcement bar after scrolling starts
            const announcementTransform = Math.min(scrollY / 50, 1) * -32 // 32px announcement height

            //Hiding the navbar after the announcement went a=back and returns on scroll up

            // with smooth scroll-based animation
            const scrollProgress = Math.min(currentScrollY / maxScrollY, maxScrollY, 1)

            setNavbarTransform(-scrollProgress * 70) // 70px is navbar height

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY]);

    return (
        <main>
            <NavBar showNavbar={navbarTransform} />
            {!isScrolled && <Announcement />}
            <Hero/>
            <NewInSection />
            <About />
            <FeaturedCollections />
            <ShowCase />
        </main>
    )
}
export default App
