import React from 'react'
import style from '@/app/(WithHeaderAndFooter)/privacyPolicy/privacyPolicy.module.scss'


export default function page() {

    return (

        <>

            <div className={style.privacy}>
                <div className="row g-0">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1 className={style.heading}>Privacy Policy</h1>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 pt-5 pb-5">
                            <p className={style.para}>At <span>Titans India</span>, we display an extensive portfolio of our work for you, so, you can check it out before hiring us.
                                By the way of checking you are able to understand the quality of work we are going to offer and most of the above,
                                we first clear all your doubts and take confirmation to precede the work. If you have any question about our services,
                                work or anything else, you are free to visit our office, mail your query or call us before making payment. We are here
                                to answer all your questions and once you get satisfied, you can take your next step to payment but make sure to
                                contact us prior to making a payment for any of our web designing, development, SEO/SMO, logo designing, domain
                                booking, web hosting services.</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
