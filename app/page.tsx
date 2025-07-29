"use client"

import { Header } from '@/components/header'
import { StatCard } from '@/components/stat-card'
import { ChartCard } from '@/components/chart-card'
import { ActivityFeed } from '@/components/activity-feed'
import { AIInsights } from '@/components/ai-insights'
import { AIChat } from '@/components/ai-chat'
import { AIPredictions } from '@/components/ai-predictions'
import { AIRecommendations } from '@/components/ai-recommendations'
import { RecentTransactions } from '@/components/recent-transactions'
import { TopProducts } from '@/components/top-products'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Main dashboard component - handles the overview page
export default function Dashboard() {
  // Sample data for charts - in real app this would come from API
  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 4000 },
    { name: 'Sep', value: 3800 },
    { name: 'Oct', value: 4300 },
    { name: 'Nov', value: 4800 },
    { name: 'Dec', value: 5200 },
  ]

  const salesData = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Books', value: 200 },
    { name: 'Home & Garden', value: 278 },
    { name: 'Sports', value: 189 },
    { name: 'Beauty', value: 239 },
  ]

  // Real-time revenue state
  const [revenue, setRevenue] = useState(45231.89)
  const [revenueChange, setRevenueChange] = useState(20.1)
  const [isLive, setIsLive] = useState(true)

  // Loading state for skeletons
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Simulate real-time updates every 5 seconds
    const interval = setInterval(() => {
      // Randomly increase or decrease revenue
      const delta = (Math.random() - 0.4) * 200
      setRevenue(prev => Math.max(0, prev + delta))
      setRevenueChange(prev => prev + (Math.random() - 0.5) * 2)
      setIsLive(true)
      setTimeout(() => setIsLive(false), 1200)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Hey Sarah, welcome back! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your business today. I've got some interesting insights for you.
          </p>
        </motion.div>

        {/* Key metrics cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="card p-6 animate-pulse">
                <div className="h-4 w-24 bg-muted rounded mb-4" />
                <div className="h-8 w-32 bg-muted rounded mb-2" />
                <div className="h-4 w-16 bg-muted rounded" />
              </div>
            ))
          ) : (
            <>
              <div className="relative">
                <StatCard
                  title="Total Revenue"
                  value={`$${revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  change={`${revenueChange > 0 ? '+' : ''}${revenueChange.toFixed(1)}%`}
                  changeType={revenueChange >= 0 ? 'positive' : 'negative'}
                  icon="dollar"
                  gradient="primary"
                />
                {/* Live indicator */}
                <div className="absolute top-3 right-3 flex items-center space-x-1">
                  <span className={`h-2 w-2 rounded-full ${isLive ? 'bg-success-500 animate-pulse' : 'bg-muted-foreground'}`}></span>
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>
              <StatCard
                title="Total Orders"
                value="2,350"
                change="+180.1%"
                changeType="positive"
                icon="shopping-cart"
                gradient="secondary"
              />
              <StatCard
                title="Active Users"
                value="1,234"
                change="+19%"
                changeType="positive"
                icon="users"
                gradient="success"
              />
              <StatCard
                title="Conversion Rate"
                value="3.24%"
                change="-1.2%"
                changeType="negative"
                icon="trending-up"
                gradient="warning"
              />
            </>
          )}
        </motion.div>

        {/* AI features section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="card h-[450px] flex flex-col animate-pulse">
                  <div className="h-8 w-40 bg-muted rounded mb-4" />
                  <div className="flex-1 bg-muted rounded" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Smart Analytics 🤖
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AIChat />
                <AIPredictions />
              </div>
            </>
          )}
        </motion.div>

        {/* Business recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          {loading ? (
            <div className="card h-40 animate-pulse">
              <div className="h-8 w-40 bg-muted rounded mb-4" />
              <div className="h-6 w-3/4 bg-muted rounded mb-2" />
              <div className="h-6 w-1/2 bg-muted rounded" />
            </div>
          ) : (
            <AIRecommendations />
          )}
        </motion.div>

        {/* Main content grid: 2x2 for charts, then sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 2x2 grid for charts and table */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {loading ? (
                Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="card h-80 animate-pulse">
                    <div className="h-8 w-40 bg-muted rounded mb-4" />
                    <div className="h-64 w-full bg-muted rounded" />
                  </div>
                ))
              ) : (
                <>
                  <ChartCard
                    title="Revenue Trends"
                    subtitle="Monthly performance with trend analysis"
                    type="line"
                    data={revenueData}
                    className="h-96"
                  />
                  <ChartCard
                    title="Sales by Category"
                    subtitle="Product category performance breakdown"
                    type="bar"
                    data={salesData}
                    className="h-96"
                  />
                </>
              )}
            </div>
            <div>
              {loading ? (
                <div className="card h-80 animate-pulse">
                  <div className="h-8 w-40 bg-muted rounded mb-4" />
                  <div className="h-64 w-full bg-muted rounded" />
                </div>
              ) : (
                <RecentTransactions />
              )}
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="card h-40 animate-pulse">
                  <div className="h-8 w-40 bg-muted rounded mb-4" />
                  <div className="h-6 w-3/4 bg-muted rounded mb-2" />
                  <div className="h-6 w-1/2 bg-muted rounded" />
                </div>
              ))
            ) : (
              <>
                <AIInsights />
                <TopProducts />
                <ActivityFeed />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
} 