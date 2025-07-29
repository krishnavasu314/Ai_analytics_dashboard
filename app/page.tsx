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
          <StatCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1%"
            changeType="positive"
            icon="dollar"
            gradient="primary"
          />
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
        </motion.div>

        {/* AI features section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Smart Analytics 🤖
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AIChat />
            <AIPredictions />
          </div>
        </motion.div>

        {/* Business recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <AIRecommendations />
        </motion.div>

        {/* Charts and data section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue trend chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ChartCard
                title="Revenue Trends"
                subtitle="Monthly performance with trend analysis"
                type="line"
                data={revenueData}
                className="h-80"
              />
            </motion.div>

            {/* Sales breakdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ChartCard
                title="Sales by Category"
                subtitle="Product category performance breakdown"
                type="bar"
                data={salesData}
                className="h-80"
              />
            </motion.div>

            {/* Recent activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <RecentTransactions />
            </motion.div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-8">
            {/* AI insights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AIInsights />
            </motion.div>

            {/* Top performing products */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <TopProducts />
            </motion.div>

            {/* Activity feed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <ActivityFeed />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
} 