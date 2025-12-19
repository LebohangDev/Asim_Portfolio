import React from 'react';
import styles from './Product.module.css';

const Product = () => {

    const growthPath = [
        {
            title: "Launch Right",
            description:
                "Choose the right license, structure your company correctly, and avoid costly setup mistakes.",
            icon: "ri-target-line", // target icon
        },
        {
            title: "Stay Compliant",
            description:
                "Understand banking, visas, and legal requirements to operate smoothly in Dubai.",
            icon: "ri-scales-3-line", // scales icon
            highlight: true, // center / accent item
        },
        {
            title: "Scale Smart",
            description:
                "Learn proven strategies to grow, expand, and sustain your business long-term.",
            icon: "ri-line-chart-line", // growth icon
        },
    ];
    return (
        <div id="Product" className={styles.ProductContainer}>
            <div className={styles.ProductHeader}>
                <h1>BUILT IN <span>DUBAI</span></h1>
                <hr />
                <p>How to build Scale & sustain profitable Business in the UAE with <span>Asim Swati</span></p>
            </div>

            <div className={styles.ProductContent}>
                <div className={styles.ProductContentContainer}>
                    <div className={styles.ProductContentHeader}>
                        <h1>COURSE</h1>
                    </div>

                    <div className={styles.ProductContentBody}>
                        <h1>Asim Swati Business Masterclass</h1>
                        <p>Learn how to launch, structure, and scale a successful business in Dubai</p>
                        <div className={styles.ProductContentBodyButton}>
                            <button>GET FULL COURSE<i className="ri-shopping-cart-2-line"></i> </button>
                        </div>
                    </div>

                </div>
                <div className={styles.ProductContentPreview}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ocjpq-rV1ZM?si=j2P9zLcdhehqnGZb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>



            </div>
            <div className={styles.ProductLearnContainer}>
                <div className={styles.ProductLearnHeader}>
                    <hr />
                    <h1>The Proven Path to Growth</h1>
                    <hr />
                </div>
                <div className={styles.ProductLearnGrid}>
                    {growthPath.map((item, index) => (
                        <div key={index} className={styles.ProductLearnGridItem}>
                            <i className={item.icon}></i>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    );
};

export default Product;
