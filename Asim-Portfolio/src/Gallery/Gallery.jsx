import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';
import { fadeInUp } from '../animations';

const Gallery = () => {
    const images = useMemo(() => Array.from({ length: 21 }, (_, i) => `Images/Asim/Gallery_${i + 1}.jpg`), []);
    const [currentIndex, setCurrentIndex] = useState(0);








    const [imageWidth, setImageWidth] = useState(300);
    const [visibleImages, setVisibleImages] = useState(1);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 768) {
                setImageWidth(270);
                setVisibleImages(1);
            } else if (window.innerWidth < 1024) {
                setImageWidth(270);
                setVisibleImages(2);
            } else if (window.innerWidth < 1440) {
                setImageWidth(270);
                setVisibleImages(3);
            } else {
                setImageWidth(300);
                setVisibleImages(4);
            }
        };

        // Initial call
        updateWidth();

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = images.length - visibleImages;
            if (prevIndex >= maxIndex) return 0; // Loop back to start
            return prevIndex + 1;
        });
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = images.length - visibleImages;
            if (prevIndex <= 0) return maxIndex; // Loop to end
            return prevIndex - 1;
        });
    };




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

                <div className={styles.navigationWrapper}>
                    <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage} aria-label="Previous Image">
                        <i className="ri-arrow-left-s-line"></i>
                    </button>

                    <div className={styles.galleryWindow}>
                        <motion.div
                            className={styles.ImagesContainer}
                            animate={{ x: -currentIndex * (imageWidth + 32) }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                        >
                            {images.map((image, index) => (
                                <div className={styles.imageCardContainer} onClick={() => setCurrentIndex(index)} key={index}>
                                    <img
                                        src={image}
                                        alt={`Asim Swati Gallery ${index + 1}`}
                                        loading={index < 4 ? "eager" : "lazy"}
                                        decoding={index < 4 ? "auto" : "async"}
                                        fetchPriority={index < 4 ? "high" : "auto"}
                                    />
                                </div>

                            ))}
                        </motion.div>
                    </div>

                    <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage} aria-label="Next Image">
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>


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
