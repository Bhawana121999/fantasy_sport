'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/matrimonial/matrimonial.module.scss'
import intro1 from "@/assets/images/intro1.webp"
import Image from 'next/image'
import feature1 from '@/assets/images/feature1.webp'
import feature2 from '@/assets/images/feature2.webp'
import feature3 from '@/assets/images/feature3.webp'
import feature4 from '@/assets/images/feature4.webp'
import feature5 from '@/assets/images/feature5.webp'
import feature6 from '@/assets/images/feature6.webp'
import feature7 from '@/assets/images/feature7.webp'
import feature8 from '@/assets/images/feature8.webp'
import feature9 from '@/assets/images/feature9.webp'
import feature10 from '@/assets/images/feature10.webp'
import feature11 from '@/assets/images/feature11.webp'
import feature12 from '@/assets/images/feature12.webp'
import feature13 from '@/assets/images/feature13.webp'
import advance1 from '@/assets/images/advance1.webp'
import advance2 from '@/assets/images/advance2.webp'
import advance3 from '@/assets/images/advance3.webp'
import advance4 from '@/assets/images/advance4.webp'
import advance5 from '@/assets/images/advance5.webp'
import advance6 from '@/assets/images/advance6.webp'
import advance7 from '@/assets/images/advance7.webp'
import advance8 from '@/assets/images/advance8.webp'
import advance9 from '@/assets/images/advance9.webp'
import admin from '@/assets/images/admin.webp'
import check from '@/assets/images/check.webp'
import CoonectModal from '@/components/CoonectModal'


export default function page() {

    const [modalShow, setModalShow] = useState(false)

    return (

        <>
            <div className={style.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 ">
                            <h1 className={style.heading}>Matrimonial App Development</h1>
                            <p className={style.para}>Being an matrimonial application development company, we offer highly scalable matrimonial solutions for those who want to venture into this business.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.intro}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.image}>
                                <Image src={intro1} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <p className={style.para}>In Hindu culture, marriage is a significant and essential life event. Finding the right partner who
                                is supportive, caring, and loving can be challenging in today&#39;s busy life. Gone are the days when
                                families would search for a suitable match for an eligible bachelor or spinster. With the
                                advancement of technology and the proliferation of applications, online matrimony has become
                                one of the fastest-growing aspects of the digital world.</p>
                            <p className={style.para}>Matrimony apps have revolutionized the concept of marriage, making the process more convenient and
                                engaging. Platforms like Shaadi.com, Sangam.com, and Jeevansaathi.com have transformed matchmaking
                                into a seamless and enjoyable experience.</p>
                            <p className={style.para}>AppSquadz is a renowned and experienced company in matrimonial app development,
                                creating innovative applications that users appreciate. Nowadays, many people prefer to find their
                                match online before meeting in person for a date.</p>
                            <p className={style.para}>For those interested in entering the matrimonial business, we can help you
                                expand your business scope and boost your user base, aligning with your business objectives. Our
                                team of passionate and skilled mobile application developers, UI/UX designers, and other
                                professionals will provide you with an application that drives your business success.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.features}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.head}>Features Of Matrimony Development Solution</h2>
                            <p className={style.para}>We deliver features that maximize user engagement and help your matrimonial business to be loved by customers.</p>
                        </div>

                        <ul className={`${style.nav} nav nav-tabs`} id="myTab" role="tablist">
                            <li className={`${style.item} nav-item`} role="presentation">
                                <button className={`${style.link} nav-link active`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Basic Features</button>
                            </li>
                            <li className={`${style.item} nav-item`} role="presentation">
                                <button className={`${style.link} nav-link`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Advanced Features</button>
                            </li>

                        </ul>

                        <div className={`${style.main_content} tab-content`} id="myTabContent">

                            <div className={`${style.tab_pane} tab-pane fade show active`} id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature1} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>UserName</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature2} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Partner Preference</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature3} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Personal Details</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature4} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Notifications</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature5} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Payment Gateway Integration</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature6} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Login</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature7} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Horoscope</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature8} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Customer Profile Verification</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature9} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Reporting</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature10} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Picture Upload</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature11} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Verification by Contact Number/Email</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature12} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>Profile Management</h4>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box}>
                                            <div className={style.circle}>
                                                <div className={style.image}>
                                                    <Image src={feature13} alt='' fill priority />
                                                </div>
                                            </div>
                                            <h4 className={style.title}>App Program Management</h4>
                                        </div>
                                    </div>
                                </div>
                            </div >

                            <div className={`${style.tab_pane} tab-pane fade`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance1} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>Search and Filter</h4>
                                            <p className={style.para2}>Allows users to narrow down their prospective matches based on personal
                                                preferences and requirements.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance2} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>Save Favorites</h4>
                                            <p className={style.para2}>Users can save profiles they find suitable for easy access later.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance3} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>Chat Integration</h4>
                                            <p className={style.para2}>Enables communication between users through API integration, fostering
                                                comfort and understanding.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance4} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>GPS Integration</h4>
                                            <p className={style.para2}>Allows users to search for matches in their preferred locations or cities.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance5} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>User Blocking Feature</h4>
                                            <p className={style.para2}>Enables users to block profiles that cause unnecessary disturbances.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance6} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>In-app Camera</h4>
                                            <p className={style.para2}>Users can click and share pictures immediately.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance7} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>Push Notifications</h4>
                                            <p className={style.para2}>Keeps users continuously updated.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance8} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>Data Security</h4>
                                            <p className={style.para2}>Ensures user data is secure and protected from hackers.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-3">
                                        <div className={style.box2}>
                                            <div className={style.image2}>
                                                <Image src={advance9} alt='' fill priority />
                                            </div>
                                            <h4 className={style.title2}>Multiple Payments</h4>
                                            <p className={style.para2}>Offers various payment modes such as Braintree, Stripe, PayPal,
                                                Credit/Debit Cards, etc.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div >
                </div >
            </div >


            <div className={style.service}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Offering Matrimonial Web/Mobile App Development Services</h2>
                            <p className={style.para}>We provide comprehensive matrimony app development services to enhance
                                user experience. Our services include</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Application Design</h4>
                                <p className={style.para}>We create market-appropriate designs that appeal to users.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Application Development</h4>
                                <p className={style.para}>Utilizing the latest technologies and trends, we develop applications
                                    that meet your needs.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Application Migration</h4>
                                <p className={style.para}>We assist in moving your application from one environment to another.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Application Management</h4>
                                <p className={style.para}>We manage applications throughout their lifecycle, including
                                    requirements management, software architecture, programming, testing, and maintenance.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Application Modernization</h4>
                                <p className={style.para}>We update aging applications with modern features to create new
                                    business value.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Revamp Existing Application</h4>
                                <p className={style.para}>We enhance the UX of existing apps to improve mobile user experience.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Application Testing</h4>
                                <p className={style.para}>We perform various tests to enhance application quality, reduce costs,
                                    maximize ROI, and save development time.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Application Maintenance</h4>
                                <p className={style.para}>We provide constant updates, modifications, and reassessments to
                                    correct faults or improve performance.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.service_box}>
                                <h4 className={style.head}>Enterprise Matrimonial Application Solutions</h4>
                                <p className={style.para}>We deliver enterprise solutions with critical
                                    features to help you succeed in the market.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={style.admin_panel}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg- 12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Back-End Features (Admin Panel)</h2>
                            <p className={style.para}>The back-end section is designed for website administrators to manage the application
                                effectively. Important back-end features include</p>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className={style.images}>
                                <Image src={admin} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5 d-flex flex-col align-items-center">
                            <ul className={style.list}>
                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Location Profiles</h6>
                                </li>

                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Religious Profile</h6>
                                </li>

                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Contact Profile</h6>
                                </li>

                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Work/Career Profile</h6>
                                </li>

                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Personality Profiles</h6>
                                </li>

                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Community Profile</h6>
                                </li>

                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Photograph and Documentation Support</h6>
                                </li>

                                <li className={style.items}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h6 className={style.head}>User Family Profile</h6>
                                </li>

                            </ul>
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
