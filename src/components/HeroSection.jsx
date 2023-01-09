import React from 'react';
import styles from '../styles/heroSection.module.css'
import heroImg from '../Assets/ILLUSTRATION.png'

function HeroSection(props) {
    return (
        <section className={styles.heroSection}>
            <div>
                <div className={styles.heroSection_left}>

                    <p>
                        Claim a Free Quote
                    </p>

                    <h1>
                        <span>Get started</span> on fulfilling your Dubai or UAE dream.
                    </h1>

                    <img className={styles.heroSection_right_hidden} src={heroImg} alt="heroImg" />

                    <p>
                        UAE & Offshore Company
                    </p>

                    <p>
                        We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.
                    </p>

                    <div>
                        <button>Start a Company</button>
                        <button>Renew a Company</button>

                    </div>

                </div>

                <img className={styles.heroSection_right} src={heroImg} alt="heroImg" />

            </div>
        </section>
    );
}

export default HeroSection;