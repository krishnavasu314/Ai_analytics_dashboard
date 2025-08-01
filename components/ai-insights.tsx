"use client"

import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Insight {
  id: string
  type: 'positive' | 'warning' | 'info'
  title: string
  description: string
  action?: string
  icon: React.ReactNode
}

const insights: Insight[] = [
  {
    type: 'positive',
    title: 'Campaign ROI Surges',
    description: 'Your Google Ads - Spring Sale campaign achieved a 35% ROI increase this week. Consider allocating more budget to this channel.',
    icon: <TrendingUp />
  },
  {
    type: 'warning',
    title: 'Low Engagement Alert',
    description: 'Instagram Influencer - Brand Awareness campaign engagement dropped by 12%. Try new creative or adjust posting times.',
    icon: <AlertTriangle />
  },
  {
    type: 'info',
    title: 'Email Open Rates Up',
    description: 'Your Email Blast - New Product Launch campaign saw a 22% increase in open rates. Personalized subject lines are working well.',
    icon: <Lightbulb />
  },
  {
    type: 'positive',
    title: 'Retargeting Success',
    description: 'Facebook Ads - Retargeting campaign is converting 18% more users than last month. Retargeting is driving strong results.',
    icon: <TrendingUp />
  },
  {
    type: 'info',
    title: 'B2B Leads Growing',
    description: 'LinkedIn Outreach - B2B Leads campaign generated 40 new leads this week. Keep nurturing these prospects.',
    icon: <Lightbulb />
  }
]

const typeStyles = {
  positive: 'border-success-200 bg-success-50 dark:bg-success-950/20',
  warning: 'border-warning-200 bg-warning-50 dark:bg-warning-950/20',
  info: 'border-primary-200 bg-primary-50 dark:bg-primary-950/20',
}

export function AIInsights() {
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
            <h3 className="card-title">AI Insights</h3>
            <p className="card-description">Intelligent recommendations for your business</p>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-4 rounded-lg border transition-all duration-200 hover:shadow-md",
                typeStyles[insight.type]
              )}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  {insight.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {insight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {insight.description}
                  </p>
                  {insight.action && (
                    <button className="inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
                      {insight.action}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  )}
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
                AI analyzing data...
              </span>
            </div>
            <button className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
              View all insights
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 