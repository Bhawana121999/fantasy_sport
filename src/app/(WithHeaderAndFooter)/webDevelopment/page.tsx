'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/webDevelopment/webDevelopment.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import { MdNavigateNext } from "react-icons/md";
import CoonectModal from '@/components/CoonectModal'




export default function page() {


    const [modalShow, setModalShow] = useState(false)


    return (

        <>
            <div className={style.banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center">
                            <h1 className={style.heading}>Web Development Services</h1>
                            <p className={style.para}>In today's digital era, having a strong online presence is crucial for
                                success. Your website serves as a powerful tool to showcase your brand, products, and services
                                to potential customers.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.web} alt='' fill priority />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.intro}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.head}>Elevate Your Digital Presence with Our Expert Web Development Services</h2>
                            <p className={style.para}>In today&#39;s digital age, having a robust and appealing online presence
                                is essential for any business looking to thrive. At Digitech Uttarakhand, we specialize in creating
                                bespoke web solutions that not only look great but also deliver exceptional performance and user
                                experience. Our team of skilled developers and designers work collaboratively to turn your vision
                                into reality,ensuring your website stands out in a crowded digital marketplace.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.services}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.head}>Our Services</h2>
                            <p className={style.para}>we combine creativity, innovation, and data-driven insights to deliver exceptional results for your digital marketing campaigns.</p>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.contents}>
                                <div className={style.icons}>
                                    <Image src={Images.service1} alt='' fill priority />
                                </div>
                                <h4 className={style.title}>Frontend Development</h4>
                                <p className={style.para}>Our frontend development services focus on creating visually stunning
                                    and highly interactive user interfaces. Using the latest technologies like HTML5, CSS3, and
                                    JavaScript frameworks such as React and Angular, we bring your designs to life with precision
                                    and flair.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.contents}>
                                <div className={style.icons}>
                                    <Image src={Images.service2} alt='' fill priority />
                                </div>
                                <h4 className={style.title}>Backend Development</h4>
                                <p className={style.para}>Behind every great website is a powerful backend. Our backend development services include
                                    creating robust, scalable, and secure server-side applications. We work with a variety of
                                    technologies, including Node.js, PHP, Python, and Ruby on Rails, to build the backbone of your
                                    website.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.contents}>
                                <div className={style.icons}>
                                    <Image src={Images.service3} alt='' fill priority />
                                </div>
                                <h4 className={style.title}>E-commerce Development</h4>
                                <p className={style.para}>Transform your online store with our comprehensive e-commerce development services. We
                                    specialize in developing custom e-commerce solutions using platforms like Shopify,
                                    WooCommerce, Magento, and custom-built solutions tailored to your unique business needs.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.contents}>
                                <div className={style.icons}>
                                    <Image src={Images.service4} alt='' fill priority />
                                </div>
                                <h4 className={style.title}>Content Management Systems (CMS)</h4>
                                <p className={style.para}>Managing your website&#39;s content should be a breeze. We offer CMS development services that
                                    empower you to update and maintain your site with ease. Whether you prefer WordPress,
                                    Joomla, Drupal, or a custom CMS, we ensure you have full control over your content.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.contents}>
                                <div className={style.icons}>
                                    <Image src={Images.service5} alt='' fill priority />
                                </div>
                                <h4 className={style.title}>API Integration</h4>
                                <p className={style.para}>Seamlessly connect your website with third-party services and applications through our API
                                    integration services. Whether it&#39;s payment gateways, social media platforms, or CRM systems,
                                    we ensure smooth and efficient integrations to enhance your site&#39;s functionality.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.contents}>
                                <div className={style.icons}>
                                    <Image src={Images.service6} alt='' fill priority />
                                </div>
                                <h4 className={style.title}>Maintenance and Support</h4>
                                <p className={style.para}>A website needs regular maintenance to perform at its best. Our maintenance and support
                                    services ensure your site remains secure, up-to-date, and free of issues. From routine updates
                                    to troubleshooting and performance optimization, we&#39;ve got you covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.process}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.head}>Our Process</h2>
                            <p className={style.para}>Our machine learning consultants help you identify business challenges to
                                resolve and find functional solutions by following the 4 step <br /> approach to implementing machine
                                learning solutions.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.process} alt='' fill priority />
                            </div>
                        </div>

                        <div className={`col-lg-7 col-md-7 col-sm-7 ${style.before_content}`}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className={style.box}>
                                        <div className={style.square}><MdNavigateNext /></div>
                                        <div className={style.contents}>
                                            <h4 className={style.title}>Discovery and Planning</h4>
                                            <p className={style.para}>We start by understanding your business, goals, and target audience. Through detailed
                                                discussions and research, we create a comprehensive plan that outlines the project scope,
                                                timelines, and deliverables.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className={style.box}>
                                        <div className={style.square}><MdNavigateNext /></div>
                                        <div className={style.contents}>
                                            <h4 className={style.title}>Design and Prototyping</h4>
                                            <p className={style.para}>Our design team creates visually appealing and user-centric designs. We develop prototypes
                                                and wireframes to give you a clear vision of the final product, allowing for feedback and
                                                adjustments before development begins.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className={style.box}>
                                        <div className={style.square}><MdNavigateNext /></div>
                                        <div className={style.contents}>
                                            <h4 className={style.title}>Development and Testing</h4>
                                            <p className={style.para}>Our developers bring the designs to life, writing clean, efficient code and integrating necessary
                                                functionalities. We ensure thorough testing to guarantee flawless performance of your website
                                                on all devices and browsers.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className={style.box}>
                                        <div className={style.square}><MdNavigateNext /></div>
                                        <div className={style.contents}>
                                            <h4 className={style.title}>Launch and Optimization</h4>
                                            <p className={style.para}>Once the site is ready, we handle the deployment process, ensuring a smooth launch. Post-
                                                launch, we continue to monitor and optimize the site, making necessary adjustments to enhance
                                                performance and user experience.</p>
                                        </div>
                                    </div>
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
                            <h2 className={style.head}>Why Choose Us</h2>
                            <p className={style.para}>Choose Digitech Uttarakhand experience the difference of a dedicated team
                                committed to elevating your online presence and driving<br /> tangible business results.</p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_content}>
                                <h4 className={style.head}>Custom Web Development</h4>
                                <p className={style.para}>Every business is unique, and so are its needs. We provide custom web development services
                                    tailored to meet your specific requirements. Whether you&#39;re looking to build a simple
                                    informational site or a complex e-commerce platform, we&#39;ve got you covered.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_content}>
                                <h4 className={style.head}>Responsive Design</h4>
                                <p className={style.para}>In a world where mobile traffic accounts for more than half of all internet usage, having a
                                    responsive website is no longer optional—it&#39;s a necessity. We design websites that look and
                                    perform beautifully on all devices, ensuring a seamless user experience across desktops,
                                    tablets, and smartphones.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_content}>
                                <h4 className={style.head}>SEO-Friendly Development</h4>
                                <p className={style.para}>A website that can&#39;t be found is like a billboard in the desert. Our development process
                                    incorporates the latest SEO best practices, ensuring your site is easily discoverable by search
                                    engines and positioned to rank well in search results.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_content}>
                                <h4 className={style.head}>User Experience (UX) Optimization</h4>
                                <p className={style.para}>A great website is one that users find easy to navigate and engaging to use. We prioritize UX
                                    optimization in our development process, creating intuitive interfaces and interactive elements
                                    that enhance user satisfaction and drive conversions.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.main_content}>
                                <h4 className={style.head}>Secure and Scalable Solutions</h4>
                                <p className={style.para}>Security and scalability are at the forefront of our development philosophy. We build websites
                                    that are not only secure but also capable of growing with your business. From implementing
                                    robust security measures to designing scalable architectures, we ensure your website can
                                    handle increased traffic and data loads as your business expands.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={style.form}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h4 className={style.form_head}>Get Started Today</h4>
                            <p className={style.form_para}>Ready to take your online presence to the next level? Contact us today to discuss your web
                                development needs. Our team is eager to partner with you and create a website that drives your
                                business forward.</p>
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
