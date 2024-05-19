import React from 'react'
import style from '@/components/HomePageComponents/ChooseUs/ChooseUs.module.scss'

export default function ChooseUs() {

    return (

        <div className={style.choose}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <span className={style.span}>Why Choose Us</span>
                        <h2 className={style.heading}>When your ideas mix with our knowledge</h2>
                        <p className={style.para}>Digitech Uttarakhand offers help with making mobile apps and websites. We'll guide you from the start to finish, even after your app is done. Whatever you need for your mobile app, we've got you covered.</p>
                    </div>

                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Requirement Analysis and Gathering</h6>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Planning how things will work and look</h6>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Coding and Development</h6>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Integration with Backend Systems</h6>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Quality Assurance and Testing</h6>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Deployment and Release Management</h6>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Fixing and helping after it's out</h6>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6 className={style.head}>Making it better constantly</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
