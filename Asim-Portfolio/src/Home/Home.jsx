
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (

        <>

            <div id='Home' className={styles.homeContainer}>
                <div className={styles.homeContent1}>
                    <div className={styles.description}>
                        <h1>Opportunities move quickly in <span>Dubai.</span></h1>
                        <p>Running fast is not enough</p>
                        <p>you need to run in the right <span>direction</span></p>
                    </div>
                    <div className={styles.signature}>
                        <img src="Images/Asim/Asim_signature_1.png" alt="" />
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
