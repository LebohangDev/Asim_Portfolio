import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from './Gallery.module.css';

const Gallery = () => {
    // Generate array of image paths
    const images = Array.from({ length: 14 }, (_, i) => `Images/Asim/Gallery_${i + 1}.jpg`);

    return (
        <div id="Gallery" className={styles.galleryContainer}>
            <div className={styles.GalleryHeader}>
                <h1>A GALLERY OF MY ACTIVITES </h1>
                <hr />

            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 3 }}
            >
                <Masonry gutter="1.5rem">
                    {images.map((image, i) => (
                        <div key={i} className={styles.imageWrapper}>
                            <img
                                src={image}
                                alt={`Asim Swati Gallery ${i + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;
