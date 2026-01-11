
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Impact.module.css';
import { fadeInUp, staggerContainer } from '../animations';

const achievements = [
    {
        description: "UAE market research & validation to see where the real opportunity is for your idea.",
        logo: "ri-search-line",
    },
    {
        description: "Structure, license & visa decisions that match your goals, budget, and risk level.",
        logo: "ri-scales-3-line",
    },
    {
        description: "Company, banking & compliance setup so you can operate smoothly in Dubai.",
        logo: "ri-building-4-line",
    },
    {
        description: "Strategy & scaling support to grow your income, network, and impact sustainably.",
        logo: "ri-line-chart-line",
    },
];

const images_1 = [
    { src: "Images/Impact/impact_1.png", link: "https://emiratespadel.com/" },
    { src: "Images/Impact/Impact_2.png", link: "https://sky-adventures.ae/" },
    { src: "Images/Impact/impact_3.png", link: "https://linked4hr.com/" },
    { src: "Images/Impact/impact_4.png", link: "https://the-ether.com/" },
];

const images_2 = [
    { src: "Images/Impact/impact_5.png", link: "https://newmare.com/" },
    { src: "Images/Impact/impact_6.png", link: "https://www.vortex-net.com/en/" },
    { src: "Images/Impact/impact_7png.png", link: "https://onedrop-inv.com/" },
    { src: "Images/Impact/impact_1.png", link: "https://emiratespadel.com/" }, // Repeat first to fill space
];

const Impact = () => {

    return (
        <div id="Impact" className={styles.impactContainer}>
            <div className={styles.impactContent}>

                <motion.div
                    className={styles.headerSection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp}>Why Learn Dubai From <span>Me?</span></motion.h1>
                    <motion.p className={styles.subtitle} variants={fadeInUp}>I’ve Seen What Works And What Fails in Dubai.</motion.p>
                    <motion.p className={styles.description} variants={fadeInUp}>
                        Dubai rewards the people who understand how it works. For the past 5+ years, I’ve helped founders, creators, and global brands <span>do exactly that.</span>
                    </motion.p>
                </motion.div>

                <div className={styles.contentGrid}>
                    <div className={styles.achievementsList}>
                        <div className={styles.listHeader}>
                            <h1>What I Help Entrepreneurs Achieve</h1>
                        </div>
                        <motion.div
                            className={styles.listContent}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {achievements.map((achievement, index) => (
                                <motion.div key={index} className={styles.achievementItem} variants={fadeInUp}>
                                    <div className={styles.iconContainer}>
                                        <i className={achievement.logo}></i>
                                    </div>
                                    <p>{achievement.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <motion.div
                            // animate the image container to move from left to right by 50 percent infinite times
                            className={styles.imageContainer1}
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 50,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >
                            {/*using spread operator to duplicate images to extend the animation essentilly creating a new array with double the content*/}
                            {[...images_1, ...images_1].map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                                    <img src={item.src} alt="" loading="lazy" decoding="async" />
                                </a>
                            ))}
                        </motion.div>
                        <motion.div
                            className={styles.imageContainer2}
                            animate={{ x: "50%" }}
                            transition={{
                                duration: 50,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >

                            {[...images_2, ...images_2].map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                                    <img src={item.src} alt="" loading="lazy" decoding="async" />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Impact;
