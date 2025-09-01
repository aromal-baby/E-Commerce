import React from 'react'
import Hero from "./components/Hero.jsx";
import NewInSection from "./components/NewInSection.jsx";
import About from "./components/About.jsx";
import FeaturedCollections from "./components/FeaturedCollections.jsx";

const App = () => {
    return (
        <main>
            <div className="my-15">
                <Hero />
            </div>
            <NewInSection />
            <About />
            <FeaturedCollections />
        </main>
    )
}
export default App
