'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AutoCarousel() {
  // Default values for server-side rendering
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render particles until component is mounted
  if (!isMounted) {
    return null; // or a loading placeholder
  }

  // Calculate dynamic sizes based on screen width
  const containerHeight = dimensions.width < 768 ? '400px' : '700px';
  const imageSize = dimensions.width < 768 ? '300px' : '800px';
  const blurCircleSize = dimensions.width < 768 ? '400px' : '800px';
  const imagePadding = dimensions.width < 768 ? 'p-6' : 'p-12';

  return (
    <div className="relative w-full bg-[#05539D] overflow-hidden">
      {/* Main Content Container */}
      <div style={{ height: containerHeight }} className="relative w-full">
        {/* Animated Background Patterns */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-20"
        >
          <div style={{ width: blurCircleSize, height: blurCircleSize }} className="absolute top-0 right-0 bg-[#6BB8D4] rounded-full blur-3xl"></div>
          <div style={{ width: blurCircleSize, height: blurCircleSize }} className="absolute bottom-0 left-0 bg-[#6BB8D4] rounded-full blur-3xl"></div>
        </motion.div>

        {/* Central Image Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ width: imageSize, height: imageSize }}
            className="relative"
          >
            {/* Multiple Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-[#6BB8D4]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border border-[#6BB8D4]/15 rounded-full"
            />
            
            {/* Enhanced Pulsing Glow Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[#6BB8D4] rounded-full blur-3xl opacity-30"
            />

            {/* Soft Edge Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-sm bg-white/5">
              {/* Main Image with Gradient Overlay */}
              <div className="relative w-full h-full">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Enghouse/steptodown.com163816.jpg"
                  alt="Modern Workplace"
                  fill
                  className={`object-contain relative z-10 drop-shadow-xl ${imagePadding} mix-blend-luminosity opacity-90`}
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#05539D]/20 via-transparent to-[#6BB8D4]/20 mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Particles */}
        {[...Array(dimensions.width < 768 ? 4 : 8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height
            }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className={`absolute w-${Math.floor(Math.random() * 4 + 2)} h-${Math.floor(Math.random() * 4 + 2)} 
                       bg-[#6BB8D4] rounded-full blur-md`}
          />
        ))}

        {/* Enhanced Decorative Circles */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 flex gap-2 md:gap-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
              className="w-2 h-2 md:w-3 md:h-3 bg-[#6BB8D4] rounded-full shadow-lg shadow-[#6BB8D4]/20"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 