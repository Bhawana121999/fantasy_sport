import React from 'react'
import style from '@/components/HomePageComponents/Solutions/Solutions.module.scss'
import Image from 'next/image'
import card from '@/assets/images/card.webp'
import crm from '@/assets/images/crm.webp'
import travel from '@/assets/images/travel.webp'
import manufacture from '@/assets/images/manufacture.webp'
import shopping from '@/assets/images/shopping.webp'
import medical from '@/assets/images/medical.webp'
import digital from '@/assets/images/digital.webp'
import app from '@/assets/images/app.webp'
import estate from '@/assets/images/estate.webp'
import portal from '@/assets/images/portal.webp'

export default function Solutions() {

    return (

        <div className={style.solutions}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h2 className={style.heading}>Solutions We Deliver</h2>
                        <p className={style.para}>The company delivers enterprise solutions and services using a blend of conventional approaches.</p>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={card} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>Matrimonial App Development</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={crm} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>CRM & ERP Systems</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={travel} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>Travel and Hospitality</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={manufacture} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>MLM Software Development</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={shopping} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>E-Commerce</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={medical} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>Hotel Management Software</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={digital} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>Digital Marketing</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={app} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>Fantasy App Development</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={portal} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>Custom Portal Software</h6>
                        </div>
                    </div>

                    <div className={`${style.col_auto} col-auto`}>
                        <div className={style.content}>
                            <div className={style.bg_color}>
                                <div className={style.image}>
                                    <Image src={estate} alt='' fill priority />
                                </div>
                            </div>
                            <h6 className={style.title}>Accounting & Billing Software</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
