
import React from 'react'
import style from '@/components/HomePageComponents/HomeBanner/HomeBanner.module.scss'
import homebanner from '@/assets/images/homebanner.webp'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function HomeBanner() {

    return (

        <div className={style.banner}>
            <div className={style.image}>
                <Image src={homebanner} alt='' fill priority />
            </div>

            <div className={style.content}>
                <div className="row g-0">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                        <h1 className={style.heading}>Creating New Ideas for Your Business</h1>
                        <p className={style.para}>We help businesses get more value for their business.</p>
                        <div className={style.buttons}>
                            <button className={`${style.btn1} btn`}>Let's Connect <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
