import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const Gallery = () => {
    const images = Array.from({ length: 14 }, (_, i) => `Images/Asim/Gallery_${i + 1}.jpg`);
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
            <div className={styles.GalleryHeader}>
                <h1>A GALLERY OF MY ACTIVITIES</h1>
                <hr />
            </div>
            <div className={styles.ActivitiesContainer}>

                <motion.div
                    className={styles.ImagesContainer}

                    animate={{ x: -currentIndex * (imageWidth + 10) }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                    {images.map((image, index) => (
                        <div className={styles.imageCardContainer} onClick={() => setCurrentIndex(index)} key={index}>
                            <img src={image} alt={`Asim Swati Gallery ${index + 1}`} />
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

            </div>




        </div >
    );
};

export default Gallery;
