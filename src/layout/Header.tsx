'use client'

import React, { useEffect, useState } from 'react'
import style from '@/layout/layout.module.scss'
import Link from 'next/link';
import Image from 'next/image'
import { Images } from '@/assets/utility/Images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LuPhoneCall, LuMail } from "react-icons/lu";
import { HiOutlineSearch } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import Banner from '@/components/Banner/Banner';
import { NavDropdown } from 'react-bootstrap';
import { FaTelegramPlane } from "react-icons/fa";
import CoonectModal from '@/components/CoonectModal';


export default function Header() {

    const [modalShow, setModalShow] = useState(false)

    const handleScroll = () => {
        let header: any = document.getElementById("myheader");
        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div id='myheader' className={style.main_header}>
                <div className={`${style.top_bar} top_bar`}>
                    <div className="container">
                        <div className={style.content}>
                            <Link href='mailto:digitechuttarakhand@gmail.com' className='link'><LuMail /> digitechuttarakhand@gmail.com</Link>
                            <Link href='tel:916398794536' className='link'><LuPhoneCall /> +91 6398794536</Link>
                        </div>
                    </div>
                </div>

                <Navbar expand='lg' className={`${style.header} nav_bar`}>
                    <Container>
                        <Navbar.Brand href="/" className={style.logo}><Image src={Images.logo} alt='' fill priority /></Navbar.Brand>
                        <Navbar.Toggle aria-controls='offcanvasNavbar-expand' />
                        <Navbar.Offcanvas
                            id='offcanvasNavbar-expand'
                            aria-labelledby='offcanvasNavbarLabel-expand'
                            className={style.main}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className={`${style.body} d-flex justify-content-center`}>
                                <Nav className={`${style.nav} justify-content-center pe-3`}>
                                    <Nav.Link href="/" className={`${style.link} item`}>Home</Nav.Link>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Services"
                                        menuVariant="dark"
                                        className={`${style.link} item`}
                                    >
                                        <NavDropdown.Item href="/FantasySports">Fantasy Sports Application</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Software Development</NavDropdown.Item>
                                        <NavDropdown.Item href="/mlm">MLM Software Development</NavDropdown.Item>
                                        <NavDropdown.Item href="/webDevelopment">Web Development</NavDropdown.Item>
                                        <NavDropdown.Item href="/mobileAppDevelopment">Mobile App Development</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Ecommerce</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Digital Marketing</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/About" className={`${style.link} item`}>About</Nav.Link>
                                    <Nav.Link href="/Contact" className={`${style.link} item`}>Contact Us </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>


                            <button onClick={() => setModalShow(true)} className={`${style.btn1} btn`}>Let's Connect <FaTelegramPlane /></button>

                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>

            <CoonectModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}
