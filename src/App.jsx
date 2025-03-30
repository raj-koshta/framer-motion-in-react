import React from 'react'
import "./App.css"
import { motion } from 'motion/react'

const App = () => {

  return (
    <motion.div
      animate={{
        x: 800,
        rotate:360
      }}
      transition={{
        duration:2,
        delay: 1
      }}
      className='box'
    > App </motion.div>
  )
}

export default App