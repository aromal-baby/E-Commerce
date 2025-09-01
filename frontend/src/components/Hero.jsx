import React from 'react'
import Button from "./Button.jsx";

const Hero = () => {
    return (
        <section className="relative w-full h-[750px] bg-[#A8896A] overflow-hidden">
            {/* Announcement Bar */}
            <div className="absolute top-0 left-0 w-full bg-gray-300 text-center py-2 text-sm text-gray-700 z-10">
                Mentioning the style discovering according to the season
            </div>

            {/* Hero Image */}
            <div className="absolute inset-0 flex justify-center items-center translate-y-5">
                <div className="relative w-full max-w-full">
                    <img
                        src="/images/hero-main.jpg"
                        alt="Fashion Model"
                        className="w-full h-auto object-cover rounded-lg shadow-2xl"
                    />
                </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-24 right-16 z-20">
                <div className="space-y-2">
                    <div className="hero-text-overlay">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Redefining Designer Fashion,
                        </h2>
                    </div>
                    <div className="hero-text-overlay justify-end w-[215px] translate-x-31">
                        <h3 className="text-2xl font-bold text-gray-900">
                            All Day, Everyday.
                        </h3>
                    </div>
                </div>

                <Button
                    containerClass="translate-x-36.5 translate-y-2 text-white bg-black !h-[44.41px]"
                    title="Explore Collections"
                    borderOffsetX="translate-x-37.5"
                    borderOffsetY="translate-y-3"
                />
            </div>
        </section>
    )
}

export default Hero
