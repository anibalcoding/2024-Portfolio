'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'eCommerce Web Specialist',
      company: 'REV Robotics',
      period: '2024 - Present',
      location: 'Remote',
      description: 'As an eCommerce Web Specialist at REV Robotics, I design, develop, and maintain high-performing online storefronts using BigCommerce, JavaScript, HTML, and CSS. My role spans front-end development, UX enhancements, and merchandising strategy to ensure a seamless shopping experience. I work closely with cross-functional teams to support product launches and marketing campaigns, while leveraging analytics and performance data to optimize site speed, usability, and conversions.',
      image: '/imgs/rev.jpg',
      technologies: ['BigCommerce', 'JavaScript', 'HTML', 'CSS', 'UX/UI', 'Analytics', 'Odoo'],
      achievements: [
        'Created and merchandised 500+ products, enabling faster global rollout and consistency across regions',
        'Integrated and synced new BigCommerce applications, improving site functionality and operational efficiency',
        'Optimized global site settings to support 20+ countries, driving international accessibility and customer reach',
        'Enhanced website integrity and performance, achieving a 12% faster load time and improved user experience',
        'Implemented Odoo ERP integration to connect global warehouses with inventory, streamlining supply chain visibility and fulfillment',
      ]
    },
    {
      id: 2,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      location: 'Remote',
      description: 'For the past two years, I have provided freelance web development services to small businesses, specializing in building and optimizing websites that drive growth and enhance online presence. My expertise includes developing custom solutions using pure HTML, CSS, and JavaScript, as well as utilizing modern frameworks like React and Next.js. I have also built and customized Shopify and WordPress sites to meet specific client needs. With a strong focus on creating responsive, user-friendly, and scalable websites.',
      image: '/imgs/computer.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Shopify', 'WordPress'],
      achievements: [
        'Delivered 15+ client websites with 100% satisfaction rate',
        'Improved average page load speed by 40% across all projects',
        'Implemented responsive design for 100% mobile compatibility'
      ]
    },
    {
      id: 3,
      title: 'Field Sales Manager',
      company: 'Samsung',
      period: '2023 - 2024',
      location: 'Field-based',
      description: 'In my role as a Field Sales Manager at Samsung, I collaborated closely with major wireless carriers to drive product sales and enhance brand presence. I conducted in-depth training sessions for sales teams, equipping them with the knowledge and tools needed to effectively promote Samsung products. My experience managing cross-functional teams and utilizing data-driven insights aligns with the problem-solving and strategic thinking required in software development.',
      image: '/imgs/samsungoffice.jpg',
      technologies: ['Sales Management', 'Team Leadership', 'Data Analysis', 'Training'],
      achievements: [
        'Exceeded sales targets by 30% consistently',
        'Trained 100+ sales representatives',
        'Managed relationships with 15+ carrier partners'
      ]
    }
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
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
            Work Experience
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A diverse professional journey combining technical expertise with 
            business acumen and leadership experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-transparent" />
              )}

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side - Timeline dot and image */}
                <div className="flex flex-col items-center md:w-32">
                  <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <Briefcase size={24} className="text-dark" />
                  </div>
                  
                  <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-white/20">
                    <Image
                      src={experience.image}
                      alt={experience.company}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-400/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-white/70">
                        <div className="flex items-center space-x-1">
                          <Briefcase size={16} />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wide">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-400/20 text-primary-400 text-xs rounded-full border border-primary-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary-400 mb-2 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Ready to Work Together?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              My diverse experience in both technical development and business operations 
              makes me uniquely qualified to understand your needs and deliver solutions 
              that drive real results.
            </p>
            <a
              href="mailto:anibalcoding@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Start a Conversation</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience







