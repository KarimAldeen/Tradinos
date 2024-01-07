import React from 'react'
import CardSwiper from './SwiperLogo/CardSwiper'
import Visibale from '../../HighOrderComponent/withVisibale'

const HeroSection = () => {
    return (
        <Visibale className='HeroSection'>
          <div className="in_HeroSection">
          <h1>
                TRADINOS
                <br />
                EXPERTS OF MOMENTUM
            </h1>
            <p>
                We are a team of
                <strong>150+ software engineers & designers</strong>
                ready to build & maintain your mobile and web application.

            </p>
            <div className='Buttons'>
                <button>
                    Virw Our Portfolio
                </button>

                <button>
                    Price Your Project
                </button>
            </div>
            <span>
                <div>
                    <h1>+ 9k </h1>
                    <p>Awards Winning</p>
                </div>
                <div>
                    <h1>+ 120 </h1>
                    <p>Awards Winning</p>
                </div>
                <div>
                    <h1>+ 200 </h1>
                    <p>Awards Winning</p>
                </div>
            </span>
            <CardSwiper/>
          </div>
        </Visibale>

    )
}

export default HeroSection