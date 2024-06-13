'use client'

import React, { useState } from 'react'
import style from '@/app/(WithHeaderAndFooter)/mlm/mlm.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'
import check from '@/assets/images/check.webp'
import CoonectModal from '@/components/CoonectModal'

export default function page() {

    const [modalShow, setModalShow] = useState(false)

    return (
        <>

            <div className={style.app}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 d-flex flex-column justify-content-center">
                            <h1 className={style.heading}>MLM Software Development</h1>
                            <p className={style.para}>Digitech Uttarakhand provides the best MLM software solution, MLM Superb (Network
                                Marketing Software), designed to manage all the operations essential for running an MLM
                                business.</p>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className={style.image}>
                                <Image src={Images.mlm} alt='' fill priority />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={style.service}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Comprehensive MLM Software Development Services</h2>
                            <p className={style.para}>Elevate Your MLM Business with MLM Superb by Digitech Uttarakhand</p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <div className={style.icon}>
                                    <Image src={check} alt='' fill />
                                </div>
                                <div className={style.paragraph}>
                                    <h2 className={style.heading}>MLM Software Development</h2>
                                    <p className={style.para}>MLM Software is a comprehensive solution for various types of MLM businesses, including Uni-
                                        level, Binary, Board, Matrix, and other MLM Plans. Digitech Uttarakhand is a leading provider of
                                        MLM services for network marketing companies. We develop applications tailored to our clients&#39;
                                        requirements and budgets. Our professional technical team employs the latest technologies
                                        available in the market, aiming for complete client satisfaction.</p>
                                    <p className={style.para}>Digitech Uttarakhand is the best Multi-Level Marketing Software Company in Dehradun, India,
                                        offering MLM Software for Network Marketing businesses in Mumbai, Kolkata, and Pune.</p>

                                    <p className={style.para}>Our MLM Software includes features such as E-Wallet, SMS integration, Web Page Replication,
                                        eCommerce Purchasing Cart, E-Pin, and customized MLM applications.</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.content}>
                                <div className={style.icon}>
                                    <Image src={check} alt='' fill />
                                </div>
                                <div className={style.paragraph}>
                                    <h2 className={style.heading}>MLM Website Development</h2>
                                    <p className={style.para}>Digitech Uttarakhand is the premier MLM Website Development Company in Dehradun, India,
                                        offering MLM Software for Network Marketing businesses in Mumbai, Kolkata, and Pune.</p>
                                    <p className={style.para}>MLM Websites are complete solutions for all types of MLM businesses, including Uni-level,
                                        Binary, Board, Matrix, and other MLM Plans. Digitech Uttarakhand is a leading provider of MLM
                                        Website Services for network marketing companies. We develop applications based on clients&#39;
                                        needs and budgets. Our skilled technical team uses the latest market technologies, ensuring
                                        complete client satisfaction.</p>

                                    <p className={style.para}>Our MLM Website Development services include features like E-Wallet, SMS integration, Web
                                        Page Replication, eCommerce Purchasing Cart, E-Pin, and customized MLM applications.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={style.plan}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2 className={style.heading}>Development of MLM Software for Any Type of Plan</h2>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.boxes}>
                                <div className={style.box}>
                                    <h2 className={style.head}>MLM Career Income Plan</h2>
                                    <p className={style.para}>This plan works exceptionally well for customers with a wide range of robust products.</p>
                                </div>

                                <div className={style.box2}>
                                    <h2 className={style.head}>MLM Generation Income Plan</h2>
                                    <p className={style.para}>This plan is ideal for customers with a diverse product range and can be a self-sufficient plan.</p>
                                </div>

                                <div className={style.box}>
                                    <h2 className={style.head}>MLM Uni-Level Income Plan</h2>
                                    <p className={style.para}>Also known as the Generation Plan, this plan is great for customers with a wide range of robust
                                        products and can function as a self-sufficient plan.</p>
                                </div>

                                <div className={style.box2}>
                                    <h2 className={style.head}>MLM Repurchase Income Plan</h2>
                                    <p className={style.para}>MLM Company assigns specific BV and PV to its products. When an associate
                                        and their team purchase these products, the commission is distributed among all the upline
                                        members.</p>
                                </div>

                                <div className={style.box}>
                                    <h2 className={style.head}>MLM Matrix Income Plan</h2>
                                    <p className={style.para}>A compensation plan with a limited-width structure, usually paid with a unilevel-type payout
                                        system.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className={style.boxes}>
                                <div className={style.box2}>
                                    <h2 className={style.head}>MLM Board Income Plan</h2>
                                    <p className={style.para}>Also known as the Board Plan, this system can have a 1 and 4 board system or 3 level boards.
                                        This unique business plan offers maximum returns.</p>
                                </div>

                                <div className={style.box}>
                                    <h2 className={style.head}>MLM Investment Income Plan</h2>
                                    <p className={style.para}>In this plan, an MLM Company provides a daily percentage return on an associate&#39;s investment,
                                        sometimes offering double the investment schemes.</p>
                                </div>

                                <div className={style.box2}>
                                    <h2 className={style.head}>MLM Binary Income Plan</h2>
                                    <p className={style.para}>This plan is used by MLM companies where members are organized in a tree layout with left
                                        and right subtrees.</p>
                                </div>

                                <div className={style.box}>
                                    <h2 className={style.head}>MLM Daily Binary Income Plan</h2>
                                    <p className={style.para}>Similar to the Binary Income Plan, the main difference is that calculations are done daily rather
                                        than after a longer period.</p>
                                </div>

                                <div className={style.box2}>
                                    <h2 className={style.head}>MLM Australian Binary Income Plan</h2>
                                    <p className={style.para}>Tri-Binary or Australian Binary Plans are very similar. The key difference is that pair matching is
                                        required in tri-Binary plans, whereas no matching is needed in Australian Binary plans.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className={style.form}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-9 col-sm-9 text-center">
                            <h4 className={style.form_head}>Get Started Today</h4>
                            <p className={style.form_para}>Transform your MLM business with MLM Superb by Digitech Uttarakhand. Contact us today to
                                discuss your project requirements. Our team is ready to partner with you and deliver a solution
                                that drives your business forward.</p>
                            <button onClick={() => setModalShow(true)} className={style.btn1}>Let's Talk</button>
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
