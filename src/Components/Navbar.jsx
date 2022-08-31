import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Logo from "../assets/images/Logo.png"
import "./Css/Navbar.css"

const Navbar = () => {
    return (
        <div className='Navbar'>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}>
                <img src={Logo} alt="" />
            </motion.div>
            <motion.ul>
                <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Link to={"/"}>Home</Link>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}>
                    <a href="#Exercises">Exercises</a>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}>
                    <a href="#footer">Contact</a>
                </motion.li>
            </motion.ul>
        </div>
    )
}

export default Navbar