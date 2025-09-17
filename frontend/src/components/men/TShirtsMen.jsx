import React from 'react'
import ProductCategoryLayout from '../common/ProductCategoryLayout'
import { tshirtsMenData, tshirtFeaturedCategories, tshirtFilterTabs } from '../../../constants/index'

const TShirtsMen = () => {
    return (
        <ProductCategoryLayout
            title="T-SHIRTS FOR MEN"
            productCount={tshirtsMenData.length}
            featuredCategories={tshirtFeaturedCategories}
            filterTabs={tshirtFilterTabs}
            products={tshirtsMenData}
            announcementText="Discover the latest in men's t-shirt fashion"
        />
    )
}

export default TShirtsMen