"use client"

import { Header } from '@/components/header'
import { ChartCard } from '@/components/chart-card'
import { motion } from 'framer-motion'

export default function AnalyticsPage() {
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
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Detailed analytics and performance metrics for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <ChartCard
              title="User Growth"
              subtitle="Monthly user acquisition trends"
              type="line"
              data={userGrowthData}
              className="h-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ChartCard
              title="Conversion Funnel"
              subtitle="User journey through your platform"
              type="bar"
              data={conversionData}
              className="h-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ChartCard
              title="Geographic Distribution"
              subtitle="Users by location"
              type="area"
              data={geoData}
              className="h-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ChartCard
              title="Device Usage"
              subtitle="Platform distribution"
              type="bar"
              data={deviceData}
              className="h-80"
            />
          </motion.div>
        </div>
      </main>
    </div>
  )
}

const userGrowthData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1400 },
  { name: 'Mar', value: 1600 },
  { name: 'Apr', value: 1800 },
  { name: 'May', value: 2100 },
  { name: 'Jun', value: 2400 },
  { name: 'Jul', value: 2800 },
  { name: 'Aug', value: 3200 },
  { name: 'Sep', value: 3600 },
  { name: 'Oct', value: 4000 },
  { name: 'Nov', value: 4500 },
  { name: 'Dec', value: 5000 },
]

const conversionData = [
  { name: 'Visitors', value: 10000 },
  { name: 'Signups', value: 2500 },
  { name: 'Trials', value: 1500 },
  { name: 'Paid', value: 800 },
]

const geoData = [
  { name: 'North America', value: 45 },
  { name: 'Europe', value: 30 },
  { name: 'Asia', value: 15 },
  { name: 'Others', value: 10 },
]

const deviceData = [
  { name: 'Desktop', value: 60 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 5 },
] 