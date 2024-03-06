import React from 'react'
import style from '@/components/Games/Games.module.scss'
import Image from 'next/image'
import { Images } from '@/assets/utility/Images'

export default function Games() {

    return (

        <div className={style.games_sec}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <h1 className={style.heading}>A comprehensive Fantasy Sports App Solution Partner for All Games</h1>
                        <p className={style.para}>We create business-oriented and user-focused apps for all the popular games, including football, cricket, basketball, tennis, hockey, and kabaddi that not only attract users but also generate hefty returns. Share your requirements and leave the rest on us to create, ideate, and strategize.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className={style.card_box}>
                            <div className={style.image}>
                                <Image src={Images.game1} alt='' fill priority />
                            </div>
                            <h6 className={style.title}>Football</h6>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className={style.card_box}>
                            <div className={style.image}>
                                <Image src={Images.game2} alt='' fill priority />
                            </div>
                            <h6 className={style.title}>Football</h6>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className={style.card_box}>
                            <div className={style.image}>
                                <Image src={Images.game3} alt='' fill priority />
                            </div>
                            <h6 className={style.title}>Football</h6>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className={style.card_box}>
                            <div className={style.image}>
                                <Image src={Images.game4} alt='' fill priority />
                            </div>
                            <h6 className={style.title}>Football</h6>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className={style.card_box}>
                            <div className={style.image}>
                                <Image src={Images.game5} alt='' fill priority />
                            </div>
                            <h6 className={style.title}>Football</h6>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className={style.card_box}>
                            <div className={style.image}>
                                <Image src={Images.game6} alt='' fill priority />
                            </div>
                            <h6 className={style.title}>Football</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
