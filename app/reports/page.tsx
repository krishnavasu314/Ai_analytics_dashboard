"use client"

import { Header } from '@/components/header'
import { motion } from 'framer-motion'
import { 
  Download, 
  FileText, 
  BarChart3, 
  TrendingUp,
  Calendar,
  Filter
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function ReportsPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Reports & Insights
          </h1>
          <p className="text-muted-foreground">
            Generate and download comprehensive business reports.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-8"
        >
          <div className="card-content">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <select className="px-3 py-2 border rounded-md bg-background">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select className="px-3 py-2 border rounded-md bg-background">
                  <option>All categories</option>
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Operations</option>
                </select>
              </div>
              
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </motion.div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-200"
            >
              <div className="card-content">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center",
                    report.iconBg
                  )}>
                    {report.icon}
                  </div>
                  <button className="p-2 rounded-md hover:bg-muted transition-colors">
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {report.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {report.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {report.date}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-success-100 text-success-800">
                    {report.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center",
                    action.iconBg
                  )}>
                    {action.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{action.title}</p>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

const reports = [
  {
    id: '1',
    title: 'Monthly Sales Report',
    description: 'Comprehensive analysis of sales performance and trends',
    date: 'Jan 15, 2024',
    status: 'Ready',
    icon: <BarChart3 className="h-5 w-5 text-white" />,
    iconBg: 'gradient-bg'
  },
  {
    id: '2',
    title: 'Customer Analytics',
    description: 'Deep dive into customer behavior and preferences',
    date: 'Jan 14, 2024',
    status: 'Ready',
    icon: <TrendingUp className="h-5 w-5 text-white" />,
    iconBg: 'gradient-bg-success'
  },
  {
    id: '3',
    title: 'Financial Summary',
    description: 'Complete financial overview and projections',
    date: 'Jan 13, 2024',
    status: 'Ready',
    icon: <FileText className="h-5 w-5 text-white" />,
    iconBg: 'gradient-bg-secondary'
  },
  {
    id: '4',
    title: 'Marketing Performance',
    description: 'Campaign effectiveness and ROI analysis',
    date: 'Jan 12, 2024',
    status: 'Processing',
    icon: <BarChart3 className="h-5 w-5 text-white" />,
    iconBg: 'gradient-bg-warning'
  },
  {
    id: '5',
    title: 'Product Analytics',
    description: 'Product performance and inventory insights',
    date: 'Jan 11, 2024',
    status: 'Ready',
    icon: <TrendingUp className="h-5 w-5 text-white" />,
    iconBg: 'gradient-bg'
  },
  {
    id: '6',
    title: 'Operational Metrics',
    description: 'Key operational indicators and efficiency metrics',
    date: 'Jan 10, 2024',
    status: 'Ready',
    icon: <FileText className="h-5 w-5 text-white" />,
    iconBg: 'gradient-bg-success'
  }
]

const quickActions = [
  {
    id: '1',
    title: 'Export Data',
    description: 'Download raw data for analysis',
    icon: <Download className="h-4 w-4 text-white" />,
    iconBg: 'gradient-bg'
  },
  {
    id: '2',
    title: 'Schedule Report',
    description: 'Set up automated report delivery',
    icon: <Calendar className="h-4 w-4 text-white" />,
    iconBg: 'gradient-bg-secondary'
  },
  {
    id: '3',
    title: 'Custom Report',
    description: 'Create personalized reports',
    icon: <FileText className="h-4 w-4 text-white" />,
    iconBg: 'gradient-bg-success'
  },
  {
    id: '4',
    title: 'Share Insights',
    description: 'Share reports with team members',
    icon: <BarChart3 className="h-4 w-4 text-white" />,
    iconBg: 'gradient-bg-warning'
  }
] 