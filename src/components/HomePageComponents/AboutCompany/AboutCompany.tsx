'use client'

import React from 'react'
import style from '@/components/HomePageComponents/AboutCompany/AboutCompany.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import popular from '@/assets/images/popular.webp';
import Image from 'next/image';



export default function AboutCompany() {

  return (

    <div className={style.about_sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h1 className={style.heading}>Develop a strategy that effectively utilizes your funds.</h1>
            <p className={style.para}>Titans India, founded in 2020, is a forward-thinking organization committed to
              delivering state-of-the-art corporate solutions to fuel business expansion and optimize operational
              effectiveness. Our extensive range of IT services encompasses bespoke applications designed to meet
              essential business requirements, spanning Website Design and Development, Digital Marketing, and App
              Development. By prioritizing strategic foresight, substantial value addition, and flexible execution,
              Titans India stands out as the preferred ally for enterprises in search of customized, top-tier
              software solutions.</p>

            <h6 className={style.head}>Popular brands we worked with</h6>

            <Swiper
              navigation={true}
              spaceBetween={20}
              slidesPerView={6}
              className={`mySwiper ${style.swiper}`}
            >
              <SwiperSlide className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
              <SwiperSlide  className={style.slide}>
                <div className={style.image}>
                  <Image src={popular} alt='' fill priority />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

    </div>

  )
}
