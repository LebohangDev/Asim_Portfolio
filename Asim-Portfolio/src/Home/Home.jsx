
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (

        <>

            <div className={styles.homeContainer}>
                <div className={styles.homeContent1}>
                    <div className={styles.helloTitle}>
                        <p>Hello, I'm</p>
                        <div className={styles.name}>
                            <h1>ASIM</h1>
                            <h1>SWATI</h1>
                            <hr />
                            <hr />
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>Asim Swati is a visionary entrepreneur and founder of <span>@Quiickwork</span>, building smart solutions that help businesses scale in Dubai’s fast-paced market. Based in Dubai, he’s focused on turning bold ideas into real impact. Beyond work, he loves traveling, exploring new cultures, and finding inspiration for his next move.</p>
                    </div>
                    <div className={styles.signature}>
                        <h2>WAsim Swati</h2>
                    </div>

                    <div className={styles.socialsContainer}>
                        <a href="https://www.linkedin.com/in/asim-swati/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/asim_swati/" target="_blank" rel="noopener noreferrer">
                            <i class="ri-instagram-line"></i>
                        </a>
                        <a href="https://www.facebook.com/asim.swati/" target="_blank" rel="noopener noreferrer">
                            <i class="ri-facebook-fill"></i>
                        </a>
                        <a href="https://www.youtube.com/@asim_swati" target="_blank" rel="noopener noreferrer">
                            <i class="ri-youtube-fill"></i>
                        </a>
                    </div>

                </div>
                <div className={styles.homeContent2}>
                    <div className={styles.imageContainer}>
                        <img src="/Images/Asim/Asim_Hero.png" alt="" />
                    </div>
                    <div className={styles.keywordsContainer}>
                        <img src="/Images/Logos/logo_4.svg" alt="" />
                        <div className={styles.itemContainer}>
                            <div className={styles.item}>
                                <hr />
                                <p>Founder</p>
                            </div>
                            <div className={styles.item}>
                                <hr />
                                <p>Visonary</p>
                            </div>
                            <div className={styles.item}>
                                <hr />
                                <p>Game Changer</p>
                            </div>
                            <div className={styles.item}>
                                <hr />
                                <p>Leader</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;
