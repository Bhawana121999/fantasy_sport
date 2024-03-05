'use client'

import React, { useState } from 'react'
import style from '@/components/AppsLoved/AppsLoved.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Images } from '@/app/assets/utility/Images';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io"

export default function AppsLoved() {

    return (

        <div className={style.app_sec}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <h1 className={style.heading}>Fantasy Sports Apps Loved by Users Around the World</h1>
                        <p className={style.para}>Highly engaging and interactive apps you can’t resist using. All of them have been developed taking care of clients’ distinguishing requirements, next-gen features, modern architecture, and technology for a seamless user experience.</p>
                    </div>
                </div>
            </div>

            <div className={style.swiper}>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="myswiper1">

                    <SwiperSlide>
                        <div className={style.slide}>
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className={style.bg_color}>
                                        <div className={style.image}>
                                            <Image src={Images.apps1} alt='' fill priority />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-4 d-flex flex-column justify-content-center">
                                    <div className={style.main_content}>

                                        <div className={style.top_sec}>
                                            <div className={style.team_img}>
                                                <Image src={Images.team} alt='' fill priority />
                                            </div>
                                            <div className={style.title}>
                                                <h6 className={style.head}>MyTeam11</h6>
                                                <p className={style.desc}>Fantasy Sports App</p>
                                            </div>
                                        </div>

                                        <p className={style.middle_sec}>
                                            MyTeam11 is India’s most trusted fantasy sports game platform 2nd largest in India for
                                            fans to play online fantasy games using their sports skills and knowledge. MyTeam11 is
                                            an Indian based fantasy sports organization, offering 9 major sports to fantasy players.
                                        </p>

                                        <ul className={style.list}>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.android} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>Android</h6>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.apple} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>iOS</h6>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.website} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>Website</h6>
                                            </li>
                                        </ul>

                                        <Link href='' className={`${style.btn1} btn`}>VIEW DETAIL <IoIosArrowForward /></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={style.slide}>
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className={style.bg_color}>
                                        <div className={style.image}>
                                            <Image src={Images.apps1} alt='' fill priority />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-4 d-flex flex-column justify-content-center">
                                    <div className={style.main_content}>

                                        <div className={style.top_sec}>
                                            <div className={style.team_img}>
                                                <Image src={Images.team} alt='' fill priority />
                                            </div>
                                            <div className={style.title}>
                                                <h6 className={style.head}>MyTeam11</h6>
                                                <p className={style.desc}>Fantasy Sports App</p>
                                            </div>
                                        </div>

                                        <p className={style.middle_sec}>
                                            MyTeam11 is India’s most trusted fantasy sports game platform 2nd largest in India for
                                            fans to play online fantasy games using their sports skills and knowledge. MyTeam11 is
                                            an Indian based fantasy sports organization, offering 9 major sports to fantasy players.
                                        </p>

                                        <ul className={style.list}>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.android} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>Android</h6>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.apple} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>iOS</h6>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.website} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>Website</h6>
                                            </li>
                                        </ul>

                                        <Link href='' className={`${style.btn1} btn`}>VIEW DETAIL <IoIosArrowForward /></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={style.slide}>
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5">
                                    <div className={style.bg_color}>
                                        <div className={style.image}>
                                            <Image src={Images.apps1} alt='' fill priority />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-4 d-flex flex-column justify-content-center">
                                    <div className={style.main_content}>

                                        <div className={style.top_sec}>
                                            <div className={style.team_img}>
                                                <Image src={Images.team} alt='' fill priority />
                                            </div>
                                            <div className={style.title}>
                                                <h6 className={style.head}>MyTeam11</h6>
                                                <p className={style.desc}>Fantasy Sports App</p>
                                            </div>
                                        </div>

                                        <p className={style.middle_sec}>
                                            MyTeam11 is India’s most trusted fantasy sports game platform 2nd largest in India for
                                            fans to play online fantasy games using their sports skills and knowledge. MyTeam11 is
                                            an Indian based fantasy sports organization, offering 9 major sports to fantasy players.
                                        </p>

                                        <ul className={style.list}>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.android} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>Android</h6>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.apple} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>iOS</h6>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.content}>
                                                    <div className={style.icon}>
                                                        <Image src={Images.website} alt='' fill priority />
                                                    </div>
                                                </div>
                                                <h6 className={style.text}>Website</h6>
                                            </li>
                                        </ul>

                                        <Link href='' className={`${style.btn1} btn`}>VIEW DETAIL <IoIosArrowForward /></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}
