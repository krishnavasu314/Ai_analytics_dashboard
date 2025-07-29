"use client"

import { motion } from 'framer-motion'
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
  icon: 'dollar' | 'shopping-cart' | 'users' | 'trending-up'
  gradient: 'primary' | 'secondary' | 'success' | 'warning'
  className?: string
}

const iconMap = {
  dollar: DollarSign,
  'shopping-cart': ShoppingCart,
  users: Users,
  'trending-up': TrendingUp,
}

const gradientClasses = {
  primary: 'gradient-bg',
  secondary: 'gradient-bg-secondary',
  success: 'gradient-bg-success',
  warning: 'gradient-bg-warning',
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
  gradient,
  className
}: StatCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "card p-6 transition-all duration-200 hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-foreground mb-2">
            {value}
          </p>
          <div className="flex items-center space-x-1">
            {changeType === 'positive' ? (
              <TrendingUp className="h-4 w-4 text-success-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-danger-500" />
            )}
            <span
              className={cn(
                "text-sm font-medium",
                changeType === 'positive' 
                  ? "text-success-600" 
                  : "text-danger-600"
              )}
            >
              {change}
            </span>
            <span className="text-sm text-muted-foreground">
              from last month
            </span>
          </div>
        </div>
        
        <div className={cn(
          "h-12 w-12 rounded-lg flex items-center justify-center",
          gradientClasses[gradient]
        )}>
          <IconComponent className="h-6 w-6 text-white" />
        </div>
      </div>
    </motion.div>
  )
} 