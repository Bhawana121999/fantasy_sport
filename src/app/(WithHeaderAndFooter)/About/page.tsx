'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/About/About.module.scss'
import { Images } from '@/assets/utility/Images'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm'




export default function page() {

    return (

        <div className={style.about_sec}>

            <div className={style.first_sec}>
                <div className={style.main_img}>
                    <Image src={Images.about_banner} alt='' fill priority />
                </div>
                <div className={style.content}>
                    <div className="container">
                        <div className="row  justify-content-center">
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex flex-column justify-content-center ">
                                <h1 className={style.heading}>About Us</h1>
                                <p className={style.para}>It takes Years of Hard Work, Passion & Dedication to become
                                    a Brand, know our story from being a name to becoming a Brand.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={style.old_times}>
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className={style.heading}>Reiterating The Good Old Times</h2>
                        <p className={style.para}>Our Experts Are Eager To Turn Your Idea Into A Brilliant Product</p>
                    </div>

                    <p className={style.desc}>The pillars of SVAP InfoTech Private Limited, an IT firm based in
                        Jaipur, was established back in the year 2014 to create a platform that can supervise and
                        fulfill the IT requirements of both emerging and established organizations. We started from
                        scratch with a basic idea of becoming competent enough to analyze, understand and provide
                        the best IT solutions to the seekers. Today, we at SVAP InfoTech are a bunch of creative
                        minds and dedicated hearts who keep their work at the top of their priority list. We
                        strive to fulfill our commitments in a highly professional manner. Also, we do not focus
                        on working as per the requirements directed by the client but with the concept of
                        working with the client. Our working with the client approach helps achieve the results
                        as desired by the client with high satisfaction.</p>

                    <p className={style.title}>Popular brands we worked with</p>

                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={9}
                        loop={true}
                        modules={[Autoplay]}
                        className={`${style.swiper} mySwiper`}
                    >
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand1} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand2} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand3} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand4} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand5} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand6} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand7} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand8} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand9} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand3} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand2} alt='' fill priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide}>
                            <div className={style.image}>
                                <Image src={Images.brand5} alt='' fill priority />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>


            <div className={style.generate}>
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 d-flex flex-column justify-content-center ">
                            <h1 className={style.heading}>We generate outstanding results</h1>
                            <p className={style.para}>Most enterprises have transformed their workingwith our solutions
                                and services</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                            <h6 className={style.number}>500+</h6>
                            <p className={style.desc}>
                                Total Website Developed
                            </p>
                        </div>

                        <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                            <h6 className={style.number}>100+</h6>
                            <p className={style.desc}>
                                Our Clients
                            </p>
                        </div>

                        <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                            <h6 className={style.number}>300+</h6>
                            <p className={style.desc}>
                                Total Number of Employees
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.vision_sec}>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className={style.heading}>Our Vision & Mission</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className={style.card}>
                                <div className={style.image}>
                                    <Image src={Images.order} alt='' fill priority />
                                </div>
                                <div className={style.content}>
                                    <h6 className={style.heading}>Online ordering, Easy payments</h6>
                                    <p className={style.para}>We at SVAP InfoTech work with a vision of giving Credibility, Innovation, Quality, and Trust
                                        a whole new definition. We look at achieving goals with our actions rather than words.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className={style.card}>
                                <div className={style.image}>
                                    <Image src={Images.mission} alt='' fill priority />
                                </div>
                                <div className={style.content}>
                                    <h6 className={style.heading}>Our Mission</h6>
                                    <p className={style.para}>To create a one-stop platform that can seamlessly connect with the clients
                                        and help them get their dreams turned to a reality. We strive to become an easily-accessible platform
                                        that can provide a solution to all your IT needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.recent_work}>
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-7 col-md-8 col-sm-8 d-flex flex-column justify-content-center">
                            <h1 className={style.heading}>Few Of Our Recent Favorite Projects</h1>
                            <p className={style.para}>Most enterprises have transformed their working <br />with our solutions and services</p>
                        </div>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        navigation={true}
                        slidesPerView={3}
                        loop={true}
                        modules={[Navigation]}
                        className={`${style.swiper1} myswiper2`}
                    >
                        <SwiperSlide>
                            <div className={style.work_card}>
                                <div className={style.main_content}>
                                    <div className={style.top_sec}>
                                        <div className={style.images}>
                                            <Image src={Images.team} alt='' fill priority />
                                        </div>
                                        <h6 className={style.head1}>
                                            My Team11
                                        </h6>
                                    </div>

                                    <div className={style.work_img}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>

                                <div className={style.info}>
                                    <p className={style.para}>
                                        MyTeam11 is one of the leading fantasy sports websites in India. It is one of the largest most trusted fantasy sports applications. They provide five
                                    </p>
                                    <button className={`${style.btn2} btn`}>View Details</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={style.work_card}>
                                <div className={style.main_content}>
                                    <div className={style.top_sec}>
                                        <div className={style.images}>
                                            <Image src={Images.team} alt='' fill priority />
                                        </div>
                                        <h6 className={style.head1}>
                                            My Team11
                                        </h6>
                                    </div>

                                    <div className={style.work_img}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>

                                <div className={style.info}>
                                    <p className={style.para}>
                                        MyTeam11 is one of the leading fantasy sports websites in India. It is one of the largest most trusted fantasy sports applications. They provide five
                                    </p>
                                    <button className={`${style.btn2} btn`}>View Details</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={style.work_card}>
                                <div className={style.main_content}>
                                    <div className={style.top_sec}>
                                        <div className={style.images}>
                                            <Image src={Images.team} alt='' fill priority />
                                        </div>
                                        <h6 className={style.head1}>
                                            My Team11
                                        </h6>
                                    </div>

                                    <div className={style.work_img}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>

                                <div className={style.info}>
                                    <p className={style.para}>
                                        MyTeam11 is one of the leading fantasy sports websites in India. It is one of the largest most trusted fantasy sports applications. They provide five
                                    </p>
                                    <button className={`${style.btn2} btn`}>View Details</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={style.work_card}>
                                <div className={style.main_content}>
                                    <div className={style.top_sec}>
                                        <div className={style.images}>
                                            <Image src={Images.team} alt='' fill priority />
                                        </div>
                                        <h6 className={style.head1}>
                                            My Team11
                                        </h6>
                                    </div>

                                    <div className={style.work_img}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>

                                <div className={style.info}>
                                    <p className={style.para}>
                                        MyTeam11 is one of the leading fantasy sports websites in India. It is one of the largest most trusted fantasy sports applications. They provide five
                                    </p>
                                    <button className={`${style.btn2} btn`}>View Details</button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={style.work_card}>
                                <div className={style.main_content}>
                                    <div className={style.top_sec}>
                                        <div className={style.images}>
                                            <Image src={Images.team} alt='' fill priority />
                                        </div>
                                        <h6 className={style.head1}>
                                            My Team11
                                        </h6>
                                    </div>

                                    <div className={style.work_img}>
                                        <Image src={Images.work1} alt='' fill priority />
                                    </div>
                                </div>

                                <div className={style.info}>
                                    <p className={style.para}>
                                        MyTeam11 is one of the leading fantasy sports websites in India. It is one of the largest most trusted fantasy sports applications. They provide five
                                    </p>
                                    <button className={`${style.btn2} btn`}>View Details</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <div className={style.our_client}>
                <div className="container">
                    <div className={`row ${style.contents}`}>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <h3 className={style.head}>What Our Client Says</h3>
                            <p className={style.para}>Hear from our clients! Read their stories and experiences in partnering with us for their financial needs.</p>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className={`myswiper3 ${style.myswiper}`}
                            >
                                <SwiperSlide>
                                    <div className={style.slide}>
                                        <p className={style.card_head}>
                                            <div className={style.image}>
                                                <Image src={Images.quote} alt='' fill priority />
                                            </div>
                                            Thanks to the fast turn around time and transperant process followed by Arvinder ji and his team we were able to get our requirement of loan met well within time.
                                            Can easily say that the service offered by team "Regards Marketing" was at par excellence.</p>
                                        <h4 className={style.name}>Aditya Jain</h4>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={style.slide}>
                                        <p className={style.card_head}>
                                            <div className={style.image}>
                                                <Image src={Images.quote} alt='' fill priority />
                                            </div>
                                            A truly professional team under the
                                            leadership of Mr Arvinder. Always ready to listen and help you. This is what is known as
                                            job well done with sense of duty and involvement. My heartfelt thanks to all. Almighty bless you all</p>
                                        <h4 className={style.name}>Aditya Bhargava</h4>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={style.slide}>
                                        <p className={style.card_head}>
                                            <div className={style.image}>
                                                <Image src={Images.quote} alt='' fill priority />
                                            </div>
                                            A truly professional team under the
                                            leadership of Mr Arvinder. Always ready to listen and help you. This is what is known as
                                            job well done with sense of duty and involvement. My heartfelt thanks to all. Almighty bless you all</p>
                                        <h4 className={style.name}>Aditya Bhargava</h4>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={style.slide}>
                                        <p className={style.card_head}>
                                            <div className={style.image}>
                                                <Image src={Images.quote} alt='' fill priority />
                                            </div>
                                            Thanks to the fast turn around time and transperant process followed by Arvinder ji and his team we were able to get our requirement of loan met well within time.
                                            Can easily say that the service offered by team "Regards Marketing" was at par excellence.</p>
                                        <h4 className={style.name}>Aditya Jain</h4>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={style.slide}>
                                        <p className={style.card_head}>
                                            <div className={style.image}>
                                                <Image src={Images.quote} alt='' fill priority />
                                            </div>
                                            A truly professional team under the
                                            leadership of Mr Arvinder. Always ready to listen and help you. This is what is known as
                                            job well done with sense of duty and involvement. My heartfelt thanks to all. Almighty bless you all</p>
                                        <h4 className={style.name}>Aditya Bhargava</h4>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={style.slide}>
                                        <p className={style.card_head}>
                                            <div className={style.image}>
                                                <Image src={Images.quote} alt='' fill priority />
                                            </div>
                                            Thanks to the fast turn around time and transperant process followed by Arvinder ji and his team we were able to get our requirement of loan met well within time.
                                            Can easily say that the service offered by team "Regards Marketing" was at par excellence.</p>
                                        <h4 className={style.name}>Aditya Jain</h4>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>

                </div>
            </div>

            <EnquiryForm />
        </div >
    )
}
