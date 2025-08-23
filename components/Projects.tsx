'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Play } from 'lucide-react'
import Image from 'next/image'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Leno App Project',
      description: 'A responsive marketing website for the Leno App, developed using HTML, CSS, and JavaScript. Features clean, modern design with BEM methodology and mobile-first responsive design.',
      image: '/imgs/leno.png',
      video: '/imgs/Screen Recording 2024-08-28 at 4.28.12 PM.mov',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/anibalcoding/Productivity-App-Website',
      liveUrl: 'https://anibalcoding.github.io/Productivity-App-Website/',
      hasVideo: true
    },
    {
      id: 2,
      title: 'Pokemon API Project',
      description: 'This project utilizes the PokéAPI to dynamically generate cards for the original 150 Pokémon. Each card displays the Pokémon\'s image, name, number, and type with dynamic background colors.',
      image: '/imgs/pokemon.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      githubUrl: 'https://github.com/anibalcoding/Pokemon-Api-Project',
      liveUrl: 'https://anibalcoding.github.io/Pokemon-Api-Project/',
      hasVideo: false
    },
    {
      id: 3,
      title: 'Anime Vault Project',
      description: 'A web application built with Next.js that handles server-side requests to dynamically fetch and display data. Features Framer Motion animations and server-side rendering.',
      image: '/imgs/animewebsite.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Next.js'],
      githubUrl: 'https://github.com/anibalcoding/Anime-Vault-Project',
      liveUrl: 'https://anime-vault-project.vercel.app/',
      hasVideo: false
    },
    {
      id: 4,
      title: 'REV Robotics Global Website',
      description: 'An E-Commerce Marketplace built with BigCommerce. This site has features such as multi-currency, dynamic shipping rates for global orders, integration with Erp applications for product logistics, and custom scripts. ',
      image: '/imgs/animewebsite.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'BigCommerce', 'Odoo','Shipper HQ', 'Stripe'],
      githubUrl: 'https://github.com/anibalcoding/Anime-Vault-Project',
      liveUrl: 'https://anime-vault-project.vercel.app/',
      hasVideo: false
    },
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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating technical skills, 
            design principles, and problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary-400/50 transition-all duration-300 card-hover">
                <div className="relative overflow-hidden">
                  {project.hasVideo ? (
                    <video
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play size={48} className="mx-auto mb-2" />
                      <p className="font-semibold">View Project</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-400/20 text-primary-400 text-xs rounded-full border border-primary-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/70 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <a
              href="mailto:anibalcoding@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  video?: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  hasVideo: boolean
}

export default Projects
