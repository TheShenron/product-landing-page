import React from 'react';
import group117 from '../Assets/Group 117.png'
import styles from '../styles/mission.module.css'
import styles2 from '../styles/missionBox2.module.css'

import dungeon from '../Assets/dungeon.png'
import Vector_2 from '../Assets/Vector-2.png'
import Vector_1 from '../Assets/Vector-1.png'

import Group from '../Assets/Group.png'
import ILLUSTRATION_03 from '../Assets/ILLUSTRATION 03  1.png'
import Group_1 from '../Assets/Group-1.png'
import Group_2 from '../Assets/Group-2.png'
import Vector from '../Assets/Vector.png'

function Mission(props) {
    return (
        <section className={styles.mission}>
            <div>
                <div>
                    Watch the video about UAE or Offshore Company Registration
                    <img src={group117} alt="playbtn" />
                </div>

                <div>
                    <h1>
                        <span>Dedicated</span>
                        to our mission we are
                    </h1>

                    <p>
                        Our services include Company Formation & Renewals, Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.
                    </p>
                </div>

                <div className={styles.missionbox1}>

                    <div>
                        <img src={dungeon} alt="dungeon.png" />
                        <h1>
                            UAE Free Zone Company
                        </h1>
                        <p>
                            Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.
                        </p>
                        <button>
                            Get Started
                        </button>
                    </div>

                    <div>
                        <img src={Vector_2} alt="Vector-2.png" />
                        <h1>
                            Dubai Local Companies
                        </h1>
                        <p>
                            The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.
                        </p>
                        <button>
                            Get Started
                        </button>
                    </div>

                    <div>
                        <img src={Vector_1} alt="Vector-1.png" />
                        <h1>
                            Offshore Compamies
                        </h1>
                        <p>
                            You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process
                        </p>
                        <button>
                            Get Started
                        </button>
                    </div>

                </div>


                <div className={styles2.missionbox2}>

                    <div>
                        <p>
                            Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.
                        </p>
                        <button>
                            Claim a Free Quote
                        </button>
                    </div>

                    <div>
                        <img src={Group} alt="Group" />
                        <h1>Advice & Guidance</h1>
                        <p>
                            All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.
                        </p>
                        <button>
                            Learn more <img src={Vector} alt="Vector" />
                        </button>
                    </div>


                    <div>
                        <img src={ILLUSTRATION_03} alt="ILLUSTRATION_03" />
                        <h1>Bank Account Setup</h1>
                        <p>
                            There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent’s strategies and have changed local requirements overnight in the past. But we are here to help you.
                        </p>
                        <button>
                            Learn more <img src={Vector} alt="Vector" />
                        </button>
                    </div>

                    <div>
                        <img src={Group_1} alt="Group_1" />
                        <h1>Registration Document Perparation</h1>
                        <p>
                            Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.
                        </p>
                        <button>
                            Learn more <img src={Vector} alt="Vector" />
                        </button>
                    </div>

                    <div>
                        <img src={Group_2} alt="Group_2" />
                        <h1>UAE Company Visas</h1>
                        <p>
                            Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.
                        </p>
                        <button>
                            Learn more <img src={Vector} alt="Vector" />
                        </button>
                    </div>


                    <div>
                        <p>
                            We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE.
                        </p>
                        <button>
                            More about our services <img src={Vector} alt="Vector" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Mission;