import React from 'react'
import style from '@/app/(WithHeaderAndFooter)/mobileAppDevelopment/mobileAppDevelopment.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function page() {

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
        </>
    )
}
