"use client"

import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ScrollArrow(): React.ReactElement {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
            <Link href="#customerReviews" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('customerReviews')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }}>
                <FaArrowDown className="text-white text-4xl" />
            </Link>
        </motion.div>
    )
} 