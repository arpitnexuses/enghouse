"use client";  // Add this at the top since framer-motion requires client-side rendering

import { motion } from 'framer-motion';
import { FaCheckCircle, FaChartLine, FaGlobeAmericas, FaUsers, FaDollarSign } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CompanyIntroSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const stats = [
    { 
      icon: <FaDollarSign className="w-5 h-5" />,
      value: '$454M',
      label: 'Revenue',
      year: '2023',
      color: 'from-[#05539D]/10 to-[#6BB8D4]/5'
    },
    { 
      icon: <FaGlobeAmericas className="w-5 h-5" />,
      value: '120+',
      label: 'Countries',
      year: 'Global Presence',
      color: 'from-[#6BB8D4]/10 to-[#05539D]/5'
    },
    { 
      icon: <FaUsers className="w-5 h-5" />,
      value: '2,000+',
      label: 'Employees',
      year: 'Worldwide',
      color: 'from-[#05539D]/10 to-[#6BB8D4]/5'
    },
    { 
      icon: <FaChartLine className="w-5 h-5" />,
      value: 'TSX: ENGH',
      label: 'Stock',
      year: 'Publicly Traded',
      color: 'from-[#6BB8D4]/10 to-[#05539D]/5'
    }
  ];

  const features = [
    "Seamless EHR & device integration",
    "GDPR & HIPAA-compliant security",
    "Scalable & future-ready",
    "Supports diverse specialties (neurology, cardiology, behavioral health & more)"
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#05539D]/5 to-white" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="space-y-8 lg:space-y-12 pt-4 lg:pt-8"
          >
            {/* Main Heading with animated underline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-4xl font-bold text-[#05539D] mb-3">
                Our Company at a Glance
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={isInView ? { width: "80px" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-[#6BB8D4] rounded-full"
              />
            </motion.div>

            {/* Description with gradient text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#05539D] to-[#6BB8D4] bg-clip-text text-transparent">
                VidyoHealth: Secure & Scalable Telehealth Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For over 17 years, VidyoHealth has been a leader in video-powered telehealth, enabling seamless, secure, and high-quality virtual care. Our platform empowers healthcare providers to connect with patients anytime, anywhere—bridging gaps in access and enhancing clinical outcomes.
              </p>
            </motion.div>

            {/* Features with animated checkmarks */}
            <motion.div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#6BB8D4]"
                  >
                    <FaCheckCircle className="w-5 h-5" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-[#05539D] transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Cards */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl font-semibold text-[#05539D] relative inline-block"
              >
                Powered by Enghouse Systems Limited
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="h-0.5 bg-[#6BB8D4] absolute bottom-0 left-0"
                />
              </motion.h3>
              
              <div className="grid grid-cols-2 lg:flex gap-2 md:gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className={`bg-gradient-to-br ${stat.color} p-2 md:p-3 rounded-xl border border-[#6BB8D4]/20
                              hover:shadow-lg hover:border-[#05539D]/30 transition-all duration-300
                              backdrop-blur-sm relative overflow-hidden group flex-1`}
                  >
                    <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
                    
                    <div className="bg-white/90 w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center
                                  shadow-sm mb-2 text-[#05539D] group-hover:scale-110 
                                  group-hover:rotate-12 transition-all duration-300">
                      {stat.icon}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="text-base md:text-lg font-bold text-[#05539D] mb-0.5 
                                    group-hover:text-[#6BB8D4] transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-[11px] md:text-xs font-medium text-gray-700">
                        {stat.label}
                      </div>
                      <div className="text-[9px] md:text-[10px] text-[#6BB8D4]">
                        {stat.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="relative h-[300px] md:h-[500px] lg:h-[700px] lg:sticky lg:top-8"
          >
            <div className="relative h-full rounded-2xl lg:rounded-[32px] overflow-hidden shadow-2xl
                          group hover:shadow-[#6BB8D4]/20 transition-all duration-700"
            >
              <motion.img
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/successful-medical-doctors-using-laptop-smiling-while-having-discussion.jpg"
                alt="Medical professionals using VidyoHealth"
                className="w-full h-full object-cover rounded-[32px] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05539D]/40 via-[#6BB8D4]/20 to-transparent rounded-[32px]" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/95 
                          px-2.5 xs:px-3 sm:px-4 md:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 
                          rounded-lg xs:rounded-xl md:rounded-2xl shadow-xl border border-[#6BB8D4]/20 
                          backdrop-blur-sm z-20 w-[94%] xs:w-[92%] sm:w-[85%] md:w-auto 
                          max-w-[94%] xs:max-w-[92%] md:max-w-none
                          hover:shadow-2xl hover:bg-[#05539D]/5 transition-all duration-300
                          transform-gpu"
              >
                <div className="overflow-hidden">
                  <p className="text-[#05539D] font-semibold text-center 
                              leading-tight xs:leading-snug md:leading-normal
                              tracking-tight
                              text-[11px] xs:text-[13px] sm:text-base md:text-lg lg:text-xl
                              whitespace-normal break-words px-0.5 xs:px-1">
                    Experience next-gen telehealth with VidyoHealth
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 