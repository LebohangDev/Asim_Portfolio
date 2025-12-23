import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const Gallery = () => {
    const images = Array.from({ length: 14 }, (_, i) => `Images/Asim/Gallery_${i + 1}.jpg`);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);


    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    }, []);




    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentIndex(c => (c + 1) % images.length);
            handleContainerScroll();


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
                    ref={containerRef}
                    animate={{ x: -currentIndex * 300 }}
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
