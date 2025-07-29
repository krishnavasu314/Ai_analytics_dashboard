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

        {/* 2x2 grid for first 4 charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ChartCard
            title="User Growth"
            subtitle="Monthly user acquisition trends"
            type="line"
            data={userGrowthData}
            className="h-96"
          />
          <ChartCard
            title="Conversion Funnel"
            subtitle="User journey through your platform"
            type="bar"
            data={conversionData}
            className="h-96"
          />
          <ChartCard
            title="Geographic Distribution"
            subtitle="Users by location"
            type="area"
            data={geoData}
            className="h-96"
          />
          <ChartCard
            title="Device Usage"
            subtitle="Platform distribution"
            type="bar"
            data={deviceData}
            className="h-96"
          />
        </div>

        {/* Centered Pie/Donut chart */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <ChartCard
              title="Campaign Channel Breakdown"
              subtitle="Share of spend by channel"
              type="pie"
              data={productCategoryData}
              className="h-96"
            />
          </div>
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
  { name: 'Visited', value: 5000 },
  { name: 'Signed Up', value: 2000 },
  { name: 'Activated', value: 1200 },
  { name: 'Paid', value: 800 },
]

const geoData = [
  { name: 'USA', value: 3200 },
  { name: 'India', value: 2100 },
  { name: 'UK', value: 900 },
  { name: 'Germany', value: 700 },
  { name: 'Canada', value: 600 },
]

const deviceData = [
  { name: 'Desktop', value: 60 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 5 },
]

const productCategoryData = [
  { name: 'Search Ads', value: 400 },
  { name: 'Social Media', value: 300 },
  { name: 'Email', value: 200 },
  { name: 'B2B', value: 100 },
  { name: 'Other', value: 50 },
] 