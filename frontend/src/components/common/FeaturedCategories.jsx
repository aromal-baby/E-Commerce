import React from 'react'

const FeaturedCategories = ({ categories }) => {
    if (!categories || categories.length === 0) return null

    return (
        <div className="my-20 py-8">
            <div className="flex gap-0 bg-gray-200 h-40 mx-0">
                {categories.map((category, index) => (
                    <div className="group cursor-pointer relative -translate-y-25">
                        <div className="ml-8 h-50 w-52 bg-gray-50 overflow-hidden relative">

                            {/*Text overlay on image*/}
                            <div className="absolute bottom-4 left-4 transition-colors group-hover:bg-black duration-300 px-2">
                                <h4 className="text-black text-lg uppercase tracking-wide drop-shadow-lg group-hover:text-white">
                                    {category.name}
                                </h4>
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedCategories