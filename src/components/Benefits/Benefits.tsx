import React from 'react'
import style from '@/components/Benefits/Benefits.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function Benefits() {

    return (

        <div className={style.benefit_sec}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <h1 className={style.heading}>Additional Benefits</h1>
                        <p className={style.para}>Benefits you experience from Fantasy sports app development</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className={style.image}>
                            <Image src={Images.benefit} alt='' fill priority />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-8 col-sm-8 pt-5">
                        <div className="row pt-5">
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                <div className={style.content1}>
                                    <h6 className={style.title}>Unmatched Popularity</h6>
                                    <p className={style.desc}>Brand awareness to a great extent, increasing the overall profit.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                <div className={style.content2}>
                                    <h6 className={style.title}>Multiplying Revenue</h6>
                                    <p className={style.desc}>Enhancement in the sales and conversion by leaps and bounds</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={style.content3}>
                                    <h6 className={style.title}>Single Sports Junction</h6>
                                    <p className={style.desc}>One-stop solution for multiple sports without switching platforms</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={style.content4}>
                                    <h6 className={style.title}>Maximum User Engagement</h6>
                                    <p className={style.desc}>Grabs more customer attention to the platform and shows a relevant user increase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
