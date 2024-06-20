import React from 'react'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import style from '@/app/(WithHeaderAndFooter)/ecommerce/ecommerce.module.scss'

export default function page() {

    return (

        <>
            <div className={style.app}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center">
                            <h1 className={style.heading}>ECommerce Software Development</h1>
                            <p className={style.para}>We are a top eCommerce app development company in India. We create custom
                                eCommerce apps for Android and iOS, supporting clients through the entire development process.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.ecomm} alt='' fill priority />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={style.intro}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.panel} alt='' fill priority />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <h2 className={style.heading}>Transform Your Business with Comprehensive E-Commerce Software Solutions</h2>
                            <p className={style.para}>In the fast-paced digital marketplace, having a robust and scalable e-commerce platform is
                                crucial for business success. At Digitech Uttarakhand, we provide end-to-end e-commerce
                                software development services that help businesses create engaging and secure online stores.
                                Our solutions are tailored to meet your specific needs, ensuring a seamless shopping
                                experience for your customers and driving your business growth.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.feature}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.head}>Key Features of Our ECommerce Solutions</h2>
                            <p className={style.para}>We integrate a range of features to enhance the functionality and user experience of your e-
                                commerce platform</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
