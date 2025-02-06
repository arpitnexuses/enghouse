'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type ServiceContent = {
  title: string;
  description: string;
  points: string[];
  image: string;
};

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState('Empower Better Outcomes');
  const [scrollY, setScrollY] = useState(0);
  const [bubbleCount, setBubbleCount] = useState(20);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    setBubbleCount(window.innerWidth > 768 ? 50 : 20);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setBubbleCount(window.innerWidth > 768 ? 50 : 20);
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services: Record<string, ServiceContent> = {
    'Empower Better Outcomes': {
      title: "Empower Better Outcomes",
      description: "Faster, seamless, and accessible care",
      points: [
        "Improve patient outcomes with real-time, high-quality video consultations.",
        "Reduce wait times, enable remote diagnosis, and expand healthcare access to underserved areas.",
        "Our secure and user-friendly platform ensures seamless provider-patient interactions for better, more timely care."
      ],
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/steptodown.com977024.jpg"
    },
    'Enhance Operational Efficiency': {
      title: "Enhance Operational Efficiency",
      description: "Optimize workflows and reduce delays",
      points: [
        "Streamline healthcare operations with virtual waiting rooms, automated appointment scheduling, and integrated billing.",
        "Reduce no-shows, improve provider utilization, and ensure a frictionless experience for both patients and staff with AI-driven automation.",
      ],
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/VirtualSitter-Blog-Image.webp"
    },
    'Global Presence, Local Support': {
      title: "Global Reach, Local Expertise",
      description: "Scalable, compliant, and supported",
      points: [
        "Our platform is designed for global healthcare needs, ensuring compliance with regional regulations like HIPAA and GDPR.",
        "With dedicated local support teams available 24/7, we provide expert assistance for seamless implementation, maintenance, and troubleshooting.",
      ],
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/steptodown.com986994.jpg"
    },
    'Built for Healthcare Professionals': {
      title: "Built for Healthcare Professionals",
      description: "Intuitive, secure, and clinician-friendly",
      points: [
        "Designed by healthcare IT experts with over 20 years of experience, our platform prioritizes ease of use, data security, and seamless integration with existing workflows",
        "With end-to-end encryption and AI-driven automation, healthcare professionals can focus on delivering quality care without tech hurdles.",
      ],
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/asian-medical-workers-having-online-meeting-with-colleagues-discussing-newest-ways-treating-coronavirus.jpg"
    }
  };

  const tabs = [
    "Empower Better Outcomes",
    "Enhance Operational Efficiency",
    "Global Presence, Local Support",
    "Built for Healthcare Professionals"
  ];

  const currentService = services[activeTab];

  return (
    <section className="relative py-12 md:py-32 overflow-hidden px-4 md:px-0">
      {/* Background animations - reduce particle count on mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8fafc]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-full h-full">
            {[...Array(bubbleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#6BB8D4]/20"
                style={{
                  width: Math.random() * ((windowWidth > 768 ? 15 : 10)) + 5,
                  height: Math.random() * ((windowWidth > 768 ? 15 : 10)) + 5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-[1400px] mx-auto relative"
      >
        {/* Hide decorative elements on mobile */}
        <motion.div 
          className="absolute top-0 left-10 w-32 h-32 hidden md:block"
          style={{
            rotateZ: scrollY * 0.2,
          }}
        >
          <div className="absolute inset-0 border-t-4 border-l-4 border-[#05539D]/20 rounded-tl-3xl" />
          <div className="absolute inset-0 border-t-4 border-l-4 border-[#6BB8D4]/20 rounded-tl-3xl transform rotate-3" />
        </motion.div>

        {/* Optimized title section for mobile */}
        <div className="text-center mb-12 md:mb-24 relative px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            <span className="block text-[32px] md:text-[56px] font-bold leading-tight">
              <span className="text-[#05539D]">Powering Smarter,</span>
              <br className="hidden md:block" />
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#05539D] to-[#6BB8D4] text-transparent bg-clip-text">
                  Faster Healthcare
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-[#6BB8D4]/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </span>
          </motion.h2>
        </div>

        {/* Mobile-optimized tab buttons */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-start md:justify-center gap-3 md:gap-6 mb-12 md:mb-24 relative px-4 md:px-0">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative group w-full md:w-auto
                px-4 md:px-8 py-3 md:py-4
                text-sm md:text-base font-medium
                flex items-center justify-center
              `}
            >
              {/* Button background */}
              <motion.div
                className={`
                  absolute inset-0
                  ${activeTab === tab 
                    ? 'bg-[#05539D]' 
                    : 'bg-white border-2 border-[#05539D]/20'
                  }
                  rounded-lg md:transform md:-skew-x-12
                  transition-colors duration-300
                `}
              />
              
              {/* Button content */}
              <span className={`
                relative z-10 text-center
                ${activeTab === tab ? 'text-white' : 'text-[#05539D]'}
                group-hover:text-white
                transition-colors duration-300
                line-clamp-1 md:line-clamp-none
              `}>
                {tab}
              </span>

              {activeTab === tab && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 w-12 h-1 bg-[#6BB8D4]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ x: '-50%' }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content section with mobile optimizations */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center max-w-7xl mx-auto px-4 lg:px-2">
          {/* Left content - narrower */}
          <motion.div 
            layout
            className="w-full md:w-[40%] space-y-6 md:space-y-8 md:pl-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative"
              >
                {/* Content border */}
                <motion.div 
                  className="absolute -left-4 md:-left-6 top-0 w-1 h-full bg-gradient-to-b from-[#05539D] via-[#6BB8D4] to-[#05539D]"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                <motion.div className="space-y-4 md:space-y-6">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl font-bold text-[#05539D] leading-tight"
                  >
                    {currentService.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-[#6BB8D4] font-medium"
                  >
                    {currentService.description}
                  </motion.p>

                  <div className="space-y-3 md:space-y-4 mt-6">
                    {currentService.points.map((point) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + point.length * 0.05 }}
                        className="flex items-start gap-3 md:gap-4 group"
                      >
                        <div className="relative mt-1 flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#05539D] to-[#6BB8D4] rounded-full blur-sm" />
                          <div className="relative bg-white rounded-full p-1.5 md:p-2 group-hover:bg-transparent transition-colors duration-300">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-[#05539D] group-hover:text-white transition-colors duration-300" 
                                 viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-[#05539D]/80 text-base md:text-lg leading-relaxed">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right image section - wider */}
          <motion.div 
            layout
            className="w-full md:w-[60%] relative group mt-8 md:mt-0"
          >
            <motion.div
              className="relative rounded-xl md:rounded-2xl overflow-hidden h-[300px] md:h-[600px]"
            >
              {/* Image container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="relative h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={currentService.image}
                    alt={activeTab}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#05539D]/40 via-[#6BB8D4]/20 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-16 md:h-16 border-4 border-[#6BB8D4]/30 rounded-full hidden md:block" />
              <div className="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 border-4 border-[#05539D]/30 rounded-full hidden md:block" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 