'use client'

import React from 'react'
import style from "@/layout/layout.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { Images } from '@/assets/utility/Images'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdOutlinePhone } from "react-icons/md";
import { FaLocationDot } from 'react-icons/fa6';
import { FiMail } from "react-icons/fi";


export default function Footer() {

  return (

    <div className={style.Footer} id="uparrow">
      <div className='container'>
        <div className='row' >

          <div className="col-xl-3 col-lg-3 col-md-3 d-flex flex-column align-items-center">
            <div className={style.content}>
              <div className={style.image}>
                <Image src={Images.footer_logo} alt='' fill priority />
              </div>
              <p className={style.para}>Digitech Uttarakhand pledges to deliver top-notch solutions as a web and app
                development company, Transforming your dreams into reality. We dedicate our expertise to bring your ideas
                to life by seamlessly blending technology.</p>
            </div>
          </div>

          <div className="col-xl-3  col-lg-3 col-md-3 d-flex flex-column align-items-center">
            <div className={style.footer_links_card}>
              <h5 className={style.heading}>Quick Links</h5>
              <ul className={style.footer_links_list}>
                <li>
                  <Link href="/privacyPolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/term&condition">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/FantasySports">Fantasy App Development</Link>
                </li>
                <li>
                  <Link href="/matrimonial">Matrimonial App Development</Link>
                </li>
                <li>
                  <Link href="">Digital Marketing Services</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 d-flex flex-column align-items-center">
            <div className={style.footer_links_card}>
              <h5 className={style.heading}>About</h5>

              <ul className={style.footer_links_list}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About Us</Link></li>
                {/* <li><Link href="/faqs">FAQ’s</Link></li> */}
                <li><Link href="/Contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 d-flex flex-column align-items-center">
            <div className={style.footer_contact_card}>
              <h5 className={style.heading}>Contact Us</h5>
              <ul className={style.list}>
                <li className={style.item}><Link href='mailto:digitechuttarakhand@gmail.com'><FiMail /> <span>digitechuttarakhand@gmail.com</span></Link></li>
                <li className={style.item}><Link href='tel:916398794536'><MdOutlinePhone /> <span>+91 6398794536</span></Link></li>
                <li className={style.item}><Link href='#'><FaLocationDot /> <span>Tehri Nagar, Gate No-2,
                  Doon University Road, Dehradun, Uttarakhand - 248001</span></Link></li>
              </ul>

              <ul className={style.social_links_list}>
                <li><Link href=""><FaFacebookF /></Link></li>
                <li><Link href=""><FaTwitter /></Link></li>
                <li><Link href=""><FaInstagram /></Link></li>
                <li><Link href=""><FaLinkedin /></Link></li>
              </ul>

            </div>
          </div>

        </div>
      </div>

      <div className="row g-0">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.bottom_bar}>
            © Copyright - 2024 Digitech Uttarakhand. All Rights Reserved.
          </div>
        </div>
      </div>
    </div >


  )
}
