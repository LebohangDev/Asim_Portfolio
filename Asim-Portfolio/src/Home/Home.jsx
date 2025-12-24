
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (

        <>

            <div id='Home' className={styles.homeContainer}>
                <div className={styles.homeContent1}>
                    <div className={styles.description}>
                        <h1>Opportunities move quiickly in <span>Dubai.</span></h1>
                        <p><span>Running fast</span> is not enough</p>
                        <p>you need to run in the <span>right direction</span></p>
                    </div>
                    <div className={styles.signature}>
                        <img src="Images/Asim/Asim_signature_1.svg" alt="" />
                    </div>



                </div>
                <div className={styles.homeContent2}>
                    <div className={styles.imageContainer}>
                        <img src="Images/Asim/Asim_Hero.png" alt="" />
                    </div>

                </div>
            </div>
        </>

    );
};

export default Home;
