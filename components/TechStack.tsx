'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TechStack = () => {
  const technologies = [
    { name: 'HTML', icon: '/imgs/html.png' },
    { name: 'CSS', icon: '/imgs/css.png' },
    { name: 'JavaScript', icon: '/imgs/javascript.png' },
    { name: 'React', icon: '/imgs/react.png' },
    { name: 'Next.js', icon: '/imgs/nextjs.png' },
    { name: 'VS Code', icon: '/imgs/vscode.png' },
    { name: 'Azure', icon: '/imgs/azure.png' },
    { name: 'Tailwind', icon: '/imgs/tailwind.png' },
    { name: 'Node.js', icon: '/imgs/nodejs.png' },
    { name: 'TypeScript', icon: '/imgs/typescript.png' },
  ]
  

  return (
    <section className="py-12 bg-gradient-to-r from-primary-900/20 to-secondary-900/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I've used throught my career. 
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {/* First set of technologies */}
            {technologies.map((tech, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex flex-col items-center space-y-2 min-w-[120px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center p-3 backdrop-blur-sm">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-full h-auto"
                  />
                </div>
                <span className="text-sm text-white/80 font-medium text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex flex-col items-center space-y-2 min-w-[120px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center p-3 backdrop-blur-sm">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-full h-auto"
                  />
                </div>
                <span className="text-sm text-white/80 font-medium text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional tech categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold text-primary-400 mb-3">
              Frontend
            </h3>
            <p className="text-white/70">
              Modern frameworks, responsive design, and performance optimization
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold text-secondary-400 mb-3">
              Backend
            </h3>
            <p className="text-white/70">
              Server-side development, APIs, databases, and cloud services
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold text-accent-400 mb-3">
              Tools
            </h3>
            <p className="text-white/70">
              Version control, deployment, testing, and development workflows
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
