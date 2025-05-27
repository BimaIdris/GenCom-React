import React from 'react'
import './Home.css'
import middle_logo from '../../assets/home_logo.svg'
import real_food from '../../assets/real_food.svg'
import premium_ing from '../../assets/premium_ingredient.svg'
import made_fresh from '../../assets/made_fresh.svg'
import vet_dev from '../../assets/vet_dev.svg'
import guarantee_logo from '../../assets/guarantee_logo.svg'
import paypal_logo from '../../assets/paypal.svg'
import visa_logo from '../../assets/visa.svg'
import mastercard_logo from '../../assets/mastercard.svg'
import apple_pay from '../../assets/apple_pay.svg'
import google_pay from '../../assets/google_pay.svg'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-title">
                <h1>What makes us different<br /> makes us stronger</h1>
            </div>
            <div className="home-middle">
                <div className="middle-left">
                    <div className="middle-content">
                        <img src={real_food} alt="" />
                        <div className="middle-inner">
                            <h2>Real Food</h2>
                            <p>Wholesome recipes for dogs with real meat and veggies.</p>
                        </div>

                    </div>
                    <div className="middle-content">
                        <img src={premium_ing} alt="" />
                        <div className="middle-inner">
                            <h2>Premium Ingredient</h2>
                            <p>Elevating pet care with unmatched safety and quality.</p>
                        </div>

                    </div>
                </div>

                <img src={middle_logo} alt="" />
                <div className="middle-right">
                    <div className="middle-content">
                        <img src={made_fresh} alt="" />
                        <div className="middle-inner">
                            <h2>Made Fresh</h2>
                            <p>We prioritize maintaining the integrity of whole foods and nutrition.</p>
                        </div>

                    </div>
                    <div className="middle-content">
                        <img src={vet_dev} alt="" />
                        <div className="middle-inner">
                            <h2>Vet Development</h2>
                            <p>We raise the bar for dog nutrition, surpassing industry expectations.</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className="home-buttom">
                <div className="home-footer">
                    <h3>Get your dog's healthy meal today!</h3>
                </div>
                
                <div className="home-payment">
                    <img src={guarantee_logo} alt="" />
                    <img src={paypal_logo} alt="" />
                    <img src={visa_logo} alt="" />
                    <img src={mastercard_logo} alt="" />
                    <img src={apple_pay} alt="" />
                    <img src={google_pay} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home