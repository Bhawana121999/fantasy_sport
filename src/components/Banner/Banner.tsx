import React from 'react'
import style from '@/components/Banner/Banner.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Banner() {

  return (

    <div className={style.banner_sec}>
      <div className={style.banner}>
        <Image src={Images.banner2} alt='' fill priority />
      </div>

      <div className={style.content}>
        <div className="row g-0 justify-content-center">
          <div className="col-lg-7 col-md-7 col-sm-7">
            <h1 className={style.heading}>Fantasy Sports App Development Company</h1>
            <p className={style.para}>We have customized and created 50+ fantasy applications with creative solutions Immersive and intuitive fantasy applications backed by eminent technology and technical competence. With hands-on experience of 50+ fantasy applications, our fantasy sports app developers know exactly what goes into building an amazing fantasy app that users love. Get started by sharing your requirements and be assured of receiving a scalable and future-ready solution.</p>

            <div className={style.buttons}>
              <button className={`${style.btn1} btn`}>Start Your Project <FaLongArrowAltRight /></button>
            </div>

          </div>
        </div>

      </div>

      <div className={style.mobile}>
        <div className={style.image}>
          <Image src={Images.app_screen} alt='' fill priority />
        </div>
      </div>

    </div>
  )
}

