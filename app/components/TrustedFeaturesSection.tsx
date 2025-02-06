'use client';
import { motion } from 'framer-motion';
import { FaRegClock, FaChartLine, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';

export default function TrustedFeaturesSection() {
  const partners = [
    { id: 1, image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/Enghouse%20Event%20Reminder%20EDM%20-%20(17-jan-25)%20(8).png" },
    // Add more partner images here
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: <FaRegClock className="text-2xl md:text-3xl mb-2 md:mb-3 text-[#05539D]" /> },
    { number: '98%', label: 'Satisfaction Rate', icon: <FaChartLine className="text-2xl md:text-3xl mb-2 md:mb-3 text-[#05539D]" /> },
    { number: '24/7', label: 'Support', icon: <FaHeadset className="text-2xl md:text-3xl mb-2 md:mb-3 text-[#05539D]" /> },
  ];

  return (
    <section className="w-full py-8 md:py-20 bg-gradient-to-b from-white via-[#f7fbfd] to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1400px] mx-auto px-3 md:px-6"
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-2 md:px-0"
          >
            <h2 className="text-[22px] md:text-[40px] font-bold text-[#05539D] mb-2 md:mb-4 leading-tight">
              Trusted by the Best in Healthcare
            </h2>
            <div className="w-20 md:w-32 h-1 md:h-1.5 bg-[#6BB8D4] mx-auto rounded-full" />
          </motion.div>
          <p className="text-[#05539D] mt-3 md:mt-6 text-sm md:text-lg max-w-2xl mx-auto opacity-90 px-2 md:px-0">
            Partnering with leading healthcare institutions to deliver exceptional care and innovation
          </p>
        </div>

        {/* Image Container */}
        <div 
          className="max-w-5xl mx-auto pb-6 md:pb-12 relative group px-2 md:px-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#05539D]/10 to-[#6BB8D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg md:rounded-xl" />
            <Image 
              src={partners[0].image}
              alt="Healthcare Industry Partners"
              width={500}
              height={300}
              className="w-full object-contain rounded-lg md:rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] transition-all duration-300"
            />
          </motion.div>

          {/* Decorative Elements - Hidden on mobile */}
          <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#6BB8D4] opacity-30" />
          <div className="hidden md:block absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#6BB8D4] opacity-30" />
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-8 md:mt-16 max-w-5xl mx-auto px-2 md:px-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-3 md:p-6 rounded-lg md:rounded-xl bg-white 
                before:absolute before:inset-0 before:rounded-lg before:md:rounded-xl before:p-[1.5px]
                before:bg-gradient-to-br before:from-[#05539D]/20 before:via-[#6BB8D4]/20 before:to-[#05539D]/20
                hover:before:from-[#05539D]/30 hover:before:via-[#6BB8D4]/30 hover:before:to-[#05539D]/30
                after:absolute after:inset-[1.5px] after:rounded-lg after:md:rounded-xl after:bg-white
                shadow-[0_2px_10px_rgba(107,184,212,0.1)] md:shadow-[0_4px_20px_rgba(107,184,212,0.15)] 
                hover:shadow-[0_4px_20px_rgba(5,83,157,0.15)] 
                transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative z-10 flex flex-col items-center">
                {stat.icon}
                <h3 className="text-xl md:text-3xl font-bold text-[#05539D] mb-1 md:mb-2">{stat.number}</h3>
                <p className="text-[#6BB8D4] text-xs md:text-sm font-semibold tracking-wide text-center">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 