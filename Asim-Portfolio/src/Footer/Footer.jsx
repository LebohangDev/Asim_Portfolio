
import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ setActiveNav }) => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    <div className={styles.signatureContainer}>
                        <img src="Images/Asim/Asim_signature_1.svg" alt="Asim Swati Signature" />
                    </div>
                    <div className={styles.media}>
                        <p>Media</p>
                        <div className={styles.socialIcons}>
                            <i className="ri-instagram-line" style={{ color: 'var(--accent-primary)' }}></i>
                            <i className="ri-linkedin-fill" style={{ color: 'var(--accent-primary)' }}></i>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <ul>
                            <li><a href="#Home" onClick={() => setActiveNav('Home')}>Home</a></li>
                            <li><a href="#Impact" onClick={() => setActiveNav('Impact')}>Impact</a></li>
                            <li><a href="#Product" onClick={() => setActiveNav('Product')}>Product</a></li>
                            <li><a href="#Gallery" onClick={() => setActiveNav('Gallery')}>Gallery</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <p>© {new Date().getFullYear()} ASIM SWATI. All rights reserved.| www.creatorsblueprint.net</p>




        </div>
    );
};

export default Footer;
