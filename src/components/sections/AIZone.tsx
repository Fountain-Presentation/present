'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Send } from 'lucide-react'
import { cn } from '@/lib/cn'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

type Mode = 'ama' | 'scenario'

const amaChips = [
  "How would you approach onboarding optimization?",
  "What's your marketing automation experience?",
  "Walk me through the PLG-to-SLG handoff",
  "What did you learn about growth at Brewbike?"
]

const scenarioChips = [
  "McDonald's",
  "Subway",
  "Chick-fil-A",
  "7-Eleven",
  "Domino's"
]

export default function AIZone() {
  const [mode, setMode] = useState<Mode>('ama')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleModeChange = (newMode: Mode) => {
    if (newMode !== mode) {
      setMode(newMode)
      setMessages([])
      setInput('')
    }
  }

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, mode })
      })

      const data = await response.json()

      if (data.response) {
        setMessages([...newMessages, { role: 'assistant', content: data.response }])
      }
    } catch (error) {
      console.error('Failed to send message:', error)
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleChipClick = (chip: string) => {
    if (mode === 'scenario') {
      sendMessage(`Generate a land-and-expand strategy for ${chip}`)
    } else {
      sendMessage(chip)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const canSend = input.trim() && !isLoading

  return (
    <div data-aizone-wrapper className="sm:m-6">
      <section data-debug="aizone-section" data-aizone-card className="rounded-none sm:rounded-[44px] md:rounded-2xl gradient-hero text-dark-text p-6 overflow-x-clip">
      <div className="max-w-[768px] mx-auto min-w-0">
        {/* Section Label */}
        <motion.p
          data-debug="aizone-label"
          className="md:mt-12 text-white/70 uppercase tracking-[0.2em] text-xs mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          05 — Explore
        </motion.p>

        {/* Title */}
        <motion.h2
          data-debug="aizone-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-[clamp(32px,5vw,44px)] font-bold leading-[1.15] mb-8"
        >
          Ask Me Anything
        </motion.h2>

        {/* Framing Text */}
        <motion.p
          data-debug="aizone-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-lg leading-[1.75] mb-4"
        >
          This page covers the framework. But strategy lives in the details. I built this interactive layer so you can go deeper on anything — my thinking, my background, or how I'd apply this to a specific scenario.
        </motion.p>

        {/* Mode Toggle */}
        <motion.div
          data-debug="aizone-mode-toggle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-3 mb-8"
        >
          <button
            data-debug="aizone-btn-ama"
            onClick={() => handleModeChange('ama')}
            className={cn(
              "text-sm font-medium py-3 px-6 rounded-full cursor-pointer transition-all",
              mode === 'ama'
                ? "bg-accent text-white border-none"
                : "glass text-white/90"
            )}
          >
            Ask Me Anything
          </button>
          <button
            data-debug="aizone-btn-scenario"
            onClick={() => handleModeChange('scenario')}
            className={cn(
              "text-sm font-medium py-3 px-6 rounded-full cursor-pointer transition-all",
              mode === 'scenario'
                ? "bg-accent text-white border-none"
                : "glass text-white/90"
            )}
          >
            Run a Scenario
          </button>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          data-debug="aizone-chat-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl overflow-hidden"
        >
          {/* Messages Area */}
          <div
            data-debug="aizone-messages-area"
            className="aizone-messages h-96 overflow-y-auto p-6"
          >
            {messages.length === 0 ? (
              <div>
                {/* Starter Chips */}
                {mode === 'scenario' && (
                  <p className="text-white/60 text-sm mb-4">
                    Pick a franchise brand and I'll walk through the playbook:
                  </p>
                )}
                <div
                  data-debug="aizone-chips"
                  className="flex flex-wrap gap-2"
                >
                  {(mode === 'ama' ? amaChips : scenarioChips).map((chip) => (
                    <motion.button
                      key={chip}
                      onClick={() => handleChipClick(chip)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-sm py-2.5 px-4 rounded-[20px] border border-white/30 bg-transparent text-dark-text cursor-pointer transition-all"
                    >
                      {chip}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "flex",
                        message.role === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] py-3 px-4 text-dark-text text-[15px] leading-[1.6] whitespace-pre-wrap",
                          message.role === 'user'
                            ? "bg-accent rounded-2xl rounded-br-[4px]"
                            : "bg-white/10 rounded-2xl rounded-bl-[4px]"
                        )}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="py-3 px-4 rounded-2xl rounded-bl-[4px] bg-white/10">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -6, 0],
                              opacity: [0.4, 1, 0.4]
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15
                            }}
                            className="w-2 h-2 rounded-full bg-muted"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <form
            data-debug="aizone-input-form"
            onSubmit={handleSubmit}
            className="flex gap-3 py-4 px-6 border-t border-white/10 bg-black/20"
          >
            <input
              data-debug="aizone-input-field"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={mode === 'ama' ? "Ask me anything..." : "Type a franchise name..."}
              disabled={isLoading}
              className="flex-1 min-w-0 text-base py-3 px-4 rounded-full border border-white/20 bg-white/10 text-dark-text outline-none"
            />
            <button
              data-debug="aizone-send-btn"
              type="submit"
              disabled={isLoading || !input.trim()}
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full border-none transition-all",
                canSend
                  ? "bg-accent text-white cursor-pointer"
                  : "bg-white/10 text-white/50 cursor-not-allowed"
              )}
            >
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
    </div>
  )
}
