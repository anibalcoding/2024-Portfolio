'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Palette, Zap, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'primary'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      color: 'secondary'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Azure', 'CI/CD', 'Git', 'GitHub Actions'],
      color: 'accent'
    },
    {
      title: 'Tools & Frameworks',
      icon: Code,
      skills: ['VS Code', 'Figma', 'Shopify', 'BigCommerce', 'Monday.com', 'Odoo', 'Google workspace'],
      color: 'primary'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive skill set developed through years of experience, 
            continuous learning, and real-world project implementation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${category.color}-400/20 flex items-center justify-center`}>
                    <category.icon 
                      size={24} 
                      className={`text-${category.color}-400`} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20 hover:border-primary-400/50 transition-colors duration-200"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20 rounded-2xl p-8 border border-primary-600/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-400/20 rounded-xl flex items-center justify-center">
                  <Users size={28} className="text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  About Me
                </h3>
              </div>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Hi, I'm Anibal. I'm a frontend developer with over four years of experience, 
                  blending my skills in coding with a strong background in sales and marketing. 
                  My unique combination of technical knowledge and business acumen helps me create websites 
                  that not only look great but also drive results.
                </p>
                <p>
                  I bring years of self-taught experience in web development, complemented by formal training from a coding bootcamp. 
                  This diverse background has equipped me with a solid foundation and practical skills to excel in the field.
                </p>
              </div>
            </div>

            {/* Key Strengths
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-secondary-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap size={24} className="text-secondary-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Fast Learner</h4>
                <p className="text-sm text-white/70">
                  Quick to adapt to new technologies and frameworks
                </p>
              </div>
              
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-accent-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-accent-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Team Player</h4>
                <p className="text-sm text-white/70">
                  Excellent communication and collaboration skills
                </p>
              </div>
            </div> */}

            {/* Experience Summary */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">
                Experience Summary
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Frontend Development</span>
                  <span className="text-primary-400 font-semibold">2+ years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Backend Development</span>
                  <span className="text-secondary-400 font-semibold">1+ years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Customer Focused</span>
                  <span className="text-accent-400 font-semibold">8+ years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Management</span>
                  <span className="text-accent-400 font-semibold">5+ years</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
