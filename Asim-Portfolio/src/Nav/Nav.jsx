import { useState } from 'react';
import styles from './Nav.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ activeNav, setActiveNav }) => {
    const [hamMenu, setHamMenu] = useState(false);

    return (

        <>
            <div className={styles.navContainer}>
                <nav>
                    <ul>
                        <li className={activeNav === 'Home' ? styles.active : ''}>
                            <i class="ri-home-6-line"></i>
                            <a href="#Home" onClick={() => setActiveNav('Home')}>Home</a>
                        </li>
                        <li className={activeNav === 'Impact' ? styles.active : ''}>
                            <i class="ri-meteor-line"></i>
                            <a href="#Impact" onClick={() => setActiveNav('Impact')} >Impact</a>
                        </li>
                        <li className={activeNav === 'Product' ? styles.active : ''}>
                            <i class="ri-shopping-cart-2-line"></i>
                            <a href="#Product" onClick={() => setActiveNav('Product')} >Product</a>
                        </li>
                        <li className={activeNav === 'Gallery' ? styles.active : ''}>
                            <i class="ri-multi-image-line"></i>
                            <a href="#Gallery" onClick={() => setActiveNav('Gallery')} >Gallery</a>
                        </li>
                        <h2>
                            Asim
                        </h2>
                    </ul>
                </nav>
            </div>

            <div className={styles.hamburgerContainer}>
                <div className={styles.hamHeader}>
                    <h2>Asim</h2>
                    <img
                        src="/Images/hamburger.svg"
                        alt="Menu"
                        className={styles.hamburgerIcon}
                        onClick={(e) => { e.preventDefault(); setHamMenu(true) }}
                    />
                </div>

                <AnimatePresence>
                    {hamMenu && (
                        <motion.div
                            className={styles.hamMenuActive}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className={styles.close}>
                                <img src="/Images/close.svg" alt="Close" className={styles.closeIcon} onClick={(e) => { e.preventDefault(); setHamMenu(false) }} />
                            </div>

                            <ul>
                                <li>
                                    <i class="ri-home-6-line"></i>
                                    <a href="#Home" onClick={() => { setActiveNav('Home'); setHamMenu(false); }}>Home</a>
                                </li>
                                <li>
                                    <i class="ri-meteor-line"></i>
                                    <a href="#Impact" onClick={() => { setActiveNav('Impact'); setHamMenu(false); }} >Impact</a>
                                </li>
                                <li>
                                    <i class="ri-shopping-cart-2-line"></i>
                                    <a href="#Product" onClick={() => { setActiveNav('Product'); setHamMenu(false); }} >Product</a>
                                </li>
                                <li>
                                    <i class="ri-multi-image-line"></i>
                                    <a href="#Gallery" onClick={() => { setActiveNav('Gallery'); setHamMenu(false); }} >Gallery</a>
                                </li>
                            </ul>

                            <div className={styles.media}>

                                <h1>
                                    Media
                                </h1>

                                <div className={styles.socials}>
                                    <i class="ri-instagram-line"></i>
                                    <i class="ri-facebook-line"></i>
                                    <i class="ri-youtube-line"></i>
                                </div>
                            </div>

                            <div className={styles.copyright}>
                                <p>
                                    © 2025 CreatorsBlueprint. All rights reserved. | www.creatorsblueprint.com
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </>

    );
};

export default Nav;
