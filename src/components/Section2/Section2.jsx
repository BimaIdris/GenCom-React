import React from 'react'
import './Section2.css'
import happy_bites from '../../assets/happy_bites.svg'

const Section2 = () => {
    return (
        <div className='section2'>
            <div className="section-container">
                <div className="sec-container-left">
                    <div className="sec-container-top">
                        <h1>Nutrition is the foundation for<br /> longer, healthier lives in dogs.</h1>
                        <p>Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.</p>
                    </div>
                    <div className="sec-container-buttom">
                        <h2>Key Points:</h2>
                        <div className="sec-contain-info">
                            <h2>97%</h2>
                            <p>Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</p>
                        </div>
                        <div className="sec-contain-info">
                            <h2>84%</h2>
                            <p>Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p>
                        </div>
                        <div className="sec-contain-info">
                            <h2>92%</h2>
                            <p>Our dog food's high protein and fat digestibility contribute to ideal stool quality.</p>
                        </div>
                    </div>
                    <div className="section-left-bottom">
                        <h3>Get your dog's healthy meal today!</h3>
                    </div>
                </div>
                <div className="sec-container-right">
                    <img src={happy_bites} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section2