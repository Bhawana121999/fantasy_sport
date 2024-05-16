'use client'

import React, { useState } from 'react'
import style from '@/components/HomePageComponents/AboutCompany/AboutCompany.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import popular1 from '@/assets/images/popular1.webp';
import popular2 from '@/assets/images/popular2.webp';
import popular3 from '@/assets/images/popular3.webp';
import popular4 from '@/assets/images/popular4.webp';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';



export default function AboutCompany() {

  const [brandArr, setBrandArr] = useState([
    {
      img: popular2,
    },
    {
      img: popular3,
    },
    {
      img: popular1,
    },
    {
      img: popular4,
    },
    {
      img: popular2,
    },
    {
      img: popular3,
    },
    {
      img: popular1,
    },
    {
      img: popular4,
    },
    {
      img: popular3,
    },
  ])

  return (

    <div className={style.about_sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h2 className={style.heading}>Develop a strategy that effectively utilizes your funds.</h2>
            <p className={style.para}>Digitech Uttarakhand, founded in 2020, is a forward-thinking organization committed to
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
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className={`mySwiper ${style.swiper}`}
            >
              {
                brandArr && brandArr?.length && brandArr?.map((el, i) => (
                  <SwiperSlide className={style.slide} key={i}>
                    <div className={style.image}>
                      <Image src={el?.img} alt='' fill priority />
                    </div>
                  </SwiperSlide>

                ))
              }

            </Swiper>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
            <div className="row mt-5">

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className={`${style.nav} nav flex-column nav-pills me-3`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button className={`${style.nav_link} nav-link active`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Software Development</button>
                  <button className={`${style.nav_link} nav-link`} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">CRM</button>
                  <button className={`${style.nav_link} nav-link`} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">MLM Software DEvelopment</button>
                  <button className={`${style.nav_link} nav-link`} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Web Development</button>
                  <button className={`${style.nav_link} nav-link`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Mobile App</button>
                  <button className={`${style.nav_link} nav-link`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Ecommerce</button>
                  <button className={`${style.nav_link} nav-link`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Digital Marketing</button>
                </div>
              </div>

              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className={`${style.tab_pane} tab-pane fade show active`} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h2 className={style.heading}>Software Development</h2>
                    <p className={style.para}>Titans India software development services are designed to create custom, scalable, and robust solutions that cater to the unique needs of each client. Our expert team of developers, utilizing the latest technologies and methodologies, collaborates closely with clients to deliver software applications that drive efficiency, innovation, and competitive advantage.</p>
                    <p className={style.head}>Key USPs of our software development services:</p>
                    <ul className={style.list}>
                      <li className={style.item}>Bespoke solutions tailored to individual client requirements</li>
                      <li className={style.item}>Agile development methodologies for rapid and iterative progress</li>
                      <li className={style.item}>Comprehensive quality assurance to ensure high performance and reliability</li>
                      <li className={style.item}>Expert team with in-depth knowledge of the latest technologies and industry trends</li>
                      <li className={style.item}>Seamless integration with existing systems to maximize productivity</li>
                    </ul>
                  </div>
                  <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    ssjkdjsdjasjdajhsbdhasd
                  </div>
                  <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    sjndajsdjsdjsd
                  </div>
                  <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    skdksndasndnasdnasndansd
                  </div>
                </div>
              </div>

            </div>




          </div>
        </div>
      </div>

    </div>

  )
}
