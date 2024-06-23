'use client'

import React, { useState } from 'react'
import style from '@/components/HomePageComponents/AboutCompany/AboutCompany.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import popular1 from '@/assets/images/popular1.webp';
import popular2 from '@/assets/images/popular2.webp';
import popular3 from '@/assets/images/popular3.webp';
import popular4 from '@/assets/images/popular4.webp';
import popular5 from '@/assets/images/popular5.webp';
import popular6 from '@/assets/images/popular6.webp';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { FaLongArrowAltRight } from 'react-icons/fa';
import CoonectModal from '@/components/CoonectModal';



export default function AboutCompany() {

  const [modalShow, setModalShow] = useState(false)

  const [brandArr, setBrandArr] = useState([
    {
      img: popular1,
      appName: 'Whatsapp',
    },
    {
      img: popular2,
      appName: 'Airbnb',
    },
    {
      img: popular3,
      appName: 'Sports Inning',
    },
    {
      img: popular4,
      appName: 'Instragram',
    },
    {
      img: popular5,
      appName: 'YouTube',
    },
    {
      img: popular6,
      appName: 'Uber',
    },
    {
      img: popular3,
      appName: 'Sports Inning',
    },
    {
      img: popular5,
      appName: 'YouTube',
    },
    {
      img: popular1,
      appName: 'Whatsapp',
    },
  ])

  return (

    <>
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
                Digitech Uttarakhand stands out as the preferred ally for enterprises in search of customized, top-tier
                software solutions.</p>

              <Swiper
                navigation={true}
                spaceBetween={20}
                slidesPerView={1}
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
                      <div className={style.main_content}>
                        <div className={style.image}>
                          <Image src={el?.img} alt='' fill priority />
                        </div>
                      </div>
                      <h6 className={style.head}>Are you looking for an App like <span>{el?.appName} ?</span></h6>
                    </SwiperSlide>

                  ))
                }

              </Swiper>

              <div className={style.buttons} >
                <button className={`${style.btn1} btn`} onClick={() => setModalShow(true)}>Let's Connect <FaLongArrowAltRight /></button>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
              <div className="row mt-5">

                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className={`${style.nav} nav flex-column nav-pills me-3`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className={`${style.nav_link} nav-link active`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Software Development</button>
                    <button className={`${style.nav_link} nav-link`} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">MLM Software Development</button>
                    <button className={`${style.nav_link} nav-link`} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Web Development</button>
                    <button className={`${style.nav_link} nav-link`} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Mobile App</button>
                    <button className={`${style.nav_link} nav-link`} id="v-pills-settings-tab1" data-bs-toggle="pill" data-bs-target="#v-pills-settings1" type="button" role="tab" aria-controls="v-pills-settings1" aria-selected="false">Ecommerce</button>
                    <button className={`${style.nav_link} nav-link`} id="v-pills-settings-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-settings2" type="button" role="tab" aria-controls="v-pills-settings2" aria-selected="false">Digital Marketing</button>
                  </div>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className={`${style.tab_pane} tab-pane fade show active`} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <h2 className={style.heading}>Software Development</h2>
                      <p className={style.para}>At Digitech Uttarakhand, we provide comprehensive software development services tailored to
                        meet the unique needs of your business. Our team of experienced developers, designers, and
                        project managers work collaboratively</p>
                      <p className={style.head}>Key USPs of our software development services:</p>
                      <ul className={style.list}>
                        <li className={style.item}>We specialize in creating custom software solutions that align perfectly with your business
                          goals.</li>
                        <li className={style.item}>Our web application development services provide powerful, responsive, and user-friendly web
                          solutions.</li>
                        <li className={style.item}>We design and develop high-quality mobile applications for both iOS and Android platforms.</li>
                        <li className={style.item}>Enhance your business operations with our enterprise software solutions.</li>
                        <li className={style.item}>Our cloud computing services help businesses leverage the power of the cloud.</li>
                        <li className={style.item}>We provide comprehensive maintenance and support services to keep your software running
                          smoothly.</li>
                      </ul>
                    </div>

                    <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <h2 className={style.heading}>MLM Software Development</h2>
                      <p className={style.para}>Digitech Uttarakhand provides the best MLM software solution, MLM Superb (Network
                        Marketing Software), designed to manage all the operations essential for running an MLM
                        business. Our software is crafted with world-class features and takes into account even the
                        smallest needs for future requirements.</p>
                      <p className={style.head}>Key USPs of our MLM Software Development services:</p>
                      <ul className={style.list}>
                        <li className={style.item}>MLM Software is a comprehensive solution for various types of MLM businesses, including Uni-
                          level, Binary, Board, Matrix, and other MLM Plans.</li>
                        <li className={style.item}>Our professional technical team employs the latest technologies
                          available in the market, aiming for complete client satisfaction.</li>
                        <li className={style.item}>We develop applications tailored to our clients&#39;
                          requirements and budgets.</li>
                        <li className={style.item}>Our MLM Website Development services include features like E-Wallet, SMS integration, Web
                          Page Replication, eCommerce Purchasing Cart, E-Pin, and customized MLM applications.</li>
                      </ul>
                    </div>

                    <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                      <h2 className={style.heading}>Web Development</h2>
                      <p className={style.para}>A robust and appealing online presence is essential for any
                        business looking to thrive. we specialize in creating bespoke web
                        solutions that not only look great but also deliver exceptional performance and user experience.
                        Our team of skilled developers and designers work collaboratively to turn your vision into reality,
                        ensuring your website stands out in a crowded digital marketplace.</p>
                      <p className={style.head}>Key USPs of our Web Development services:</p>
                      <ul className={style.list}>
                        <li className={style.item}>We provide custom web development services
                          tailored to meet your specific requirements.</li>
                        <li className={style.item}>We design websites that look and
                          perform beautifully on all devices, ensuring a seamless user experience across desktops,
                          tablets, and smartphones.</li>
                        <li className={style.item}>Our development process
                          incorporates the latest SEO best practices.</li>
                        <li className={style.item}>We prioritize UX
                          optimization in our development process, creating intuitive interfaces and interactive elements.</li>
                        <li className={style.item}>We build websites
                          that are not only secure but also capable of growing with your business.</li>
                      </ul>
                    </div>

                    <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                      <h2 className={style.heading}>Mobile App Development</h2>
                      <p className={style.para}>A mobile app is essential for businesses looking to reach and
                        engage their audience effectively. At Digitech Uttarakhand, we offer comprehensive mobile app
                        development services designed to transform your ideas into powerful, user-friendly applications.
                        Our expert team of developers and designers leverage the latest technologies to create apps
                        that are innovative, scalable, and tailored to your business needs.</p>
                      <p className={style.head}>Key USPs of our Mobile App Development services:</p>
                      <ul className={style.list}>
                        <li className={style.item}>We specialize in creating custom mobile applications that are perfectly aligned with your
                          business objectives.</li>
                        <li className={style.item}>We develop high-performance native mobile applications for both iOS and Android platforms to
                          provide the best user experience.</li>
                        <li className={style.item}>Our cross-platform development services ensure your app performs consistently across multiple
                          platforms, saving time and reducing costs.</li>
                        <li className={style.item}>We offer comprehensive maintenance and support services to ensure your app remains up-to-
                          date and performs optimally.</li>
                      </ul>
                    </div>

                    <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings-tab1">
                      <h2 className={style.heading}>ECommerce Development</h2>
                      <p className={style.para}>we provide end-to-end e-commerce
                        software development services that help businesses create engaging and secure online stores.
                        Our solutions are tailored to meet your specific needs, ensuring a seamless shopping
                        experience for your customers and driving your business growth.</p>
                      <p className={style.head}>Key USPs of our ECommerce Development services:</p>
                      <ul className={style.list}>
                        <li className={style.item}>We specialize in developing custom e-commerce solutions that align perfectly with your
                          business goals and customer needs.</li>
                        <li className={style.item}>We develop responsive and feature-rich e-commerce websites that provide a seamless
                          shopping experience across all devices.</li>
                        <li className={style.item}>We design and develop high-quality mobile e-commerce applications for both iOS and Android
                          platforms.</li>
                        <li className={style.item}>We offer seamless migration services to help you move your existing e-commerce store to a
                          new platform without any data loss or downtime.</li>
                      </ul>
                    </div>

                    <div className={`${style.tab_pane} tab-pane fade`} id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                      <h2 className={style.heading}>Digital Marketing</h2>
                      <p className={style.para}>The premier destination for digital marketing training in
                        Dehradun. Our comprehensive course is designed to equip you with the skills and knowledge
                        needed to thrive in the ever evolving digital landscape. Whether you&#39;re a student, professional,
                        entrepreneur, or service provider, our digital marketing course is tailored to meet your needs.</p>
                      <p className={style.head}>Key USPs of our Digital Marketing:</p>
                      <ul className={style.list}>
                        <li className={style.item}>From the basics to advanced strategies, our course covers SEO
                          (Search Engine Optimization), SMO (Social Media Optimization), PPC (Pay Per Click), Ads
                          Expertise, Email Marketing, Content Writing, and more.</li>
                        <li className={style.item}>Participate in live projects and apply what you&#39;ve learned in real world
                          scenarios. This practical approach ensures you are jobready upon completion.</li>
                        <li className={style.item}>Learn from industry professionals who bring real world experience and
                          insights to the classroom.</li>
                        <li className={style.item}>Our course is designed to keep you updated with the latest trends and
                          techniques in digital marketing, making you a valuable asset in any business field.</li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>




            </div>
          </div>
        </div>

      </div>


      {
        modalShow &&
        <CoonectModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      }
    </>


  )
}
