import React from 'react';
import styles from './Product.module.css';

const Product = () => {

    const growthPath = [
        {
            title: "M – Map Dubai & the Market",
            description:
                "Understand how Dubai really works: opportunities, costs, culture, and demand in your space.",
            icon: "ri-map-pin-user-line",
        },
        {
            title: "O – Own Your Vehicle",
            description:
                "Choose the right role and model for you: founder, freelancer, investor, creator, or professional — and match it with the right visa + structure.",
            icon: "ri-steering-2-line",
        },
        {
            title: "V – Verify Your Base",
            description:
                "Set up the correct company, banking, and compliance so nothing breaks when you start growing.",
            icon: "ri-shield-check-line",
        },
        {
            title: "E – Expand with Intention",
            description:
                "Scale your income, network, and lifestyle in a way that’s sustainable, not chaotic.",
            icon: "ri-rocket-2-line",
        },
    ];
    return (
        <div id="Product" className={styles.ProductContainer}>


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
                    <h1>My <span>4 Step</span> Formula</h1>
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
