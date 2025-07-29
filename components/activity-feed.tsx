"use client"

import { motion } from 'framer-motion'
import { 
  Bell, 
  User, 
  ShoppingCart, 
  Settings,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { formatDateTime } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface Activity {
  id: string
  type: 'order' | 'user' | 'system' | 'alert'
  title: string
  description: string
  time: Date
  status: 'completed' | 'pending' | 'error'
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'order',
    title: 'New order received',
    description: 'Order #12345 from John Smith for $299.99',
    time: new Date('2024-01-15T10:30:00'),
    status: 'completed'
  },
  {
    id: '2',
    type: 'user',
    title: 'New user registered',
    description: 'Sarah Johnson joined the platform',
    time: new Date('2024-01-15T10:15:00'),
    status: 'completed'
  },
  {
    id: '3',
    type: 'system',
    title: 'System maintenance',
    description: 'Database backup completed successfully',
    time: new Date('2024-01-15T10:00:00'),
    status: 'completed'
  },
  {
    id: '4',
    type: 'alert',
    title: 'Low inventory warning',
    description: 'Wireless Headphones stock is running low',
    time: new Date('2024-01-15T09:45:00'),
    status: 'pending'
  },
  {
    id: '5',
    type: 'order',
    title: 'Payment failed',
    description: 'Payment for order #12344 failed to process',
    time: new Date('2024-01-15T09:30:00'),
    status: 'error'
  }
]

const typeIcons = {
  order: ShoppingCart,
  user: User,
  system: Settings,
  alert: AlertCircle,
}

const statusIcons = {
  completed: CheckCircle,
  pending: Clock,
  error: AlertCircle,
}

const statusColors = {
  completed: 'text-success-500',
  pending: 'text-warning-500',
  error: 'text-danger-500',
}

export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-bg-success flex items-center justify-center">
            <Bell className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="card-title">Activity Feed</h3>
            <p className="card-description">Recent system activities and updates</p>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const TypeIcon = typeIcons[activity.type]
            const StatusIcon = statusIcons[activity.status]
            
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {/* Activity Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <TypeIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Activity Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatDateTime(activity.time)}
                      </p>
                    </div>
                    
                    {/* Status Icon */}
                    <div className="flex-shrink-0 ml-2">
                      <StatusIcon className={cn("h-4 w-4", statusColors[activity.status])} />
                    </div>
                  </div>
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
                Live updates enabled
              </span>
            </div>
            <button className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
              View all activities
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 