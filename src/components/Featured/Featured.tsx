'use client'

import React from 'react'
import style from '@/components/Featured/Featured.module.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Images } from '@/app/assets/utility/Images';
import Image from 'next/image';


export default function Featured() {

    return (

        <div className={style.feature_sec}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <h1 className={style.heading}>Fantasy Sports App Development Features</h1>
                        <p className={style.para}>Learn about the most essential ones and some advanced ones too from user and admin perspectives. Make notes of the same so you don’t forget while discussing project requirements with a fantasy sports app development company.</p>
                    </div>
                </div>

                <Tabs
                    defaultActiveKey="user"
                    id="uncontrolled-tab-example"
                    className={`${style.tabs} `}
                >
                    <Tab eventKey="user" title="User Panel" className={style.tab}>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user1} alt='' fill priority />
                                        </div>
                                    </div>

                                    <h6 className={style.title}>User Login and Signup</h6>
                                    <p className={style.desc}>One-click login and signup are desirable. Make sure to integrate the social login
                                        option for easy and quick login. Other login options are via phone number and email.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user2} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Paid and Practice contest</h6>
                                    <p className={style.desc}>Practice contests with dummy credits so users can become better at
                                        playing before entering paid contests with real cash.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user3} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Live Score and Updates</h6>
                                    <p className={style.desc}>Real-time access to live match scores along with other insightful
                                        information like expert advice, match previews, team selection ideas, and more.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user4} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Multiple payment methods</h6>
                                    <p className={style.desc}>Restricting users to pay via limited means isn’t a good idea, instead,
                                        empower them to pay through multiple mediums.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user5} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Private Contest</h6>
                                    <p className={style.desc}>Play with an enclosed group option that enables users to create private
                                        groups and contest with their gang, friends, or family members.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user6} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Invite & Earn</h6>
                                    <p className={style.desc}>Refer and earn is an option to attract new users while you reward the
                                        existing ones for referring. Both parties end up winning rewards.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user7} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Quick Withdrawal</h6>
                                    <p className={style.desc}>Withdrawals are quick and simple for verified users. Get a verification
                                        process in place to streamline and fast-forward withdrawals.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user8} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Multiple Leagues</h6>
                                    <p className={style.desc}>A user can participate in multiple leagues and contest multiple games
                                        at once, either with the same team or a different one.</p>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="admin" title="Admin Panel" className={style.tab}>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user1} alt='' fill priority />
                                        </div>
                                    </div>

                                    <h6 className={style.title}>Admin Login</h6>
                                    <p className={style.desc}>One-click login and signup are desirable. Make sure to integrate the social login
                                        option for easy and quick login. Other login options are via phone number and email.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user2} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Admin Dashboard</h6>
                                    <p className={style.desc}>Practice contests with dummy credits so users can become better at
                                        playing before entering paid contests with real cash.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user3} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>User Management</h6>
                                    <p className={style.desc}>Real-time access to live match scores along with other insightful
                                        information like expert advice, match previews, team selection ideas, and more.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user4} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Contest Management</h6>
                                    <p className={style.desc}>Restricting users to pay via limited means isn’t a good idea, instead,
                                        empower them to pay through multiple mediums.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user5} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Reward points Management</h6>
                                    <p className={style.desc}>Play with an enclosed group option that enables users to create private
                                        groups and contest with their gang, friends, or family members.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user6} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Revenue Management</h6>
                                    <p className={style.desc}>Refer and earn is an option to attract new users while you reward the
                                        existing ones for referring. Both parties end up winning rewards.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user7} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Cash Bonus Management</h6>
                                    <p className={style.desc}>Withdrawals are quick and simple for verified users. Get a verification
                                        process in place to streamline and fast-forward withdrawals.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user8} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Bank Withdrawal Request Management</h6>
                                    <p className={style.desc}>A user can participate in multiple leagues and contest multiple games
                                        at once, either with the same team or a different one.</p>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="features" title="Advanced Features" className={style.tab}>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user1} alt='' fill priority />
                                        </div>
                                    </div>

                                    <h6 className={style.title}>2nd Innings Team Creation</h6>
                                    <p className={style.desc}>One-click login and signup are desirable. Make sure to integrate the social login
                                        option for easy and quick login. Other login options are via phone number and email.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user2} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Fully Automated Backend Panel</h6>
                                    <p className={style.desc}>Practice contests with dummy credits so users can become better at
                                        playing before entering paid contests with real cash.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user3} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>VIP Subscription</h6>
                                    <p className={style.desc}>Real-time access to live match scores along with other insightful
                                        information like expert advice, match previews, team selection ideas, and more.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user4} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Full Scorecard</h6>
                                    <p className={style.desc}>Restricting users to pay via limited means isn’t a good idea, instead,
                                        empower them to pay through multiple mediums.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user5} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Advanced Affiliation Program</h6>
                                    <p className={style.desc}>Play with an enclosed group option that enables users to create private
                                        groups and contest with their gang, friends, or family members.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user6} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Commodity Leauge</h6>
                                    <p className={style.desc}>Refer and earn is an option to attract new users while you reward the
                                        existing ones for referring. Both parties end up winning rewards.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user7} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Custom Referal Codel</h6>
                                    <p className={style.desc}>Withdrawals are quick and simple for verified users. Get a verification
                                        process in place to streamline and fast-forward withdrawals.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className={style.content}>
                                    <div className={style.position}>
                                        <div className={style.image}>
                                            <Image src={Images.user8} alt='' fill priority />
                                        </div>
                                    </div>
                                    <h6 className={style.title}>Mail Reminder System</h6>
                                    <p className={style.desc}>A user can participate in multiple leagues and contest multiple games
                                        at once, either with the same team or a different one.</p>
                                </div>
                            </div>
                        </div>
                    </Tab>

                </Tabs>
            </div>
        </div>

    )
}
