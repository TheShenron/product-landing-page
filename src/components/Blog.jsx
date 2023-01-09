import React from 'react';
import styles from '../styles/blog.module.css'
import Vector_4 from '../Assets/Vector-4.png'
import Vector_3 from '../Assets/Vector-3.png'
import Vector_5 from '../Assets/Vector-5.png'
import Vector_6 from '../Assets/Vector-6.png'
import Vector_7 from '../Assets/Vector-7.png'
import Vector_8 from '../Assets/Vector-8.png'
import Group_34 from '../Assets/Group 34.png'


const Post = ({ img, alt, title, time }) => {

    return (
        <>
            <div>
                <img src={img} alt={alt} />
                <div>
                    <p>{title}</p>
                    <p> {time} </p>
                </div>
            </div>
        </>
    )
}


const Review = ({ img, alt, review, name }) => {

    return (
        <>
            <div>
                <img src={img} alt={alt} />
                <div>
                    <p>“ {review} “</p>
                    <p>{name}</p>
                </div>
            </div>
        </>
    )
}


function Blog(props) {

    const post = [
        {
            img: Vector_4,
            alt: "Vector_4",
            title: "How to start a company formation in Dubai",
            time: "5 Minutes"
        },
        {
            img: Vector_4,
            alt: "Vector_4",
            title: "How to start an Offshore company formation in Dubai",
            time: "5 Minutes"
        },
        {
            img: Vector_4,
            alt: "Vector_4",
            title: "SEO Dubai: Who benefits the most?",
            time: "5 Minutes"
        }
    ]

    const review = [
        {
            img: Vector_3,
            alt: "Vector_3",
            review: "I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone,",
            name: "Muhib Abrar"
        },
        {
            img: Vector_3,
            alt: "Vector_3",
            review: "Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity,",
            name: "Mark Swann"
        },
        {
            img: Vector_3,
            alt: "Vector_3",
            review: "Your advise was so complete that I actually realized how beneficial this would be to my clients and my business.",
            name: "Mark Swann"
        },
    ]


    return (
        <section className={styles.bolg}>
            <div>
                <div className={styles.blogSection}>

                    <div>
                        <div>
                            <h1>
                                Read about our blogs for more information on our processes
                            </h1>
                        </div>

                        <div>
                            {post && post.map((el, ind) => {
                                return <Post key={ind+"Post"} img={el.img} alt={el.alt} title={el.title} time={el.time} />
                            })}
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>
                                Satidfied We are When Our Customers Are Happy

                            </h1>
                        </div>

                        <div>
                            {review && review.map((el, ind) => {
                                return <Review key={ind+"review"} img={el.img} alt={el.alt} review={el.review} name={el.name} />
                            })}
                        </div>

                    </div>

                </div>
                <div className={styles.aboutSection}>

                    <div>
                        <div>
                            <h1>
                                Get to know the whole us and more of our services
                            </h1>
                        </div>

                        <div>
                            <div>
                                <h1>Services</h1>
                                <ul>
                                    <li>
                                        Products
                                    </li>
                                    <li>
                                        Solutions

                                    </li>
                                    <li>
                                        Assuranc
                                    </li>
                                    <li>
                                        Working
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1>Policies</h1>
                                <ul>
                                    <li>
                                        Privacy Policy
                                    </li>
                                    <li>
                                        Terms & Conditions
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1>About</h1>
                                <ul>
                                    <li>
                                        About Us
                                    </li>
                                    <li>
                                        Contact Us
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <h1>Address</h1>
                                <ul>
                                    <li>
                                        608 One Lake Plaza, Cluster T,
                                        Al Sarayat Street, Jumeirah Lake Towers
                                        <br />
                                        Dubai
                                        <br />
                                        United Arab Emirates
                                    </li>
                                    <li>
                                        Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]
                                        <br />
                                        M: +971 55 794 2016
                                        <br />
                                        O: +971 4 447 2061

                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1>Subscribe Now</h1>
                                <ul>
                                    <li>
                                        Sunbscribe now to receive our Newsletters about amazing opportunities in Dubai
                                    </li>
                                </ul>

                                <div>
                                    <input type={'text'} placeholder='Enter Email Address'/>
                                    <img src={Group_34} alt="Group_34" />
                                </div>

                                <div>
                                    <img src={Vector_5} alt="Vector_5" />
                                    <img src={Vector_6} alt="Vector_6" />
                                    <img src={Vector_7} alt="Vector_7" />
                                    <img src={Vector_8} alt="Vector_8" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;