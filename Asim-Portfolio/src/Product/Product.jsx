import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Product.module.css';
import { fadeInUp, staggerContainer, scaleIn } from '../animations';

const Product = () => {



    const growthPath = [
        {
            title: "M – Map Dubai & the Market",
            description: "Understand how Dubai really works: opportunities, costs, culture, and demand in your space.",
            icon: "ri-map-pin-user-line",
        },
        {
            title: "O – Own Your Vehicle",
            description: "Choose the right role and model for you: founder, freelancer, investor, creator, or professional — and match it with the right visa + structure.",
            icon: "ri-steering-2-line",
        },
        {
            title: "V – Verify Your Base",
            description: "Set up the correct company, banking, and compliance so nothing breaks when you start growing.",
            icon: "ri-shield-check-line",
        },
        {
            title: "E – Expand with Intention",
            description: "Scale your income, network, and lifestyle in a way that’s sustainable, not chaotic.",
            icon: "ri-rocket-2-line",
        },
    ];

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const productInfo = {
        title: "Asim Swati Business Masterclass",
        amount: 399,
        currency: "USD",
        successUrl: "https://lebohangdev.github.io/Asim_Portfolio/?payment=success",
        cancelUrl: "https://lebohangdev.github.io/Asim_Portfolio/?payment=cancel",


    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsEmailValid(validateEmail(val));
    };

    // pass the selected plan from user
    async function handleZinnaPayment() {
        try {

            const productPayload = {
                amount: productInfo.amount,
                currency: productInfo.currency,
                title: productInfo.title,
                email: email,
                successUrl: productInfo.successUrl,
                cancelUrl: productInfo.cancelUrl,

            }

            const res = await fetch('https://asim-portfolio-backend.onrender.com/api/create-payment-intent', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productPayload),

            });
            console.log(productPayload);

            const data = await res.json()
            window.location.href = data.redirect_url;

            console.log("redirect url:", data.redirect_url)



        } catch (e) {
            console.error("failed to send request to create payment session for user:", e)



        }






    }
    return (
        <div id="Product" className={styles.ProductContainer}>


            <div className={styles.ProductContent}>
                <div className={styles.ProductContentContainer}>
                    <motion.div
                        className={styles.ProductContentHeader}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h1>COURSE</h1>
                    </motion.div>

                    <div className={styles.ProductContentBody}>
                        <h1>Asim Swati Business Masterclass</h1>
                        <p>Learn how to launch, structure, and scale a successful business in Dubai</p>
                        <div className={styles.ProductContentBodyButton}>
                            <input
                                type="email"
                                className={styles.emailInput}
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button disabled={!isEmailValid} onClick={() => { handleZinnaPayment(); setEmail(''); }}>GET FULL COURSE<i className="ri-shopping-cart-2-line"></i> </button>
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
                <motion.div
                    className={styles.ProductLearnGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {growthPath.map((item, index) => (
                        <motion.div key={index} className={styles.ProductLearnGridItem} variants={fadeInUp}>
                            <i className={item.icon}></i>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}

                </motion.div>
            </div>


        </div>
    );
};

export default Product;
