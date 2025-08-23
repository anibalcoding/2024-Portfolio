'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="section-padding pt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-primary-400 font-medium text-lg">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">ANIBAL</span>{' '}
                <span className="gradient-text">CUEVAS</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              I'm a full-stack developer with expertise in sales and marketing, 
              combining technical skills with business insights.{' '}
              <span className="text-primary-400 font-semibold">
                I'm here to help
              </span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="/Tech Resume 2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FileText size={20} />
                <span>View Resume</span>
              </a>
              <a
                href="mailto:anibalcoding@gmail.com"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              <a
                href="https://github.com/anibalcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-primary-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label="GitHub Profile"
              >
                <Github
                  size={24}
                  className="text-white group-hover:text-dark transition-colors duration-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/anibal-cuevas-393870132/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-primary-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={24}
                  className="text-white group-hover:text-dark transition-colors duration-200"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/imgs/Untitled design (2).png"
                  alt="Anibal Cuevas - Developer"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
