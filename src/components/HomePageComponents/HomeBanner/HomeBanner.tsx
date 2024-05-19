'use client'

import React, { useState } from 'react'
import style from '@/components/HomePageComponents/HomeBanner/HomeBanner.module.scss'
import homebanner from '@/assets/images/homebanner.webp'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
import CoonectModal from '@/components/CoonectModal'

export default function HomeBanner() {

    const [modalShow, setModalShow] = useState(false)
    
    return (

        <>
            <div className={style.banner}>
                <div className={style.image}>
                    <Image src={homebanner} alt='' fill priority />
                </div>

                <div className={style.content}>
                    <div className="row g-0">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <h1 className={style.heading}>
                                <span>Your Vision,</span>
                                <span>Our Expertise.</span>
                                <span>Together, We Build Success.</span></h1>
                            <p className={style.para}>Turning Dreams into Digital Reality</p>
                            <div className={style.buttons}>
                                <button  onClick={() => setModalShow(true)} className={`${style.btn1} btn`}>Let's Connect <FaLongArrowAltRight /></button>
                            </div>
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
