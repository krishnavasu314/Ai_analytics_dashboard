"use client"

import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  Users,
  ShoppingCart,
  Target
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Recommendation {
  id: string
  type: 'opportunity' | 'warning' | 'optimization' | 'action'
  title: string
  description: string
  impact: 'high' | 'medium' | 'low'
  effort: 'low' | 'medium' | 'high'
  estimatedValue: string
  category: string
  priority: number
}

const recommendations: Recommendation[] = [
  {
    id: '1',
    type: 'opportunity',
    title: 'Launch Mobile-First Campaign',
    description: 'Mobile purchases increased 40% this month. Launch targeted mobile campaigns to capitalize on this trend.',
    impact: 'high',
    effort: 'medium',
    estimatedValue: '+$15,000 revenue',
    category: 'Marketing',
    priority: 1
  },
  {
    id: '2',
    type: 'optimization',
    title: 'Optimize Checkout Process',
    description: 'Cart abandonment rate is 23%. Implement one-click checkout and save payment methods.',
    impact: 'high',
    effort: 'low',
    estimatedValue: '+$8,500 revenue',
    category: 'UX',
    priority: 2
  },
  {
    id: '3',
    type: 'warning',
    title: 'Inventory Alert: Wireless Headphones',
    description: 'Stock levels are running low. Reorder soon to avoid stockouts during peak demand.',
    impact: 'medium',
    effort: 'low',
    estimatedValue: 'Prevent $5,000 loss',
    category: 'Inventory',
    priority: 3
  },
  {
    id: '4',
    type: 'action',
    title: 'Bundle Top Products',
    description: 'Create bundles of Wireless Headphones + Smart Watch to increase average order value.',
    impact: 'medium',
    effort: 'medium',
    estimatedValue: '+$3,200 revenue',
    category: 'Sales',
    priority: 4
  },
  {
    id: '5',
    type: 'optimization',
    title: 'Enhance Customer Support',
    description: 'Customer satisfaction scores dropped 5%. Implement live chat and improve response times.',
    impact: 'medium',
    effort: 'medium',
    estimatedValue: '+$2,800 revenue',
    category: 'Support',
    priority: 5
  }
]

const typeStyles = {
  opportunity: {
    icon: TrendingUp,
    bg: 'bg-success-50 border-success-200',
    iconBg: 'gradient-bg-success',
    text: 'text-success-800'
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-warning-50 border-warning-200',
    iconBg: 'gradient-bg-warning',
    text: 'text-warning-800'
  },
  optimization: {
    icon: Target,
    bg: 'bg-primary-50 border-primary-200',
    iconBg: 'gradient-bg',
    text: 'text-primary-800'
  },
  action: {
    icon: CheckCircle,
    bg: 'bg-secondary-50 border-secondary-200',
    iconBg: 'gradient-bg-secondary',
    text: 'text-secondary-800'
  }
}

const impactColors = {
  high: 'bg-danger-500',
  medium: 'bg-warning-500',
  low: 'bg-success-500'
}

const effortColors = {
  low: 'bg-success-500',
  medium: 'bg-warning-500',
  high: 'bg-danger-500'
}

export function AIRecommendations() {
  const sortedRecommendations = recommendations.sort((a, b) => a.priority - b.priority)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
            <Lightbulb className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="card-title">AI Recommendations</h3>
            <p className="card-description">Intelligent business recommendations</p>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="space-y-4">
          {sortedRecommendations.map((recommendation, index) => {
            const TypeIcon = typeStyles[recommendation.type].icon
            const styles = typeStyles[recommendation.type]
            
            return (
              <motion.div
                key={recommendation.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-4 border rounded-lg transition-all duration-200 hover:shadow-md",
                  styles.bg
                )}
              >
                <div className="flex items-start space-x-3">
                  <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0", styles.iconBg)}>
                    <TypeIcon className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{recommendation.title}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          #{recommendation.priority}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {recommendation.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">Impact:</span>
                          <div className={cn("w-3 h-3 rounded-full", impactColors[recommendation.impact])} />
                          <span className="text-xs font-medium capitalize">{recommendation.impact}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">Effort:</span>
                          <div className={cn("w-3 h-3 rounded-full", effortColors[recommendation.effort])} />
                          <span className="text-xs font-medium capitalize">{recommendation.effort}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm font-semibold text-success-600">
                          {recommendation.estimatedValue}
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {recommendation.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-current/10">
                  <button className="flex items-center space-x-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                    <span>Implement Recommendation</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-success-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">
                AI analyzing opportunities...
              </span>
            </div>
            <button className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
              View all recommendations
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 