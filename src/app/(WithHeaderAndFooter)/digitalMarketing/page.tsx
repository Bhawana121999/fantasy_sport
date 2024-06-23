'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/digitalMarketing/digitalMarketing.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import check from '@/assets/images/check.webp'
import CoonectModal from '@/components/CoonectModal'

export default function page() {

    const [modalShow, setModalShow] = useState(false)

    return (

        <>
            <div className={style.banner}>
                <div className="row g-0">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className={style.image}>
                            <Image src={Images.digi_banner} alt='' fill priority />
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.intro}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h1 className={style.heading}>Digital Marketing Course in Dehradun: Empower Your Future</h1>
                            <p className={style.para}>Welcome to Digitech Uttarakhand, the premier destination for digital marketing training in
                                Dehradun. Our comprehensive course is designed to equip you with the skills and knowledge
                                needed to thrive in the ever evolving digital landscape. Whether you&#39;re a student, professional,
                                entrepreneur, or service provider, our digital marketing course is tailored to meet your needs.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.choose}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Why Every Individual Should Enroll in a Digital Marketing Course</h2>
                            <p className={style.para}>In today&#39;s digital age, mastering online marketing is essential for success in any field. Here&#39;s
                                why everyone, from<br /> professionals to entrepreneurs, should consider this course</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.image}>
                                    <Image src={Images.digi1} alt='' fill priority />
                                </div>
                                <h4 className={style.head}>Professionals</h4>
                                <p className={style.para}>Enhance your skill set and stay competitive in the job market. Digital marketing
                                    knowledge can open doors to new career opportunities and promotions.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.image}>
                                    <Image src={Images.digi2} alt='' fill priority />
                                </div>
                                <h4 className={style.head}>Entrepreneurs</h4>
                                <p className={style.para}>Learn how to effectively market your business online, reach a wider audience,
                                    and drive sales growth.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className={style.box}>
                                <div className={style.image}>
                                    <Image src={Images.digi3} alt='' fill priority />
                                </div>
                                <h4 className={style.head}>Service Providers</h4>
                                <p className={style.para}>Improve your ability to attract and retain customers by understanding and
                                    leveraging digital marketing strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.about}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>About Our Digital Marketing Course</h2>
                            <p className={style.para}>At Digitech Uttarakhand, we pride ourselves on offering a superior learning experience. Our
                                course covers a wide range of topics, ensuring you gain a deep understanding of the digital
                                marketing ecosystem.</p>
                        </div>
                    </div>


                    <div className="row">

                        <div className={`${style.content} col-auto`}>
                            <h2 className={style.head}>Comprehensive Curriculum</h2>
                            <p className={style.para}>From the basics to advanced strategies, our course covers SEO
                                (Search Engine Optimization), SMO (Social Media Optimization), PPC (Pay Per Click), Ads
                                Expertise, Email Marketing, Content Writing, and more.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <h2 className={style.head}>HandsOn Training</h2>
                            <p className={style.para}>Participate in live projects and apply what you&#39;ve learned in real world
                                scenarios. This practical approach ensures you are jobready upon completion.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <h2 className={style.head}>Expert Instructors</h2>
                            <p className={style.para}>Learn from industry professionals who bring real world experience and
                                insights to the classroom.</p>
                        </div>

                        <div className={`${style.content} col-auto`}>
                            <h2 className={style.head}>Industry Relevant Skills</h2>
                            <p className={style.para}>Our course is designed to keep you updated with the latest trends and
                                techniques in digital marketing, making you a valuable asset in any business field.</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className={style.course}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <h2 className={style.heading}>Opportunities After Completing the Course</h2>
                            <p className={style.para}>Upon completing our digital marketing course, you&#39;ll be well prepared for a variety of roles in the
                                digital marketing domain. The skills you acquire will make you eligible for positions such as:</p>

                            <ul className={style.list}>
                                <li className={style.item}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h2 className={style.head}>SEO Specialist</h2>
                                </li>

                                <li className={style.item}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h2 className={style.head}>Social Media Manager</h2>
                                </li>

                                <li className={style.item}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h2 className={style.head}>PPC Expert</h2>
                                </li>

                                <li className={style.item}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h2 className={style.head}>Content Strategist</h2>
                                </li>

                                <li className={style.item}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h2 className={style.head}>Email Marketing Specialist</h2>
                                </li>

                                <li className={style.item}>
                                    <div className={style.icon}>
                                        <Image src={check} alt='' fill priority />
                                    </div>
                                    <h2 className={style.head}>Digital Marketing Manager</h2>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className={style.image}>
                                <Image src={Images.digi_main} alt='' fill priority />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className={style.form}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h4 className={style.form_head}>Join Us at Digitech Uttarakhand</h4>
                            <p className={style.form_para}>If you&#39;re ready to take your career to the next level, Digitech Uttarakhand is the best place to
                                start. Our digital marketing course in Dehradun offers unparalleled training, handson
                                experience, and the opportunity to work on live projects. Transform your future and stay ahead in the competitive digital world. Enroll now and unlock
                                endless opportunities in the field of digital marketing.</p>

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
