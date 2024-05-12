import React from 'react'
import style from '@/components/HomePageComponents/WorkFlow/WorkFlow.module.scss'
import Image from 'next/image'
import icon1 from '@/assets/images/icon1.webp'
import icon2 from '@/assets/images/icon2.webp'
import icon3 from '@/assets/images/icon3.webp'
import icon4 from '@/assets/images/icon4.webp'


export default function WorkFlow() {


    return (

        <div className={style.workflow}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h2 className={style.heading}> What's our workflow like?</h2>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className={style.box}>
                            <div className={style.first_sec}>
                                <h6 className={style.number}>01</h6>
                                <div className={style.icon}>
                                    <Image src={icon1} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.head}>Strategizing and Evaluation</h6>
                            <p className={style.para}>Perform research, collect prerequisites, develop wireframes and prototypes, and assess time and resource requirements.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className={style.box}>
                            <div className={style.first_sec}>
                                <h6 className={style.number}>02</h6>
                                <div className={style.icon}>
                                    <Image src={icon2} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.head}>Design and Development</h6>
                            <p className={style.para}>Design visuals, build front-end and back-end systems, integrate features and functionalities, and conduct rigorous quality testing.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className={style.box}>
                            <div className={style.first_sec}>
                                <h6 className={style.number}>03</h6>
                                <div className={style.icon}>
                                    <Image src={icon3} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.head}>Deployment and Launch</h6>
                            <p className={style.para}>Ready for deployment and hosting, verify performance and user-friendliness, initiate launch, and coordinate with stakeholders.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className={style.box}>
                            <div className={style.first_sec}>
                                <h6 className={style.number}>04</h6>
                                <div className={style.icon}>
                                    <Image src={icon4} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.head}>Maintenance and Support</h6>
                            <p className={style.para}>Monitor, upkeep, offer technical assistance, resolve issues, and enhance/revise the website or application.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
