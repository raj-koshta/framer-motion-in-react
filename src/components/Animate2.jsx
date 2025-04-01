import React from 'react'
import { motion } from 'motion/react'

const Animate2 = () => {

    const ball = {
        width: 100,
        height: 100,
        backgroundColor: "#dd00ee",
        borderRadius: "50%",
        margin: "0px auto",
        marginTop: "150px"
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 1.3 },
            }}
            style={ball}
        />
    )
}

export default Animate2