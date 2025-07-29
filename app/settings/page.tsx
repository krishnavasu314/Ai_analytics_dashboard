"use client"

import { Header } from '@/components/header'
import { motion } from 'framer-motion'
import { 
  User, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  Database,
  Zap,
  Save
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    weekly: true
  })

  const [privacy, setPrivacy] = useState({
    profile: 'public',
    analytics: true,
    marketing: false
  })

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
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account preferences and system settings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="card">
              <div className="card-content">
                <nav className="space-y-2">
                  {settingsNav.map((item, index) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ x: 4 }}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                    >
                      <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>

          {/* Settings Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profile Settings */}
            <div className="card">
              <div className="card-header">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="card-title">Profile Settings</h3>
                    <p className="card-description">Manage your account information</p>
                  </div>
                </div>
              </div>
              <div className="card-content space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Sarah Johnson"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="sarah@example.com"
                      className="w-full px-3 py-2 border rounded-md bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Product Manager at TechCorp"
                    className="w-full px-3 py-2 border rounded-md bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="card">
              <div className="card-header">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg gradient-bg-secondary flex items-center justify-center">
                    <Bell className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="card-title">Notifications</h3>
                    <p className="card-description">Configure your notification preferences</p>
                  </div>
                </div>
              </div>
              <div className="card-content space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground capitalize">
                        {key} notifications
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Receive {key} notifications about your account
                      </p>
                    </div>
                    <button
                      onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                      className={cn(
                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                        value ? "bg-primary-600" : "bg-muted"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                          value ? "translate-x-6" : "translate-x-1"
                        )}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="card">
              <div className="card-header">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg gradient-bg-success flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="card-title">Privacy & Security</h3>
                    <p className="card-description">Manage your privacy settings</p>
                  </div>
                </div>
              </div>
              <div className="card-content space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Profile Visibility
                  </label>
                  <select className="w-full px-3 py-2 border rounded-md bg-background">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="friends">Friends Only</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Analytics Sharing</p>
                    <p className="text-sm text-muted-foreground">
                      Allow us to use your data for analytics
                    </p>
                  </div>
                  <button
                    onClick={() => setPrivacy(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={cn(
                      "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                      privacy.analytics ? "bg-primary-600" : "bg-muted"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                        privacy.analytics ? "translate-x-6" : "translate-x-1"
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

const settingsNav = [
  {
    id: '1',
    title: 'Profile',
    description: 'Account information',
    icon: <User className="h-4 w-4 text-white" />
  },
  {
    id: '2',
    title: 'Notifications',
    description: 'Alert preferences',
    icon: <Bell className="h-4 w-4 text-white" />
  },
  {
    id: '3',
    title: 'Privacy',
    description: 'Security settings',
    icon: <Shield className="h-4 w-4 text-white" />
  },
  {
    id: '4',
    title: 'Appearance',
    description: 'Theme and display',
    icon: <Palette className="h-4 w-4 text-white" />
  },
  {
    id: '5',
    title: 'Language',
    description: 'Regional settings',
    icon: <Globe className="h-4 w-4 text-white" />
  },
  {
    id: '6',
    title: 'Data & Storage',
    description: 'Storage management',
    icon: <Database className="h-4 w-4 text-white" />
  },
  {
    id: '7',
    title: 'Performance',
    description: 'System optimization',
    icon: <Zap className="h-4 w-4 text-white" />
  }
] 