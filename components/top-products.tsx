"use client"

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Star,
  ShoppingBag
} from 'lucide-react'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface Product {
  id: string
  name: string
  sales: number
  revenue: number
  rating: number
  image: string
  category: string
}

const topProducts = [
  {
    rank: 1,
    name: 'Google Ads - Spring Sale',
    category: 'Search Ads',
    rating: 4.8,
    sales: 320,
    revenue: 12000.00,
    growth: 18
  },
  {
    rank: 2,
    name: 'Instagram Influencer - Brand Awareness',
    category: 'Social Media',
    rating: 4.7,
    sales: 210,
    revenue: 8000.00,
    growth: 15
  },
  {
    rank: 3,
    name: 'Email Blast - New Product Launch',
    category: 'Email',
    rating: 4.6,
    sales: 180,
    revenue: 5000.00,
    growth: 12
  },
  {
    rank: 4,
    name: 'Facebook Ads - Retargeting',
    category: 'Social Media',
    rating: 4.5,
    sales: 150,
    revenue: 9500.00,
    growth: 10
  },
  {
    rank: 5,
    name: 'LinkedIn Outreach - B2B Leads',
    category: 'B2B',
    rating: 4.4,
    sales: 90,
    revenue: 3000.00,
    growth: 8
  }
]

export function TopProducts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-bg-secondary flex items-center justify-center">
            <ShoppingBag className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="card-title">Top Products</h3>
            <p className="card-description">Best-selling products this month</p>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <motion.div
              key={product.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {/* Rank */}
              <div className="flex-shrink-0">
                <div className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold",
                  product.rank === 1 ? "bg-warning-100 text-warning-800" :
                  product.rank === 2 ? "bg-secondary-100 text-secondary-800" :
                  product.rank === 3 ? "bg-primary-100 text-primary-800" :
                  "bg-muted text-muted-foreground"
                )}>
                  #{product.rank}
                </div>
              </div>

              {/* Product Image */}
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-2xl">
                  {product.name.charAt(0)}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">
                  {product.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-warning-500 fill-current" />
                    <span className="text-xs text-muted-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {formatNumber(product.sales)} sold
                  </span>
                </div>
              </div>

              {/* Revenue */}
              <div className="flex-shrink-0 text-right">
                <p className="font-medium text-foreground">
                  {formatCurrency(product.revenue)}
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-success-500" />
                  <span className="text-xs text-success-600">
                    +{product.growth}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <button className="w-full py-2 px-4 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors">
            View all products
          </button>
        </div>
      </div>
    </motion.div>
  )
} 