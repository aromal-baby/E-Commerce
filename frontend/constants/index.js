export const navLinks = [
    {
        id: 'men',
        title: 'Men',
        miniMenu: {
            categories: ['NEW & TRENDING', 'CLOTHING', 'SHOES', 'ACCESSORIES', 'SPORT', 'BRANDS'],
            items: {
                'NEW & TRENDING': ['New arrivals', 'Trending now', 'Best sellers', 'Limited edition'],
                'CLOTHING': ['T-Shirts', 'Shirts', 'Pants', 'Jackets', 'Suits', 'Casual wear'],
                'SHOES': ['Sneakers', 'Formal shoes', 'Boots', 'Sandals'],
                'ACCESSORIES': ['Watches', 'Belts', 'Wallets', 'Sunglasses'],
                'SPORT': ['Athletic wear', 'Running', 'Training', 'Outdoor'],
                'BRANDS': ['Premium', 'Designer', 'Luxury', 'Sport brands']
            }
        }
    },
    {
        id: 'women',
        title: 'Women',
        miniMenu: {
            categories: ['NEW & TRENDING', 'CLOTHING', 'SHOES', 'ACCESSORIES', 'SPORT', 'BRANDS'],
            items: {
                'NEW & TRENDING': ['New arrivals', 'Trending styles', 'Best sellers', 'Seasonal'],
                'CLOTHING': ['Dresses', 'Tops', 'Pants', 'Jackets', 'Skirts', 'Activewear'],
                'SHOES': ['Heels', 'Flats', 'Sneakers', 'Boots', 'Sandals'],
                'ACCESSORIES': ['Handbags', 'Jewelry', 'Scarves', 'Sunglasses'],
                'SPORT': ['Yoga', 'Running', 'Training', 'Swimwear'],
                'BRANDS': ['Designer', 'Premium', 'Luxury', 'Contemporary']
            }
        }
    },
    {
        id: 'accessories',
        title: 'Accessories',
        miniMenu: {
            categories: ['BAGS', 'JEWELRY', 'TECH', 'LIFESTYLE', 'GIFTS', 'SEASONAL'],
            items: {
                'BAGS': ['Handbags', 'Backpacks', 'Briefcases', 'Travel bags'],
                'JEWELRY': ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Watches'],
                'TECH': ['Phone cases', 'Smartwatches', 'Headphones', 'Chargers'],
                'LIFESTYLE': ['Sunglasses', 'Wallets', 'Belts', 'Scarves'],
                'GIFTS': ['Gift sets', 'Gift cards', 'Under $50', 'Luxury gifts'],
                'SEASONAL': ['Summer essentials', 'Winter accessories', 'Holiday special']
            }
        }
    },
    {
        id: 'sale',
        title: 'Sale',
        miniMenu: {
            categories: ['DISCOUNTS', 'CLEARANCE', 'SEASONAL SALE', 'CATEGORIES', 'LIMITED TIME', 'OUTLET'],
            items: {
                'DISCOUNTS': ['Up to 30% off', 'Up to 50% off', 'Up to 70% off', 'Flash deals'],
                'CLEARANCE': ['Final sale', 'Last chance', 'While supplies last', 'End of season'],
                'SEASONAL SALE': ['Summer sale', 'Winter clearance', 'Holiday deals', 'Back to school'],
                'CATEGORIES': ['Clothing sale', 'Shoes sale', 'Accessories sale', 'Brand sale'],
                'LIMITED TIME': ['Today only', 'Weekend deals', 'Weekly specials', 'Member exclusive'],
                'OUTLET': ['Outlet prices', 'Previous season', 'Overstock', 'Sample sale']
            }
        }
    },
];

export const products = [
    { id: 1, image: "/images/newIn/product1.jpg"},
    { id: 2, image: "/images/newIn/product2.jpg"},
    { id: 3, image: "/images/newIn/product3.jpg"},
    { id: 4, image: "/images/newIn/product4.jpg"},
    { id: 5, image: "/images/newIn/product5.jpg"},
    { id: 6, image: "/images/newIn/product6.jpg"},
    { id: 7, image: "/images/newIn/product7.jpg"},
    { id: 8, image: "/images/newIn/product8.jpg"},
    { id: 9, image: "/images/newIn/product9.jpg"}
];

export const footerLinks = {
    customer: {
        title: "Customer Care",
        links: ["Contact Us", "Size Guide", "Shipping & Returns", "FAQ", "Track Order"]
    },
    company: {
        title: "About LUXE",
        links: ["Our Story", "Careers", "Press", "Sustainability", "Store Locator"]
    },
    legal: {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"]
    }
}

export const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Facebook", icon: "👥", url: "#" },
    { name: "Pinterest", icon: "📌", url: "#" }
]

export const featuredProductsHome = [
    {
        id: 1,
        name: "Luxury Blazer",
        price: 450,
        brand: "Premium Brand",
        image: "/images/featured1.jpg",
        placeholder: "🤵"
    },
    {
        id: 2,
        name: "Designer Jeans",
        price: 250,
        brand: "Premium Brand",
        image: "/images/featured2.jpg",
        placeholder: "👖"
    },
    {
        id: 3,
        name: "Sneakers",
        price: 320,
        brand: "Premium Brand",
        image: "/images/featured3.webp",
        placeholder: "👟"
    },
    {
        id: 4,
        name: "Designer Shirt",
        price: 120,
        brand: "Premium Brand",
        image: "/images/featured4.webp",
        placeholder: "👔"
    }
]

// Category data structure
export const categoryData = {
    men: {
        title: 'MEN',
        sidebarCategories: [
            {
                name: 'NEW & TRENDING'
            },
            {
                name: 'CLOTHING'
            },
            {
                name: 'SHOES'
            },
            {
                name: 'ACCESSORIES'
            },
            {
                name: 'SPORT'
            },
            {
                name: 'BRANDS'
            }
        ],

        filterTabs: {
            'NEW & TRENDING': [
                'New Arrival',
                'Trending Now',
                'Best Sellers',
                'Limited Edition'
            ],
            'CLOTHING': [
                'T-Shirts',
                'Shirts',
                'Pants',
                'Jackets'
            ],
            'SHOES': [
                'Sneakers',
                'Formal Shoes',
                'Boots',
                'Sandals'
            ],
            'ACCESSORIES': [
                'Watches',
                'Belts',
                'Wallets',
                'Sunglasses'
            ],
            'SPORT': [
                'Athletic Wear',
                'Running',
                'Training',
                'Outdoor'
            ],
            'BRANDS': [
                'Premium',
                'Designer',
                'Luxury',
                'Sport Brands'
            ]
        }
    },
    women: {
        title: 'WOMEN',
        sidebarCategories: [
            {
                name: 'NEW & TRENDING'
            },
            {
                name: 'CLOTHING'
            },
            {
                name: 'SHOES'
            },
            {
                name: 'ACCESSORIES'
            },
            {
                name: 'SPORT'
            },
            {
                name: 'BRANDS'
            }
        ],
        filterTabs: {
            'NEW & TRENDING': ['New Arrival', 'Trending Now', 'Best Sellers', 'Limited Edition'],
            'CLOTHING': ['Dresses', 'Tops', 'Pants', 'Jackets', 'Skirts'],
            'SHOES': ['Heels', 'Flats', 'Sneakers', 'Boots', 'Sandals'],
            'ACCESSORIES': ['Handbags', 'Jewelry', 'Scarves', 'Sunglasses'],
            'SPORT': ['Yoga', 'Running', 'Training', 'Swimwear'],
            'BRANDS': ['Designer', 'Premium', 'Luxury', 'Contemporary']
        }
    },
    accessories: {
        title: 'ACCESSORIES',
        sidebarCategories: [
            {
                name: 'BAGS'
            },
            {
                name: 'JEWELRY'
            },
            {
                name: 'TECH'
            },
            {
                name: 'LIFESTYLE'
            },
            {
                name: 'GIFTS'
            },
            {
                name: 'SEASONAL'
            }
        ],
        filterTabs: {
            'BAGS': ['Handbags', 'Backpacks', 'Briefcases', 'Travel Bags'],
            'JEWELRY': ['Necklaces', 'Earrings', 'Bracelets', 'Rings'],
            'TECH': ['Phone Cases', 'Smartwatches', 'Headphones', 'Chargers'],
            'LIFESTYLE': ['Sunglasses', 'Wallets', 'Belts', 'Scarves'],
            'GIFTS': ['Gift Sets', 'Gift Cards', 'Under $50', 'Luxury Gifts'],
            'SEASONAL': ['Summer Essentials', 'Winter Accessories', 'Holiday Special']
        }
    }
}

export const productDataWomen = [
    {
        id: 1,
        name: "Handball special shoe",
        price: "120",
        originalPrice: "150",
        discount: "20% off",
        category: "Originals",
        image: "/images/women/products/grid-landing/product1(grid).jpg", // Added 's' to products
        placeholder: "👟"
    },
    {
        id: 2,
        name: "Handball special shoe",
        price: "120",
        originalPrice: "150",
        discount: "20% off",
        category: "Originals",
        image: "/images/women/products/grid-landing/product2(grid).webp", // Added 's' to products
        placeholder: "👟"
    },
    {
        id: 3,
        name: "Handball special shoe",
        price: "120",
        originalPrice: "150",
        discount: "20% off",
        category: "Originals",
        image: "/images/women/products/grid-landing/product3(grid).webp", // Added 's' to products
        placeholder: "👟"
    },
    {
        id: 4,
        name: "Handball special shoe",
        price: "120",
        originalPrice: "150",
        discount: "20% off",
        category: "Originals",
        image: "/images/women/products/grid-landing/product4(grid).avif",
        placeholder: "👟"
    },
    {
        id: 5,
        name: "Handball special shoe",
        price: "120",
        originalPrice: "150",
        discount: "20% off",
        category: "Originals",
        image: "/images/women/products/grid-landing/product5(grid).jpg",
        placeholder: "👟"
    },
    {
        id: 6,
        name: "Handball special shoe",
        price: "120",
        originalPrice: "150",
        discount: "20% off",
        category: "Originals",
        image: "/images/women/products/grid-landing/product6(grid).webp",
        placeholder: "👟"
    },
]

/* Category wise product details and stuff */
export const tshirtsMenData = [
    {
        id: 1,
        name: "Basic Cotton T-Shirt",
        price: "25",
        originalPrice: "35",
        category: "Basic Tees",
        image: "/images/men/tshirts/basic-tee-1.jpg",
        placeholder: "👕"
    },
    {
        id: 2,
        name: "Graphic Print Tee",
        price: "30",
        category: "Graphic Tees",
        image: "/images/men/tshirts/graphic-tee-1.jpg",
        placeholder: "👕"
    },
    {
        id: 3,
        name: "Premium Polo Shirt",
        price: "45",
        originalPrice: "60",
        discount: "25% off",
        category: "Polo Shirts",
        image: "/images/men/tshirts/polo-1.jpg",
        placeholder: "👕"
    },
    {
        id: 4,
        name: "Athletic Tank Top",
        price: "20",
        category: "Tank Tops",
        image: "/images/men/tshirts/tank-1.jpg",
        placeholder: "👕"
    },
    {
        id: 5,
        name: "Vintage Band Tee",
        price: "35",
        category: "Graphic Tees",
        image: "/images/men/tshirts/band-tee-1.jpg",
        placeholder: "👕"
    },
    {
        id: 6,
        name: "Long Sleeve Tee",
        price: "28",
        category: "Long Sleeve",
        image: "/images/men/tshirts/long-sleeve-1.jpg",
        placeholder: "👕"
    }
]

export const tshirtFeaturedCategories = [
    {
        name: "Gym Wear",
        description: "For breaking limits",
        image: "/images/categories/gym-wear.jpg",
        placeholder: "💪"
    },
    {
        name: "Casual Wear",
        description: "For everyday style",
        image: "/images/categories/casual-wear.jpg",
        placeholder: "👕"
    },
    {
        name: "Athletic Wear",
        description: "For peak performance",
        image: "/images/categories/athletic-wear.jpg",
        placeholder: "🏃"
    }
]

export const tshirtFilterTabs = [
    "Basic Tees",
    "Graphic Tees",
    "Polo Shirts",
    "Tank Tops",
    "Long Sleeve",
    "Premium",
    "Vintage",
    "Athletic"
]

// Sample product data
export const productDetail = {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: "89",
    originalPrice: "120",
    discount: "26% off",
    category: "Men's Clothing",
    brand: "LUXE",
    rating: 4.5,
    reviews: 234,
    colors: ['Black', 'White', 'Navy', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
        '/images/product/main-1.jpg',
        '/images/product/main-2.jpg',
        '/images/product/main-3.jpg',
        '/images/product/main-4.jpg'
    ],
    description: "Crafted from premium organic cotton, this t-shirt offers exceptional comfort and style. Perfect for everyday wear with a modern fit.",
    features: [
        "100% Organic Cotton",
        "Modern Fit",
        "Pre-shrunk",
        "Machine Washable",
        "Sustainably Made"
    ],
    inStock: true,
    stockCount: 23
}