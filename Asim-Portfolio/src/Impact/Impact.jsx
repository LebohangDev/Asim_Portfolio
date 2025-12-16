
import React from 'react';
import styles from './Impact.module.css';

const Impact = () => {

    const achievements = [
        {

            description: "Founded <span>@Quiickwork</span>, a Dubai-based business setup company supporting startups and established firms",
            logo: "ri-hammer-line"
        },
        {
            description: "Helped local and international entrepreneurs launch, license, and scale businesses in the UAE",
            logo: "ri-rocket-2-line"
        },
        {
            description: "Enabled global brands to establish operational bases in Dubai through strategic advisory and compliance support",
            logo: "ri-earth-line"
        },
        {
            description: "Built a diverse client portfolio across multiple industries, contributing to Dubai’s startup ecosystem",
            logo: "ri-shake-hands-line"
        }
    ]
    return (
        <div className={styles.impactContainer}>
            <div className={styles.impactContent}>

                <div className={styles.achievmentsContainer}>


                    {
                        <div className={styles.achievements}>
                            <div className={styles.header}>
                                <h1>Changing the Business Landscape</h1>
                                <hr />
                            </div>
                            <div className={styles.achievementTitle}>
                                <h1>Achievements</h1>


                            </div>
                            <div className={styles.achievementContent}>
                                {
                                    achievements.map((achievement, index) => (
                                        <div key={index} className={styles.achievement}>
                                            <div className={styles.logo}>
                                                <i className={achievement.logo}></i>
                                            </div>
                                            <div className={styles.description}>
                                                <p dangerouslySetInnerHTML={{ __html: achievement.description }}></p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>


                        </div>
                    }

                    <div className={styles.achievementImage}>
                        <img src="Images/Asim/Gallery_13.jpg" alt="" />
                    </div>

                </div>
                <div className={styles.milestoneContainer}>
                    <div className={styles.milestoneHeader}>
                        <h1>Milestones</h1>

                    </div>
                    <div className={styles.milestoneContent}>


                        <p>For more than 5 years, owners of medium and large businesses, popular artists, the best restaurants and stores of famous brands have trusted us:</p>
                        <hr />

                        <div className={styles.milestoneImage}>
                            <img src="Images/Asim/Gallery_10.jpg" alt="" />
                        </div>

                        <div className={styles.milestoneItemContent}>
                            <img src="Images/Logos/logo_5.svg" alt="" />
                            <img src="Images/Logos/logo_6.svg" alt="" />
                            <img src="Images/Logos/logo_3.svg" alt="" />
                            <img src="Images/Logos/logo_7.svg" alt="" />
                            <img src="Images/Logos/logo_8.png" alt="" />
                            <img src="Images/Logos/logo_9.svg" alt="" />
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Impact;
