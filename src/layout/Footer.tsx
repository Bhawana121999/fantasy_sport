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
                <Image src={Images.logo} alt='' fill priority />
              </div>
              <p className={style.para}>SVAP Infotech commits the best solutions as a web and app
                development company to make your dream turn into reality. We contribute our efforts
                and make technologies work with your ideas.</p>
            </div>
          </div>

          <div className="col-xl-3  col-lg-3 col-md-3 d-flex flex-column align-items-center">
            <div className={style.footer_links_card}>
              <h5 className={style.heading}>Quick Links</h5>
              <ul className={style.footer_links_list}>
                <li>
                  <Link href="/PrivacyPolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/Cancellation">Refunds Policy</Link>
                </li>
                <li>
                  <Link href="/Cancellation">Cancellation</Link>
                </li>
                <li>
                  <Link href="/TermAndCondition">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 d-flex flex-column align-items-center">
            <div className={style.footer_links_card}>
              <h5 className={style.heading}>About</h5>

              <ul className={style.footer_links_list}>
                <li><Link href="/AboutUs">About Us</Link></li>
                <li><Link href="/Blogs">Blogs</Link></li>
                <li><Link href="/Faq">FAQ’s</Link></li>
                <li><Link href="/Contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 d-flex flex-column align-items-center">
            <div className={style.footer_contact_card}>
              <h5 className={style.heading}>Contact Us</h5>
              <ul className={style.list}>
                <li className={style.item}><Link href='#'><FiMail /> <span>info@abcd.com</span></Link></li>
                <li className={style.item}><Link href='#'><MdOutlinePhone /> <span>+91 8562314589</span></Link></li>
                <li className={style.item}><Link href='#'><FaLocationDot /> <span>Wabi Sabi Stays, Landour,
                  Kulri, near Picture Palace, Mussoorie, Uttarakhand 248179</span></Link></li>
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
            © Copyright - 2024 Titans India. All Rights Reserved.
          </div>
        </div>
      </div>
    </div >


  )
}
