'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/mobileAppDevelopment/mobileAppDevelopment.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import CoonectModal from '@/components/CoonectModal'

export default function page() {

    const [modalShow, setModalShow] = useState(false)

    return (

        <>
            <div className={style.app}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center">
                            <h1 className={style.heading}>Mobile App Development</h1>
                            <p className={style.para}>Specializing in providing premium iOS and web app development services. Our
                                dedication to quality ensures that clients receive custom Mobile App Solutions that set new
                                industry benchmarks.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.mobile_app} alt='' fill priority />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={style.intro}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10 text-center">
                            <h2 className={style.heading}>Select the Leading App Development Company for Your Project!</h2>
                            <p className={style.para}>In today’s digital age, having a mobile app is essential for businesses
                                looking to reach and engage their audience effectively. At Digitech Uttarakhand, we offer
                                comprehensive mobile app development services designed to transform your ideas into powerful,
                                user-friendly applications. Our expert team of developers and designers leverage the latest
                                technologies to create apps that are innovative, scalable, and tailored to your business needs.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.feature}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Key Features of Our App Development</h2>
                            <p className={style.para}>We specialize in creating custom mobile applications that are perfectly
                                aligned with your business objectives.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={Images.mobile_feat1} alt='' fill priority />
                                </div>
                            </div>

                            <h2 className={style.head}>Requirement Analysis</h2>
                            <p className={style.para}>Understanding your business needs and defining the project scope.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={Images.mobile_feat2} alt='' fill priority />
                                </div>
                            </div>

                            <h2 className={style.head}>UI/UX Design</h2>
                            <p className={style.para}>Designing intuitive and engaging user interfaces that enhance user experience.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={Images.mobile_feat3} alt='' fill priority />
                                </div>
                            </div>
                            <h2 className={style.head}>Backend Development</h2>
                            <p className={style.para}>Building secure and scalable backend systems to support your mobile
                                application.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={Images.mobile_feat4} alt='' fill priority />
                                </div>
                            </div>
                            <h2 className={style.head}>Integration Services</h2>
                            <p className={style.para}>Ensuring seamless integration with existing systems and third-party
                                services.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <div className={style.circle}>
                                <div className={style.image}>
                                    <Image src={Images.mobile_feat5} alt='' fill priority />
                                </div>
                            </div>
                            <h2 className={style.head}>Maintenance and Support</h2>
                            <p className={style.para}>We offer maintenance and support services to ensure your
                                app remains up-to-date and performs optimally.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.services}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Our Mobile App Development Services</h2>
                            <p className={style.para}>Our development services ensure your app performs consistently across multiple
                                platforms, saving time and reducing costs.</p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_contents}>
                                <div className={style.image}>
                                    <Image src={Images.icons1} alt='' fill priority />
                                </div>
                                <div className={style.main}>
                                    <h4 className={style.head}>iOS App Development</h4>
                                    <p className={style.para}>Utilizing Swift and Objective-C to create robust iOS applications that
                                        meet Apple’s high standards.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_contents}>
                                <div className={style.image}>
                                    <Image src={Images.icons2} alt='' fill priority />
                                </div>
                                <div className={style.main}>
                                    <h4 className={style.head}>Android App Development</h4>
                                    <p className={style.para}>Using Java and Kotlin to develop reliable Android applications that
                                        run smoothly on various devices.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_contents}>
                                <div className={style.image}>
                                    <Image src={Images.icons3} alt='' fill priority />
                                </div>
                                <div className={style.main}>
                                    <h4 className={style.head}>React Native Development</h4>
                                    <p className={style.para}>Creating apps with React Native to provide a native-like experience
                                        on both iOS and Android.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_contents}>
                                <div className={style.image}>
                                    <Image src={Images.icons4} alt='' fill priority />
                                </div>
                                <div className={style.main}>
                                    <h4 className={style.head}>Flutter Development</h4>
                                    <p className={style.para}>Using Flutter to build visually attractive and fast-performing cross-platform
                                        applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.choose}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Why Choose Digitech Uttarakhand ?</h2>
                        </div>


                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Experienced Team</h4>
                                <p className={style.para}>Our team of seasoned developers and designers has extensive experience in creating
                                    successful mobile applications across various industries.</p>
                            </div>
                        </div>

                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Client-Centric Approach</h4>
                                <p className={style.para}>We prioritize your business objectives and work closely with you to deliver a mobile app that
                                    meets your specific needs and exceeds your expectations.</p>
                            </div>
                        </div>

                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Agile Methodology</h4>
                                <p className={style.para}>We employ agile development practices to ensure flexibility, transparency, and timely delivery
                                    throughout the project lifecycle.</p>
                            </div>
                        </div>

                        <div className={`${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Quality Assurance</h4>
                                <p className={style.para}>Our rigorous QA processes ensure that the mobile applications we develop are reliable, and
                                    secure, and perform exceptionally well.</p>
                            </div>
                        </div>

                        <div className={`${style.border} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Innovative Solutions</h4>
                                <p className={style.para}>We stay up-to-date with the latest technologies and trends to provide innovative solutions that
                                    give your business a competitive edge.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>


            <div className={style.form}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h4 className={style.form_head}>Ready to Build Your Next Mobile App?</h4>
                            <p className={style.form_para}>Transform your ideas into a powerful mobile application with Digitech Uttarakhand. Contact us
                                today to discuss your project with our mobile app development specialists and discover how we
                                can help you achieve your business goals.</p>
                            <button onClick={() => setModalShow(true)} className={style.btn1}>Let's Talk</button>
                        </div>
                    </div>
                </div>
            </div>


            <CoonectModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
