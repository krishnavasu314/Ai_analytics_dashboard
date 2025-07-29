"use client"

import { motion } from 'framer-motion'
import { 
  CreditCard, 
  ShoppingBag, 
  TrendingUp, 
  TrendingDown,
  MoreHorizontal
} from 'lucide-react'
import { formatCurrency, formatDateTime } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface Transaction {
  id: string
  customer: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  type: 'purchase' | 'refund' | 'subscription'
  date: Date
  product: string
}

const transactions: Transaction[] = [
  {
    id: '1',
    customer: 'John Smith',
    amount: 299.99,
    status: 'completed',
    type: 'purchase',
    date: new Date('2024-01-15T10:30:00'),
    product: 'Wireless Headphones'
  },
  {
    id: '2',
    customer: 'Sarah Johnson',
    amount: 149.99,
    status: 'pending',
    type: 'purchase',
    date: new Date('2024-01-15T09:15:00'),
    product: 'Smart Watch'
  },
  {
    id: '3',
    customer: 'Mike Wilson',
    amount: 89.99,
    status: 'completed',
    type: 'subscription',
    date: new Date('2024-01-15T08:45:00'),
    product: 'Premium Plan'
  },
  {
    id: '4',
    customer: 'Emily Davis',
    amount: 199.99,
    status: 'failed',
    type: 'purchase',
    date: new Date('2024-01-15T08:20:00'),
    product: 'Laptop Stand'
  },
  {
    id: '5',
    customer: 'David Brown',
    amount: 79.99,
    status: 'completed',
    type: 'refund',
    date: new Date('2024-01-15T07:55:00'),
    product: 'Phone Case'
  }
]

const statusStyles = {
  completed: 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400',
  pending: 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400',
  failed: 'bg-danger-100 text-danger-800 dark:bg-danger-900/20 dark:text-danger-400',
}

const typeIcons = {
  purchase: ShoppingBag,
  refund: TrendingDown,
  subscription: CreditCard,
}

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="card-header">
        <h3 className="card-title">Recent Transactions</h3>
        <p className="card-description">Latest customer transactions and orders</p>
      </div>
      
      <div className="card-content">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Product</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                const TypeIcon = typeIcons[transaction.type]
                return (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {transaction.customer.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{transaction.customer}</p>
                          <p className="text-sm text-muted-foreground">{transaction.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <TypeIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{transaction.product}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={cn(
                        "font-medium",
                        transaction.type === 'refund' ? "text-danger-600" : "text-foreground"
                      )}>
                        {transaction.type === 'refund' ? '-' : ''}{formatCurrency(transaction.amount)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={cn(
                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                        statusStyles[transaction.status]
                      )}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-muted-foreground">
                        {formatDateTime(transaction.date)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="p-1 rounded-md hover:bg-muted transition-colors">
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <button className="w-full py-2 px-4 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors">
            View all transactions
          </button>
        </div>
      </div>
    </motion.div>
  )
} 