import { useEffect, useState, useRef } from 'react';
import styles from './Nav.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ activeNav, setActiveNav, containerRef }) => {
    const [hamMenu, setHamMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    let lastScrollTop = 0;


    useEffect(() => {

        const container = containerRef.current;


        const isScrolling = (event) => {





            let currentScrollTop = event.target.scrollTop;

            // if currentScroll top is greater that last know scroll top postion set nav as visible else hidden
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);

            } else if (currentScrollTop < lastScrollTop) {
                setIsVisible(true);

            }

            // update lastScrollTop to currentscrll top 
            lastScrollTop = currentScrollTop;

        }


        container.addEventListener('scroll', isScrolling);

        return () => {
            container.removeEventListener('scroll', isScrolling);
        }

    }, [lastScrollTop]); // rune everytime isvisbile changes 





    return (

        <>
            <AnimatePresence>
                <motion.div
                    key={isVisible}
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={isVisible === true ? styles.navContainer : styles.navContainer_hidden}
                >

                    <nav >
                        <ul>
                            <li className={activeNav === 'Home' ? styles.active : ''}>
                                <i class="ri-home-6-line"></i>
                                <a href="#Home" onClick={() => setActiveNav('Home')}>Home</a>
                            </li>
                            <li className={activeNav === 'Impact' ? styles.active : ''}>
                                <i class="ri-meteor-line"></i>
                                <a href="#Impact" onClick={() => setActiveNav('Impact')} >Impact</a>
                            </li>
                            {/*
                            <li className={activeNav === 'Product' ? styles.active : ''}>
                                <i class="ri-shopping-cart-2-line"></i>
                                <a href="#Product" onClick={() => setActiveNav('Product')} >Product</a>
                            </li>
                            */}
                            <li className={activeNav === 'Gallery' ? styles.active : ''}>
                                <i class="ri-multi-image-line"></i>
                                <a href="#Gallery" onClick={() => setActiveNav('Gallery')} >Gallery</a>
                            </li>
                            <div className={styles.imgContainer}>
                                <img src="Images/Asim/Asim_signature_1.svg" alt="" />
                            </div>
                        </ul>
                    </nav>


                </motion.div>
            </AnimatePresence>

            <div className={styles.hamburgerContainer}>
                <div className={styles.hamHeader}>
                    <div className={styles.imgContainer}>
                        <img src="Images/Asim/Asim_signature_1.svg" alt="" />
                    </div>
                    <img
                        src="Images/hamburger.svg"
                        alt="Menu"
                        className={styles.hamburgerIcon}
                        onClick={(e) => { e.preventDefault(); setHamMenu(true) }}
                    />
                </div>

                <AnimatePresence>
                    {hamMenu === true ? (
                        <motion.div
                            className={styles.hamMenuActive}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className={styles.close}>
                                <img src="Images/close.svg" alt="Close" className={styles.closeIcon} onClick={(e) => { e.preventDefault(); setHamMenu(false) }} />
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
                                {/*
                                <li>
                                    <i class="ri-shopping-cart-2-line"></i>
                                    <a href="#Product" onClick={() => { setActiveNav('Product'); setHamMenu(false); }} >Product</a>
                                </li>
                                */}
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
                                    <a href="https://www.instagram.com/asimswatii/" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-instagram-line" style={{ color: 'var(--accent-primary)' }}></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/asim-swati-141579136/" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-linkedin-fill" style={{ color: 'var(--accent-primary)' }}></i>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.copyright}>
                                <p>
                                    © {new Date().getFullYear()} Asim Swati. All rights reserved.
                                </p>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

        </>

    );
};

export default Nav;
