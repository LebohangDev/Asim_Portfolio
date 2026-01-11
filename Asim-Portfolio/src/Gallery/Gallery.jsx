import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';
import { fadeInUp } from '../animations';

const Gallery = () => {
    const images = useMemo(() => Array.from({ length: 21 }, (_, i) => `Images/Asim/Gallery_${i + 1}.jpg`), []);
    const [currentIndex, setCurrentIndex] = useState(0);








    const [imageWidth, setImageWidth] = useState(300);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth <= 480) {

                setImageWidth(270);
            } else if (window.innerWidth <= 768) {

                setImageWidth(270);
            } else if (window.innerWidth <= 1024) {

                setImageWidth(270);
            } else {
                setImageWidth(300);
            }
        };

        // Initial call
        updateWidth();

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentIndex(c => (c + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);




    return (
        <div id="Gallery" className={styles.galleryContainer}>
            <motion.div
                className={styles.GalleryHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h1>A GALLERY OF MY ACTIVITIES</h1>
                <hr />
            </motion.div>
            <motion.div
                className={styles.ActivitiesContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >

                <motion.div
                    className={styles.ImagesContainer}

                    animate={{ x: -currentIndex * (imageWidth + 10) }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                    {images.map((image, index) => (
                        <div className={styles.imageCardContainer} onClick={() => setCurrentIndex(index)} key={index}>
                            <img src={image} alt={`Asim Swati Gallery ${index + 1}`} loading="lazy" decoding="async" />
                        </div>

                    ))}
                </motion.div>


                <div className={styles.dotsContainer}>
                    {images.map((__, index) => (

                        <span
                            key={index}
                            className={index === currentIndex ? styles.activeDot : ''}

                        >
                        </span>
                    ))}
                </div>

            </motion.div>




        </div >
    );
};

export default Gallery;
