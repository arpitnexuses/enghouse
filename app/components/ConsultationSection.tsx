'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ConsultationSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#05539D]/10 to-white">
      <div className="max-w-[1200px] mx-auto px-3 md:px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-[26px] md:text-[40px] font-bold text-[#05539D] mb-3 md:mb-4 leading-tight px-1 md:px-2">
            Book Your Free Demo Today
          </h2>
          <p className="text-[16px] md:text-[20px] text-gray-600 max-w-[800px] mx-auto leading-relaxed px-2 md:px-4">
            Take the first step towards transforming your healthcare services. Our experts will guide you through a personalized demo of Enghouse&apos;s Telehealth Video Solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl"
        >
          {/* Image Container */}
          <div className="relative h-[350px] md:h-[600px]">
            <Image
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/young-caregiver-helping-senior-woman-walking-nurse-assisting-her-old-woman-patient-nursing-home-senior-woman-with-walking-stick-being-helped-by-nurse-home%20(1).jpg"
              alt="Caregiver helping senior woman"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05539D] via-[#05539D]/80 to-[#05539D]/60 md:to-transparent" />

            {/* Content Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center px-3 md:px-0"
            >
              <div className="w-full md:w-1/2 p-4 md:p-12 md:pl-16">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] md:text-[32px] text-white font-semibold mb-4 md:mb-8 leading-tight"
                >
                  Experience the future of healthcare delivery with our innovative solutions
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a 
                      href="https://calendly.com/aisha-khan-enghouse-me/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 md:gap-3 bg-white text-[#05539D] 
                        hover:bg-[#6BB8D4] hover:text-white px-5 md:px-10 py-3 md:py-4 rounded-full 
                        text-sm md:text-lg font-semibold transition-all duration-300 shadow-lg 
                        hover:shadow-xl transform hover:-translate-y-1 w-full md:w-auto justify-center"
                    >
                      <span className="relative z-10">Book Now</span>
                      <motion.span
                        className="group-hover:translate-x-2 transition-transform duration-300"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <svg 
                          className="w-5 h-5"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" 
                          />
                        </svg>
                      </motion.span>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white opacity-25"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 