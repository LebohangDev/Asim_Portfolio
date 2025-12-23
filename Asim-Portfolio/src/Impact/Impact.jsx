
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Impact.module.css';

const Impact = () => {




    const achievements = [
        {
            description: "Conducted in depth market research and validation to help founders in the UAE market.",
            logo: "ri-search-line",
        },
        {
            description: "Advised entrepreneurs on choosing the right business structure, licensing, and legal setup to ensure long term compliance and scalability.",
            logo: "ri-scales-3-line",
        },
        {
            description: "Supported the setup of core operations in Dubai, including banking, visas, and regulatory processes for smooth business execution.",
            logo: "ri-building-4-line",
        },
        {
            description: "Guided founders in scaling their businesses the smart way through strategic planning, operational efficiency, and sustainable growth models.",
            logo: "ri-line-chart-line",
        },
    ];

    const images_1 = [
        "Images/Asim/Gallery_13.jpg",
        "Images/Asim/Gallery_14.jpg",
        "Images/Asim/Gallery_10.jpg",
        "Images/Asim/Gallery_13.jpg",
        "Images/Asim/Gallery_14.jpg",
    ];

    const images_2 = [
        "Images/Asim/Gallery_14.jpg",
        "Images/Asim/Gallery_10.jpg",
        "Images/Asim/Gallery_13.jpg",
        "Images/Asim/Gallery_14.jpg",
        "Images/Asim/Gallery_10.jpg",
    ];

    return (
        <div id="Impact" className={styles.impactContainer}>
            <div className={styles.impactContent}>

                <div className={styles.headerSection}>
                    <h1>Why Learn Dubai From <span>Me?</span></h1>
                    <p className={styles.subtitle}>I’ve Seen What Works And What Fails in Dubai.</p>
                    <p className={styles.description}>
                        Dubai rewards the people who understand how it works. For the past 5+ years, I’ve helped founders, creators, and global brands <span>do exactly that.</span>
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.achievementsList}>
                        <div className={styles.listHeader}>
                            <h1>What I Help Businesses Achieve</h1>
                        </div>
                        <div className={styles.listContent}>
                            {achievements.map((achievement, index) => (
                                <div key={index} className={styles.achievementItem}>
                                    <div className={styles.iconContainer}>
                                        <i className={achievement.logo}></i>
                                    </div>
                                    <p>{achievement.description}</p>
                                </div>
                            ))}
                        </div>
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
                            {[...images_1, ...images_1].map((img, index) => (
                                <img key={index} src={img} alt="" />
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

                            {[...images_2, ...images_2].map((img, index) => (
                                <img key={index} src={img} alt="" />
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Impact;
