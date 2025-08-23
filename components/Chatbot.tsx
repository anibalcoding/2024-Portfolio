'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Bot, User, Download, MessageCircle } from 'lucide-react'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi, I'm a friendly chatbot that lets you interact with this portfolio and CV. How can I help?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: getBotResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('skill') || input.includes('technology')) {
      return "I'm proficient in HTML, CSS, JavaScript, React, Next.js, Node.js, and more. I also have experience with cloud platforms like Azure and various development tools. What specific area would you like to know more about?"
    }
    
    if (input.includes('experience') || input.includes('work')) {
      return "I have over 4 years of experience in web development, including freelance work, eCommerce specialization at REV Robotics, and sales management experience at Samsung. I've delivered 15+ client websites with excellent results."
    }
    
    if (input.includes('project') || input.includes('portfolio')) {
      return "I've worked on various projects including the Leno App marketing website, a Pokemon API project, and an Anime Vault built with Next.js. Each project demonstrates different technical skills and problem-solving approaches."
    }
    
    if (input.includes('contact') || input.includes('hire')) {
      return "I'm always open to new opportunities! You can reach me at anibalcoding@gmail.com. I'm particularly interested in full-stack development roles and freelance projects."
    }
    
    if (input.includes('resume') || input.includes('cv')) {
      return "You can download my resume using the button below. It contains detailed information about my skills, experience, and achievements. Feel free to ask me any specific questions about it!"
    }
    
    return "That's an interesting question! I'd be happy to help you learn more about my skills, experience, or projects. You can also download my resume for more detailed information."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <small className="block text-lg text-primary-400 mb-2">
              Currently under construction
            </small>
            AI Chatbot
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ask me anything about my skills, experience, or projects. 
            I'm here to help you get to know me better!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Chat Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20 rounded-2xl p-8 border border-primary-600/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-400/20 rounded-xl flex items-center justify-center">
                  <MessageCircle size={28} className="text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Azure AI Chatbot
                </h3>
              </div>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  I've put together a chatbot here which knows all my skills,
                  work experience and has a copy of my CV/Resume. 
                  You can use it to ask questions about me to get 
                  a better idea of who I am and what I've done.
                </p>
                <p>
                  You can also download my resume here 
                  if you want to take a look at it.
                  I'm currently looking for new opportunities
                  so if you have a project you think I'd be a good 
                  fit for, please get in touch!
                </p>
              </div>
            </div>

            {/* Resume Download */}
            <div className="text-center">
              <a
                href="/Tech Resume 2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Chat Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-secondary-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Bot size={20} className="text-secondary-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">AI Powered</h4>
                <p className="text-sm text-white/70">
                  Intelligent responses about my background
                </p>
              </div>
              
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-accent-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle size={20} className="text-accent-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">24/7 Available</h4>
                <p className="text-sm text-white/70">
                  Get answers anytime, anywhere
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Portfolio Assistant</h4>
                  <p className="text-xs text-white/70">Ask me anything about Anibal</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-primary-400' 
                        : 'bg-secondary-400'
                    }`}>
                      {message.type === 'user' ? (
                        <User size={16} className="text-dark" />
                      ) : (
                        <Bot size={16} className="text-dark" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary-400 text-dark'
                        : 'bg-white/10 text-white'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-dark" />
                    </div>
                    <div className="px-4 py-2 bg-white/10 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Hey Anibal, what skills are you best at?"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary-400 transition-colors duration-200"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-primary-400 hover:bg-primary-500 disabled:bg-white/20 disabled:cursor-not-allowed rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Send size={18} className="text-dark" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Chatbot
