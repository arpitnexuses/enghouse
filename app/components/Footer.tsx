'use client';
import Link from 'next/link';
import { Building2, MapPin, Phone, Mail, Globe2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 0,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      y: -100,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-[#05539D] to-[#043B6E] text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6BB8D4] rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#05539D] rounded-full blur-[120px]"
      />
      
      <div className="max-w-[1400px] mx-auto px-4 py-16 md:py-24 relative">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-white via-[#6BB8D4] to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Get in Touch
          </motion.span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {/* Office Cards with Enhanced Animations */}
          {[
            {
              title: 'Corporate Office',
              icon: Building2,
              company: 'Enghouse Systems Limited',
              address: '80 Tiverton Court, Suite 800\nMarkham, Ontario L3R 0G4\nCanada',
              phone: '+1-905-946-3200',
              email: 'infoEV@enghouse.com'
            },
            {
              title: 'North America',
              icon: Globe2,
              company: 'Enghouse Video',
              address: '27 Madison Avenue Suite 040\nParamus, NJ 07652\nUnited States',
              phone: '+1-866-998-4396',
              email: 'infoEV@enghouse.com'
            },
            {
              title: 'Middle East',
              icon: Globe2,
              email: 'infoEV.EMEA@enghouse.com'
            },
            {
              title: 'Asia',
              icon: Globe2,
              phone: '+1-201-289-8597',
              email: 'vidyoAPACSupport@enghouse.com'
            }
          ].map((office, index) => (
            <motion.div
              key={office.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#6BB8D4]/20 to-[#05539D]/20 rounded-2xl"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              
              <div className="h-full p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 
                           hover:border-[#6BB8D4]/30 transition-all duration-500
                           hover:shadow-[0_0_30px_rgba(107,184,212,0.2)]">
                <motion.h3 
                  className="text-xl font-medium mb-6 text-[#6BB8D4] flex items-center gap-3"
                  animate={floatingAnimation}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <office.icon className="w-6 h-6" strokeWidth={1.5} />
                  </motion.div>
                  {office.title}
                </motion.h3>
                
                <div className="text-gray-200 space-y-4">
                  {office.company && <p className="font-medium text-white">{office.company}</p>}
                  
                  {office.address && (
                    <p className="flex items-start gap-3 group/address">
                      <MapPin className="w-5 h-5 mt-1 text-[#6BB8D4]" strokeWidth={1.5} />
                      <span className="whitespace-pre-line group-hover/address:text-white transition-colors">
                        {office.address}
                      </span>
                    </p>
                  )}
                  
                  <div className="pt-2 space-y-3">
                    {office.phone && (
                      <p className="flex items-center gap-3 group/item">
                        <Phone className="w-5 h-5 text-[#6BB8D4]" strokeWidth={1.5} />
                        <Link href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} 
                              className="hover:text-[#6BB8D4] transition-all group-hover/item:translate-x-1 
                                       duration-300 inline-flex items-center gap-1">
                          {office.phone}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all" />
                        </Link>
                      </p>
                    )}
                    
                    {office.email && (
                      <p className="flex items-center gap-3 group/item">
                        <Mail className="w-5 h-5 text-[#6BB8D4]" strokeWidth={1.5} />
                        <Link href={`mailto:${office.email}`} 
                              className="hover:text-[#6BB8D4] transition-all group-hover/item:translate-x-1 
                                       duration-300 inline-flex items-center gap-1 break-all">
                          {office.email}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all" />
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <motion.p 
            className="text-sm text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} Enghouse Systems Limited. All Rights Reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
} 