'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import style from '@/app/(WithHeaderAndFooter)/ecommerce/ecommerce.module.scss'
import CoonectModal from '@/components/CoonectModal'

export default function page() {

    const [modalShow, setModalShow] = useState(false)

    return (

        <>
            <div className={style.app}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center">
                            <h1 className={style.heading}>ECommerce Software Development</h1>
                            <p className={style.para}>We are a top eCommerce app development company in India. We create custom
                                eCommerce apps for Android and iOS, supporting clients through the entire development process.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.ecomm} alt='' fill priority />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={style.intro}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.panel} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <h2 className={style.heading}>Transform Your Business with Comprehensive E-Commerce Software Solutions</h2>
                            <p className={style.para}>In the fast-paced digital marketplace, having a robust and scalable e-commerce platform is
                                crucial for business success. At Digitech Uttarakhand, we provide end-to-end e-commerce
                                software development services that help businesses create engaging and secure online stores.
                                Our solutions are tailored to meet your specific needs, ensuring a seamless shopping
                                experience for your customers and driving your business growth.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.features}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.head}>Key Features of Our ECommerce Solutions</h2>
                            <p className={style.para}>We integrate a range of features to enhance the functionality and user experience of your e-
                                commerce platform</p>
                        </div>

                        <div className="row d-flex flex-row justify-content-center">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={style.box_Content}>
                                    <div className={style.circle}>
                                        <div className={style.image}>
                                            <Image src={Images.ecomm1} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h2 className={style.head}>User Registration and Profiles</h2>
                                    <p className={style.para}>Enabling easy user registration and profile management
                                        involves creating a user-friendly system that allows individuals to quickly and
                                        efficiently sign up for an account and manage their personal information.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={style.box_Content}>
                                    <div className={style.circle}>
                                        <div className={style.image}>
                                            <Image src={Images.ecomm1} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h2 className={style.head}>User Registration and Profiles</h2>
                                    <p className={style.para}>Enabling easy user registration and profile management
                                        involves creating a user-friendly system that allows individuals to quickly and
                                        efficiently sign up for an account and manage their personal information.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={style.box_Content}>
                                    <div className={style.circle}>
                                        <div className={style.image}>
                                            <Image src={Images.ecomm3} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h2 className={style.head}>Shopping Cart and Checkout</h2>
                                    <p className={style.para}>Providing a smooth and secure shopping cart and checkout
                                        process involves designing a user-friendly and trustworthy system that enhances
                                        the customer shopping experience.</p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={style.box_Content}>
                                    <div className={style.circle}>
                                        <div className={style.image}>
                                            <Image src={Images.ecomm4} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h2 className={style.head}>Order Management</h2>
                                    <p className={style.para}>Streamlining order tracking, processing, and fulfillment
                                        involves creating an efficient system that manages customer orders from the
                                        moment they are placed to their delivery. </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={style.box_Content}>
                                    <div className={style.circle}>
                                        <div className={style.image}>
                                            <Image src={Images.ecomm5} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h2 className={style.head}>Payment Gateway Integration</h2>
                                    <p className={style.para}>Supporting multiple payment methods and gateways for secure
                                        transactions involves offering a variety of payment options to enhance the customer
                                        experience and ensure the safety of transactions.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={style.box_Content}>
                                    <div className={style.circle}>
                                        <div className={style.image}>
                                            <Image src={Images.ecomm6} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h2 className={style.head}>SEO Optimization</h2>
                                    <p className={style.para}>Ensuring your e-commerce platform is optimized for search
                                        engines to improve visibility involves implementing a series of strategies and
                                        best practices that help your site rank higher in search engine results pages
                                        (SERPs).</p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={style.box_Content}>
                                    <div className={style.circle}>
                                        <div className={style.image}>
                                            <Image src={Images.ecomm7} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h2 className={style.head}>Analytics and Reporting</h2>
                                    <p className={style.para}>Implementing analytics tools to track user behavior,
                                        sales, and performance involves integrating specialized software that collects
                                        and analyzes data about how users interact with your e-commerce platform. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className={style.services}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Our e-commerce software Development Services</h2>
                        </div>


                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Custom ECommerce Development</h4>
                                <p className={style.para}>We specialize in developing custom e-commerce solutions that align perfectly with your
                                    business goals and customer needs.</p>
                            </div>
                        </div>

                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>ECommerce Website Development</h4>
                                <p className={style.para}>We develop responsive and feature-rich e-commerce websites that provide a seamless
                                    shopping experience across all devices.</p>
                            </div>
                        </div>

                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Mobile ECommerce App Development</h4>
                                <p className={style.para}>We design and develop high-quality mobile e-commerce applications for both iOS and Android
                                    platforms.</p>
                            </div>
                        </div>

                        <div className={`${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>ECommerce Platform Migration</h4>
                                <p className={style.para}>We offer seamless migration services to help you move your existing e-commerce store to a
                                    new platform without any data loss or downtime.</p>
                            </div>
                        </div>

                        <div className={`${style.border} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>ECommerce Maintenance and Support</h4>
                                <p className={style.para}>We offer comprehensive maintenance
                                    and support services to keep your e-commerce platform up to date-and performing optimally.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>



            <div className={style.choose}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Why Choose Digitech Uttarakhand for ECommerce Development?</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.first}>
                                    <h2 className={style.head}>Experienced Team</h2>
                                </div>
                                <div className={style.desp}>
                                    <p className={style.para}>Our team of skilled developers and designers has extensive experience
                                        in building successful e-commerce platforms across various industries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.first}>
                                    <h2 className={style.head}>Client Centric Approach</h2>
                                </div>
                                <div className={style.desp}>
                                    <p className={style.para}>We prioritize your business objectives and work closely with you to deliver a custom e-
                                        commerce solution that meets your specific needs and exceeds your expectations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.first}>
                                    <h2 className={style.head}>Agile Methodology</h2>
                                </div>
                                <div className={style.desp}>
                                    <p className={style.para}>We use agile development practices to ensure flexibility, transparency, and timely delivery
                                        throughout the project lifecycle.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.first}>
                                    <h2 className={style.head}>Quality Assurance</h2>
                                </div>
                                <div className={style.desp}>
                                    <p className={style.para}>Our rigorous QA processes ensure that the e-commerce solutions we deliver are reliable,
                                        secure, and high-performing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.first}>
                                    <h2 className={style.head}>Innovative Solutions</h2>
                                </div>
                                <div className={style.desp}>
                                    <p className={style.para}>We stay up-to-date with the latest technologies and trends to provide innovative solutions that
                                        give your business a competitive edge.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className={style.form}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h4 className={style.form_head}>Have an Awesome Idea? Let&#39;s Discuss the Project!</h4>
                            <p className={style.form_para}>We offer a quick analysis and free proposal for your project. Rest assured, your idea is secure
                                and confidential.</p>
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
