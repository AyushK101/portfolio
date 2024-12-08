import React from 'react'
import { motion } from 'motion/react';

const GenericMotion = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div
    initial={{
      opacity: 0,
      y: 80,
    }}
    
    whileInView={{
      opacity: 1,
      y:0,
      transition: {
        duration: .5
      }
    }}
    viewport={{
      once: true,
      amount: .2
    }}
    >
      {children}
    </motion.div>
  )
}

export default GenericMotion