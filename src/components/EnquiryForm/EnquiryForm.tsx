import React from 'react'
import style from '@/components/EnquiryForm/EnquiryForm.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function EnquiryForm() {

    return (

        <div className={style.form}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className={style.content}>
                            <h1 className={style.heading}>Interested in working</h1>
                            <p className={style.para}>with us? Let's talk and get started</p>

                            <div className={style.inputs}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input type='text' placeholder='Your Name' className={`${style.control} form-control`} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input type='text' placeholder='Company Name' className={`${style.control} form-control`} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input type='email' placeholder='Email Address' className={`${style.control} form-control`} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <input type='text' placeholder='Phone Number' className={`${style.control} form-control`} />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-5">
                                        <textarea placeholder='Write Your Message' className={`${style.control} form-control`} rows={4} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 mt-3">
                                        <button className={`${style.btn2} btn`} >Submit</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className={style.image}>
                            <Image src={Images.form} alt='' fill priority />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
