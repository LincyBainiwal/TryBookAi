import React from 'react';
import { motion } from 'framer-motion';
import { logo } from "../assets";

const Hero = () => {
  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center space-y-5 relative">
      
      {/* Animated Logo */}
      <motion.img 
        src={logo} 
        alt='logo' 
        className='w-[20%] object-contain'
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }} 
        animate={{ opacity: 1, scale: 1, rotate: 360 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, rotate: -10 }}
      />
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.0 }}
        className="text-4xl text-center font-bold">
        Explore the Possibilities of <motion.span 
        className="text-purple-400 underline"
        whileHover={{ scale: 1.1, color: "#E0BBE4" }}>AI Book Writing</motion.span> with <span className="text-white">BookAI</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.0, delay: 0.3 }}
        className="text-lg md:text-xl text-center max-w-2xl">
        Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.0, delay: 0.6 }}
        className="flex space-x-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg">
          Get Started
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg">
          Get API Access
        </motion.button>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, delay: 0.9 }}
        className="text-yellow-400 text-sm relative">
        Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation
      </motion.p>
    </div>
  );
}

export default Hero;
