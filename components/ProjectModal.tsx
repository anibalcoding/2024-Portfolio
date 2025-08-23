'use client'

import { motion } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Project } from './Projects'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl border border-white/20 shadow-2xl"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex justify-center space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-secondary-400 hover:text-secondary-300 transition-colors duration-200"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Project Media */}
          <div className="mb-6">
            {project.hasVideo ? (
              <video
                className="w-full h-64 md:h-80 object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            )}
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-400/20 text-primary-400 text-sm rounded-full border border-primary-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Project Description
            </h3>
            <p className="text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Key Features
            </h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                <span>Responsive design that works on all devices</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                <span>Modern UI/UX with smooth animations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                <span>Optimized performance and accessibility</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                <span>Clean, maintainable code following best practices</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-white/70 mb-4">
              Interested in working together on a similar project?
            </p>
            <a
              href="mailto:anibalcoding@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Let's Discuss</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
