
'use client'

import React from 'react'
import Image from 'next/image'
import style from '@/app/(WithHeaderAndFooter)/Contact/Contact.module.scss'
import { Images } from '@/assets/utility/Images'
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa6";
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


export default function page() {

    return (

        <div className={style.contact_sec}>
            <div className={style.first_sec}>
                <div className={style.main_img}>
                    <Image src={Images.contact} alt='' fill priority />
                </div>

                <div className={style.content}>
                    <div className="container">
                        <div className="row  justify-content-center">
                            <div className="col-lg-8 col-md-8 col-sm-8 d-flex flex-column justify-content-center ">
                                <h1 className={style.heading}>Let's get associated</h1>
                                <p className={style.para}>Services That We Deliver Makes Us Dignified as One of The Top App Development Companies Why wait? Let's connect and get started
                                    when an unknown printer Fill in the below form to get along with us! It becomes a lot more amazing when we get together.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={style.loaction}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10 text-center">
                            <div className={style.head_content}>
                                <span className={style.title}>Our Location</span>
                                <h6 className={style.head}>Our Office Address</h6>
                            </div>
                            <p className={style.desc}>Tehri Nagar, Gate No-2, Doon University Road, Dehradun, Uttarakhand - 248001</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="row">
                                <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                                    <div className={style.contact_box}>
                                        <MdOutlineLocalPhone />
                                        <h6 className={style.name}>Make a Call</h6>
                                        <p className={style.para}>Make a call for your general enquiries</p>
                                        <Link href='tel:916398794536' className={style.link}>+91 6398794536</Link>
                                    </div>
                                </div>
                                <div className={`${style.border} col-lg-4 col-md-4 col-sm-4`}>
                                    <div className={style.contact_box}>
                                        <HiOutlineMailOpen />
                                        <h6 className={style.name}>Send a Mail</h6>
                                        <p className={style.para}>Send your mail for general enquiries</p>
                                        <Link href='mailto:digitechuttarakhand@gmail.com' className={style.link}> digitechuttarakhand@gmail.com</Link>
                                    </div>
                                </div>
                                <div className={`${style.border} col-lg-4 col-md-4 col-sm-4 text-center`}>
                                    <div className={style.contact_box}>
                                        <FaRegAddressBook />
                                        <h6 className={style.name}>Address</h6>
                                        <Link href='#' className={style.link}>Tehri Nagar, Gate No-2, Doon University Road, Dehradun, Uttarakhand - 248001</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.form_sec}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className={style.form}>
                                <div className={style.top_content}>
                                    <div className={style.left_side}>
                                        <h6 className={style.title}>Send Your Message</h6>
                                        <p className={style.para}>Please Feel Free to get in touch using the form below.</p>
                                        <p className={style.para}>We’d love to hear for you.</p>
                                    </div>
                                    {/* <div className={style.image}>
                                        <Image src={Images.form_img} alt='' fill priority />
                                    </div> */}
                                </div>

                                <div className="row mt-4">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={style.label}>First Name*</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control type="text" placeholder="Enter First Name" className={style.form_control} />
                                                <AiOutlineUser />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={style.label}>Last Name*</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control type="text" placeholder="Enter Last Name" className={style.form_control} />
                                                <AiOutlineUser />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={style.label}>Mobile Number*</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control type="text" placeholder="Enter Mobile Number" className={style.form_control} />
                                                <MdOutlinePhone />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={style.label}>E-mail*</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control type="text" placeholder="Enter E-mail Address" className={style.form_control} />
                                                <MdOutlineEmail />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className={style.label}>Message</Form.Label>
                                            <div className={style.icon}>
                                                <Form.Control as="textarea" placeholder="Enter your Message" rows={3} className={style.form_control} />
                                            </div>
                                        </Form.Group>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-4 col-sm-4 d-flex flex-row justify-content-center">
                                            <button className={`${style.btn4} btn`}>Submit</button>
                                        </div>
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
