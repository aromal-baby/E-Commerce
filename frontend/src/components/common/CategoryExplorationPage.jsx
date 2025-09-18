import React, { useState } from 'react'
import { categoryData } from "../../../constants/index.js";
import {useSearchParams} from "react-router-dom";

const CategoryExplorationPage = () => {

    const [searchParams] = useSearchParams()
    const categoryparam = searchParams.get('category');


    const [activeMainCategory, setActiveMainCategory] = useState(categoryparam || 'women') // Women active by default
    const [activeSidebarCategory, setActiveSidebarCategory] = useState('NEW & TRENDING')


    const currentData = categoryData[activeMainCategory]
    const currentFilterTabs = currentData.filterTabs[activeSidebarCategory] || []

    const handleMainCategoryClick = (category) => {
        setActiveMainCategory(category)
        // Reset sidebar to first category when switching to the main category
        setActiveSidebarCategory(categoryData[category].sidebarCategories[0].name)
    }

    return (
        <div className="min-h-screen bg-white mt-[140px]">
            {/* Main Category Tiles */}
            <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {Object.entries(categoryData).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => handleMainCategoryClick(key)}
                            className={`relative h-32 bg-gray-200 overflow-hidden group transition-all duration-300 ${
                                activeMainCategory === key
                                    ? 'outline-1 outline-black'
                                    : 'hover:bg-gray-300'
                            }`}
                        >
                            {/* Text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-black font-bold text-xl tracking-wide">
                                    {data.title}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="flex max-w-7xl mx-auto gap-8">
                {/* Left Sidebar with Category Tiles */}
                <aside className="w-80 px-8">
                    <div className="space-y-1">
                        {currentData.sidebarCategories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveSidebarCategory(category.name)}
                                className={`relative w-full h-24 bg-gray-200 overflow-hidden group transition-all duration-300 ${
                                    activeSidebarCategory === category.name
                                        ? 'outline-1 outline-black bg-gray-300'
                                        : 'hover:bg-gray-300'
                                }`}
                            >
                                {/* Text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-black font-semibold text-sm tracking-wide text-center">
                                        {category.name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Right Content Area */}
                <main className="flex-1 px-8">
                    {/* Filter Tabs */}
                    <div className="bg-white border-b border-gray-200 mb-6">
                        <div className="flex items-center justify-between py-4">
                            <div className="flex space-x-6 overflow-x-auto">
                                {currentFilterTabs.map((tab) => (
                                    <button
                                        key={tab}
                                        className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-black border-b-2 border-transparent hover:border-gray-300 pb-2"
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <button className="flex items-center space-x-2 px-4 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
                                <span>FILTER & SORT</span>
                                <div className="flex flex-col">
                                    <div className="w-3 h-0.5 bg-current mb-0.5"></div>
                                    <div className="w-3 h-0.5 bg-current mb-0.5"></div>
                                    <div className="w-3 h-0.5 bg-current"></div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-4 gap-6 mb-8">
                        {/* Generate products based on current selections */}
                        {Array.from({ length: 20 }, (_, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="bg-gray-200 aspect-[3/4] mb-3 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-shadow">
                                    {/* Product placeholder */}
                                    <div className="w-full h-full bg-gray-200"></div>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-medium text-sm">
                                        {currentData.title} Product {i + 1}
                                    </h3>
                                    <p className="text-sm text-gray-600">{activeSidebarCategory}</p>
                                    <p className="font-semibold">€{Math.floor(Math.random() * 200 + 50)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mb-8">
                        <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors font-medium">
                            Load More Products
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default CategoryExplorationPage