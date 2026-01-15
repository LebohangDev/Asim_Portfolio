
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { fadeInUp, slideInFromRight, fadeIn } from '../animations';

const Home = () => {
    return (

        <>

            <div id='Home' className={styles.homeContainer}>
                <div className={styles.homeContent1}>
                    <motion.div
                        className={styles.description}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1>Opportunities move quiickly in <span>Dubai.</span></h1>
                        <p><span>Running fast</span> is not enough</p>
                        <p>you need to run in the <span>right direction</span></p>
                    </motion.div>
                    <motion.div
                        className={styles.signature}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ delay: 1.5, duration: 1.2 }}
                    >
                        <img src="Images/Asim/Asim_signature_1.svg" alt="" />
                    </motion.div>



                </div>
                <div className={styles.homeContent2}>
                    <motion.div
                        className={styles.imageContainer}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                    >
                        <img src="Images/Asim/Asim_Hero.png" alt="" />
                    </motion.div>

                </div>
            </div>
        </>

    );
};

export default Home;
