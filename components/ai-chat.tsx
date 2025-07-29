"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Bot, 
  User, 
  Brain,
  TrendingUp,
  AlertTriangle,
  Lightbulb
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Message interface for chat
interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
  insights?: string[]
}

// AI response data - in real app this would come from API
const aiResponseData = {
  revenue: {
    content: "Looking at your revenue data, I can see a solid 23% growth compared to last month. The Electronics category is really driving this growth - it's up 40%! You might want to double down on that category and maybe expand your product line there.",
    insights: ['Revenue growth: +23%', 'Electronics up 40%', 'Consider expanding product line']
  },
  customers: {
    content: "Great news on the customer front! Your acquisition rate jumped 15% this quarter. Most of the new customers are coming through your social media campaigns - they're really working well. Maybe consider boosting your marketing spend there?",
    insights: ['Customer acquisition: +15%', 'Social media performing well', 'Increase marketing budget']
  },
  products: {
    content: "Your Wireless Headphones and Smart Watch Pro are absolutely crushing it! These are your best performers by far. I'd suggest creating a bundle deal for these two - could really boost your average order value.",
    insights: ['Top products identified', 'Bundle promotion recommended', 'Increase average order value']
  },
  trends: {
    content: "Here's something interesting - mobile purchases are up 40% this month! That's a huge jump. You should definitely optimize your mobile checkout experience and maybe run some mobile-specific promotions.",
    insights: ['Mobile purchases: +40%', 'Optimize mobile experience', 'Mobile-specific promotions']
  },
  predictions: {
    content: "Based on what I'm seeing in your data, I think you're looking at an 18% revenue increase next month. This takes into account your current growth rate, seasonal patterns, and market trends.",
    insights: ['Revenue forecast: +18%', 'Seasonal trends considered', 'Market conditions analyzed']
  }
}

// AI chat component
export function AIChat() {
  // Chat state management
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi there! I'm your analytics assistant. I can help you understand your business data, spot trends, and give you actionable insights. What would you like to know about your performance?",
      timestamp: new Date(),
      insights: ['Revenue up 23% this month', 'Mobile sales growing rapidly', 'Electronics category performing well']
    }
  ])
  
  const [userInput, setUserInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  // Handle sending messages
  const sendMessage = async () => {
    if (!userInput.trim()) return

    // Add user message to chat
    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: userInput,
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, newUserMessage])
    setUserInput('')
    setIsProcessing(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const response = getAIResponse(userInput.toLowerCase())
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response.content,
        timestamp: new Date(),
        insights: response.insights
      }
      setChatMessages(prev => [...prev, aiMessage])
      setIsProcessing(false)
    }, 1500)
  }

  // Generate AI response based on user input
  const getAIResponse = (query: string): { content: string; insights: string[] } => {
    if (query.includes('revenue') || query.includes('sales')) {
      return aiResponseData.revenue
    } else if (query.includes('customer') || query.includes('user')) {
      return aiResponseData.customers
    } else if (query.includes('product') || query.includes('item')) {
      return aiResponseData.products
    } else if (query.includes('trend') || query.includes('pattern')) {
      return aiResponseData.trends
    } else if (query.includes('predict') || query.includes('forecast')) {
      return aiResponseData.predictions
    } else {
      return {
        content: "I can help you analyze revenue trends, customer behavior, product performance, market trends, and make predictions. What specific aspect would you like to explore?",
        insights: ['Revenue analysis available', 'Customer insights ready', 'Product performance data']
      }
    }
  }

  // Quick question suggestions
  const quickQuestions = [
    "How is my revenue performing?",
    "What are my top products?",
    "Show me customer trends",
    "Predict next month's sales"
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card h-96 flex flex-col"
    >
      <div className="card-header">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="card-title">Analytics Assistant</h3>
            <p className="card-description">Ask me anything about your data</p>
          </div>
        </div>
      </div>

      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {chatMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex space-x-3",
                message.type === 'user' ? "justify-end" : "justify-start"
              )}
            >
              {message.type === 'ai' && (
                <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}
              
              <div className={cn(
                "max-w-xs lg:max-w-md p-3 rounded-lg",
                message.type === 'user'
                  ? "bg-primary-600 text-white"
                  : "bg-muted"
              )}>
                <p className="text-sm">{message.content}</p>
                
                {message.insights && message.type === 'ai' && (
                  <div className="mt-3 space-y-1">
                    {message.insights.map((insight, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs">
                        <Lightbulb className="h-3 w-3 text-warning-500" />
                        <span className="text-muted-foreground">{insight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {message.type === 'user' && (
                <div className="h-8 w-8 rounded-full gradient-bg-secondary flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex space-x-3"
          >
            <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input area */}
      <div className="p-4 border-t">
        {/* Quick question buttons */}
        <div className="flex flex-wrap gap-2 mb-3">
          {quickQuestions.map((question) => (
            <button
              key={question}
              onClick={() => setUserInput(question)}
              className="text-xs px-3 py-1 bg-muted rounded-full hover:bg-muted/80 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>

        {/* Message input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about your data..."
            className="flex-1 px-3 py-2 border rounded-md bg-background text-sm"
          />
          <button
            onClick={sendMessage}
            disabled={!userInput.trim() || isProcessing}
            className="px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
} 