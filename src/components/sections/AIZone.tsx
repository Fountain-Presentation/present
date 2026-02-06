'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Send } from 'lucide-react'

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

  return (
    <div data-aizone-wrapper style={{ margin: '24px' }}>
      <section data-debug="aizone-section" data-aizone-card className="rounded-[44px] md:rounded-[16px]" style={{ background: 'linear-gradient(to bottom right, #3B82F6 0%, #4F46E5 30%, #7C3AED 60%, #6B21A8 85%, #581C87 100%)', color: '#E6EDF3', padding: '24px' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>
        {/* Section Label */}
        <motion.p
          data-debug="aizone-label"
          className="md:mt-[48px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: 'rgba(255, 255, 255, 0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '12px',
            marginBottom: '16px'
          }}
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
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: '#FFFFFF',
            fontSize: 'clamp(32px, 5vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '32px'
          }}
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
          style={{
            fontFamily: 'var(--font-general-sans)',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '18px',
            lineHeight: '1.75',
            marginBottom: '16px'
          }}
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
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '32px'
          }}
        >
          <button
            data-debug="aizone-btn-ama"
            onClick={() => handleModeChange('ama')}
            style={{
              fontFamily: 'var(--font-general-sans)',
              fontSize: '14px',
              fontWeight: 500,
              padding: '12px 24px',
              borderRadius: '100px',
              border: mode === 'ama' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: mode === 'ama' ? '#0066FF' : 'rgba(255, 255, 255, 0.1)',
              backdropFilter: mode === 'ama' ? 'none' : 'blur(12px)',
              WebkitBackdropFilter: mode === 'ama' ? 'none' : 'blur(12px)',
              color: mode === 'ama' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Ask Me Anything
          </button>
          <button
            data-debug="aizone-btn-scenario"
            onClick={() => handleModeChange('scenario')}
            style={{
              fontFamily: 'var(--font-general-sans)',
              fontSize: '14px',
              fontWeight: 500,
              padding: '12px 24px',
              borderRadius: '100px',
              border: mode === 'scenario' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: mode === 'scenario' ? '#0066FF' : 'rgba(255, 255, 255, 0.1)',
              backdropFilter: mode === 'scenario' ? 'none' : 'blur(12px)',
              WebkitBackdropFilter: mode === 'scenario' ? 'none' : 'blur(12px)',
              color: mode === 'scenario' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
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
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}
        >
          {/* Messages Area */}
          <div
            data-debug="aizone-messages-area"
            className="aizone-messages"
            style={{
              height: '384px',
              overflowY: 'auto',
              padding: '24px'
            }}
          >
            {messages.length === 0 ? (
              <div>
                {/* Starter Chips */}
                {mode === 'scenario' && (
                  <p
                    style={{
                      fontFamily: 'var(--font-general-sans)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '14px',
                      marginBottom: '16px'
                    }}
                  >
                    Pick a franchise brand and I'll walk through the playbook:
                  </p>
                )}
                <div
                  data-debug="aizone-chips"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}
                >
                  {(mode === 'ama' ? amaChips : scenarioChips).map((chip) => (
                    <motion.button
                      key={chip}
                      onClick={() => handleChipClick(chip)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        fontFamily: 'var(--font-general-sans)',
                        fontSize: '14px',
                        padding: '10px 16px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        backgroundColor: 'transparent',
                        color: '#E6EDF3',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {chip}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: 'flex',
                        justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                      }}
                    >
                      <div
                        style={{
                          maxWidth: '85%',
                          padding: '12px 16px',
                          borderRadius: message.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                          backgroundColor: message.role === 'user' ? '#0066FF' : 'rgba(255, 255, 255, 0.1)',
                          color: '#E6EDF3',
                          fontFamily: 'var(--font-general-sans)',
                          fontSize: '15px',
                          lineHeight: '1.6',
                          whiteSpace: 'pre-wrap'
                        }}
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
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start'
                    }}
                  >
                    <div
                      style={{
                        padding: '12px 16px',
                        borderRadius: '16px 16px 16px 4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '4px' }}>
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
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#6B7280'
                            }}
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
            style={{
              display: 'flex',
              gap: '12px',
              padding: '16px 24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }}
          >
            <input
              data-debug="aizone-input-field"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={mode === 'ama' ? "Ask me anything..." : "Type a franchise name..."}
              disabled={isLoading}
              style={{
                flex: 1,
                fontFamily: 'var(--font-general-sans)',
                fontSize: '15px',
                padding: '12px 16px',
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#E6EDF3',
                outline: 'none'
              }}
            />
            <button
              data-debug="aizone-send-btn"
              type="submit"
              disabled={isLoading || !input.trim()}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: input.trim() && !isLoading ? '#0066FF' : 'rgba(255, 255, 255, 0.1)',
                color: input.trim() && !isLoading ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease'
              }}
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
