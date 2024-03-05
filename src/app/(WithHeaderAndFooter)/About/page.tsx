'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/About/About.module.scss'
import { Images } from '@/app/assets/utility/Images'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';




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
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={7}
                        navigation={true}
                        modules={[Autoplay]}
                        className="mySwiper"
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
        </div>
    )
}
