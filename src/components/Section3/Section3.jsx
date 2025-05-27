import React from 'react'
import './Section3.css'
import happy_bites2 from '../../assets/happy_bites2.svg'
import prebiotics from '../../assets/prebiotics_logo.svg'

const Section3 = () => {
    return (
        <div className='section3'>
            <div className="section-top">
                <img src={happy_bites2} alt="" />
                <div className="section-inner">
                    <h1>Improve overall gastrointestinal health for better nutrient absorption</h1>
                    <p>Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
                    </p>
                </div>
            </div>
            <div className="section-buttom">
                <div className="section-inner">
                    <h1>Prebiotics nourish the beneficial gut bacteria, supporting digestive health</h1>
                    <p>Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.</p>
                </div>
                <img src={prebiotics} alt="" />
            </div>

        </div>
    )
}

export default Section3