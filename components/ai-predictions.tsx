"use client"

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown,
  Brain,
  Calendar,
  DollarSign,
  Users,
  ShoppingCart,
  Target
} from 'lucide-react'
import { formatCurrency, formatPercentage } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface Prediction {
  id: string
  metric: string
  currentValue: string
  predictedValue: string
  confidence: number
  trend: 'up' | 'down' | 'stable'
  timeframe: string
  factors: string[]
}

const predictions: Prediction[] = [
  {
    id: '1',
    metric: 'Revenue',
    currentValue: '$45,231',
    predictedValue: '$52,890',
    confidence: 87,
    trend: 'up',
    timeframe: 'Next Month',
    factors: ['Seasonal growth', 'New product launch', 'Marketing campaign']
  },
  {
    id: '2',
    metric: 'Customer Acquisition',
    currentValue: '1,234',
    predictedValue: '1,456',
    confidence: 92,
    trend: 'up',
    timeframe: 'Next Month',
    factors: ['Social media growth', 'Referral program', 'Content marketing']
  },
  {
    id: '3',
    metric: 'Conversion Rate',
    currentValue: '3.24%',
    predictedValue: '3.45%',
    confidence: 78,
    trend: 'up',
    timeframe: 'Next Month',
    factors: ['UX improvements', 'Checkout optimization', 'Mobile experience']
  },
  {
    id: '4',
    metric: 'Churn Rate',
    currentValue: '2.1%',
    predictedValue: '1.8%',
    confidence: 85,
    trend: 'down',
    timeframe: 'Next Month',
    factors: ['Customer success program', 'Better onboarding', 'Support improvements']
  }
]

export function AIPredictions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="card-title">AI Predictions</h3>
            <p className="card-description">AI-powered forecasts and trends</p>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <motion.div
              key={prediction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center",
                    prediction.trend === 'up' ? "gradient-bg-success" : 
                    prediction.trend === 'down' ? "gradient-bg-warning" : "gradient-bg"
                  )}>
                    {prediction.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-white" />
                    ) : prediction.trend === 'down' ? (
                      <TrendingDown className="h-4 w-4 text-white" />
                    ) : (
                      <Target className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{prediction.metric}</h4>
                    <p className="text-sm text-muted-foreground">{prediction.timeframe}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{prediction.currentValue}</span>
                    <span className="text-sm">→</span>
                    <span className="text-sm font-semibold text-foreground">{prediction.predictedValue}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div 
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          prediction.confidence >= 80 ? "bg-success-500" :
                          prediction.confidence >= 60 ? "bg-warning-500" : "bg-danger-500"
                        )}
                        style={{ width: `${prediction.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{prediction.confidence}%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Key Factors:</p>
                <div className="flex flex-wrap gap-1">
                  {prediction.factors.map((factor, factorIndex) => (
                    <span
                      key={factorIndex}
                      className="text-xs px-2 py-1 bg-primary-100 text-primary-800 rounded-full"
                    >
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-success-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">
                AI analyzing patterns...
              </span>
            </div>
            <button className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
              View detailed analysis
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 