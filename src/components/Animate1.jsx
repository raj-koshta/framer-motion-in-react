import React from 'react'
import { motion } from 'motion/react'

const Animate1 = () => {
    return (
        <motion.div
            animate={{
                x: 800,
                rotate: 360
            }}
            transition={{
                duration: 2,
                delay: 1
            }}
            className='box'
        > App </motion.div>
    )
}

export default Animate1