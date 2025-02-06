'use client';

import { motion } from "framer-motion";

export default function SignupFormHeader() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#05539D] to-[#044077] py-10 md:py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#6BB8D4] rounded-full blur-[120px] opacity-30"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[#6BB8D4] rounded-full blur-[120px] opacity-20"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-[#6BB8D4] to-[#6BB8D4]/50 mx-auto mb-6"
          />

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6BB8D4]">
              Transform Your Business
            </span>
          </h1>

          {/* Subtitle with Gradient Border */}
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#6BB8D4] via-[#6BB8D4]/50 to-[#05539D]">
            <div className="px-6 py-2 rounded-full bg-[#05539D]">
              <p className="text-lg md:text-xl text-[#6BB8D4]">
                Innovative Solutions for Modern Enterprises
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 flex gap-2 opacity-50">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                className="w-1 h-8 bg-gradient-to-b from-[#6BB8D4] to-transparent rounded-full"
              />
            ))}
          </div>

          {/* Floating Dots */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#6BB8D4]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-12"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(107, 184, 212, 0.1))',
            maskImage: "linear-gradient(to bottom, transparent, black)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
          }}
        />
      </div>
    </div>
  );
}