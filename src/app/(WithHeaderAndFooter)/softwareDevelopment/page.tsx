'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/softwareDevelopment/softwareDevelopment.module.scss'
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
                        <div className="col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center text-center">
                            <h1 className={style.heading}>Software Development Services</h1>

                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.soft_main} alt='' fill priority />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={style.intro}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.head}>Comprehensive Software Development Services Tailored to Your Business Needs</h2>
                            <p className={style.para}>At Digitech Uttarakhand, we provide comprehensive software development services tailored to
                                meet the unique needs of your business. Our team of experienced developers, designers, and
                                project managers work collaboratively to deliver innovative and scalable solutions that drive
                                your business forward.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.solutions}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Our Software Development Solutions</h2>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.image}>
                                <Image src={Images.soft_img1} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <h4 className={style.head}>Custom Software Development</h4>
                                <p className={style.para}>We specialize in creating custom software solutions that align perfectly with your business
                                    goals. Our services include:</p>

                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft1} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Requirement Analysis</h6>
                                            <p className={style.para}>Thorough analysis of your business needs to create detailed software
                                                requirements.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft2} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Tailored Solutions</h6>
                                            <p className={style.para}>Custom software development to address specific business challenges and
                                                opportunities.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft3} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Scalable Architecture</h6>
                                            <p className={style.para}>Designing scalable software architecture to accommodate future growth
                                                and integration.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft4} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Quality Assurance</h6>
                                            <p className={style.para}>Rigorous testing to ensure the software is robust, secure, and performs
                                                optimally.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <h4 className={style.head}>Web Application Development</h4>
                                <p className={style.para}>Our web application development services provide powerful, responsive, and user-friendly web
                                    solutions. We offer:</p>

                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft5} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>FrontEnd Development</h6>
                                            <p className={style.para}>Creating visually appealing and intuitive interfaces using the latest web
                                                technologies.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft6} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>BackEnd Development</h6>
                                            <p className={style.para}>Developing secure and efficient server-side applications to manage
                                                data and processes.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft2} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>E-commerce Solutions</h6>
                                            <p className={style.para}>Building comprehensive e-commerce platforms with features like
                                                product management, payment gateways, and order processing.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft7} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Content Management Systems (CMS)</h6>
                                            <p className={style.para}>Developing custom CMS solutions for easy content
                                                creation, management, and publication.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.image}>
                                <Image src={Images.soft_img2} alt='' fill priority />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.image}>
                                <Image src={Images.soft_img3} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <h4 className={style.head}>Mobile App Development</h4>
                                <p className={style.para}>We design and develop high-quality mobile applications for both iOS and Android platforms. Our
                                    mobile app services include:</p>

                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft8} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Native App Development</h6>
                                            <p className={style.para}>Building apps specifically for iOS or Android to leverage platform-
                                                specific features.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft9} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Cross Platform Development</h6>
                                            <p className={style.para}>Creating apps that work seamlessly across multiple platforms
                                                using frameworks like Flutter and React Native.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft10} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>User Centric Design</h6>
                                            <p className={style.para}>Focusing on user experience to create engaging and easy-to-use mobile
                                                applications.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft11} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>App Maintenance</h6>
                                            <p className={style.para}>Providing ongoing support and updates to ensure your app remains
                                                competitive and functional.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <h4 className={style.head}>Enterprise Software Solutions</h4>
                                <p className={style.para}>Enhance your business operations with our enterprise software solutions. We provide:</p>

                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft12} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Enterprise Resource Planning (ERP)</h6>
                                            <p className={style.para}>Integrating all facets of your business operations into a
                                                single cohesive system.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft13} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Customer Relationship Management (CRM)</h6>
                                            <p className={style.para}>Developing CRM solutions to manage interactions
                                                with current and potential customers.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft14} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Supply Chain Management (SCM)</h6>
                                            <p className={style.para}>Creating software to streamline and optimize your supply
                                                chain processes.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft15} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Business Intelligence (BI)</h6>
                                            <p className={style.para}>Implementing BI tools to analyze data and provide actionable insights
                                                for strategic decision-making.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.image}>
                                <Image src={Images.soft_img4} alt='' fill priority />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.image}>
                                <Image src={Images.soft_img5} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <h4 className={style.head}>Cloud Computing Solutions</h4>
                                <p className={style.para}>Our cloud computing services help businesses leverage the power of the cloud. We offer:</p>

                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft16} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Cloud Migration</h6>
                                            <p className={style.para}>Assisting with the transition of applications and data to cloud environments.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft17} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Cloud Infrastructure Management</h6>
                                            <p className={style.para}>Managing cloud resources to ensure scalability, security, and
                                                cost efficiency.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft18} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Cloud Application Development</h6>
                                            <p className={style.para}>Developing cloud-native applications that take full advantage of
                                                cloud capabilities.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft19} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>DevOps Services</h6>
                                            <p className={style.para}>Implementing DevOps practices to enhance collaboration, improve delivery
                                                speed, and ensure reliable software deployments.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <h4 className={style.head}>Software Maintenance and Support</h4>
                                <p className={style.para}>We provide comprehensive maintenance and support services to keep your software running
                                    smoothly. Our services include:</p>

                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft20} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Regular Updates</h6>
                                            <p className={style.para}>Keeping your software up to date with the latest features and security
                                                patches.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft21} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Performance Monitoring</h6>
                                            <p className={style.para}>Continuously monitoring software performance to identify and resolve
                                                issues proactively.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft22} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>Bug Fixing</h6>
                                            <p className={style.para}>Swiftly addressing any bugs or errors to minimize downtime and disruption.</p>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div className={style.icon}>
                                            <Image src={Images.soft23} alt='' fill priority />
                                        </div>
                                        <div className={style.main}>
                                            <h6 className={style.text}>User Support</h6>
                                            <p className={style.para}>Offering user support to help with any questions or issues that may arise..</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.image}>
                                <Image src={Images.soft_img6} alt='' fill priority />
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
                                <p className={style.para}>Our team comprises seasoned professionals with extensive experience in
                                    various domains of software development.</p>
                            </div>
                        </div>

                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Client-Centric Approach</h4>
                                <p className={style.para}>We prioritize your business needs and work closely with you to deliver
                                    solutions that exceed your expectations.</p>
                            </div>
                        </div>

                        <div className={`${style.border_right} ${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Agile Methodology</h4>
                                <p className={style.para}>We employ agile development practices to ensure flexibility, transparency,
                                    and timely delivery.</p>
                            </div>
                        </div>

                        <div className={`${style.border_bottom} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Quality Assurance</h4>
                                <p className={style.para}>Our rigorous QA processes ensure that the software we deliver is reliable,
                                    secure, and high-performing.</p>
                            </div>
                        </div>

                        <div className={`${style.border} col-lg-3 col-md-3 col-sm-3`}>
                            <div className={style.box}>
                                <h4 className={style.head}>Post Launch Support</h4>
                                <p className={style.para}>We provide ongoing support and maintenance to ensure your software
                                    continues to meet your evolving business needs.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>


            <div className={style.form}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h4 className={style.form_head}>Let&#39;s Build Something Great Together</h4>
                            <p className={style.form_para}>Ready to take your business to the next level with cutting-edge software solutions? Contact us
                                today to discuss your project with our specialists and find out how we can help you achieve your
                                business goals.</p>
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
