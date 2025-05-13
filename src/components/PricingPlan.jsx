import React from 'react';
import '../css/Pricing_Plan.css';

function PricingPlan({ title, description, price, duration, features }) {
    return (
        <>
            <div className='pricing_pan_container'>
                <h1 className='pricing_header'>{title}</h1>
                <div className='pricing_description'>{description}</div>
                <div className='pricing_Box'>
                    <span className="pricing_text">{price}</span>
                    <span className='pricing_duration'> {duration}</span>
                </div>
                <hr class="custom-hr" />
                <div>
                    {features.map((feature, index) => (
                        <div className='pricing_feature' key={index}>
                            <span>
                                <img src='/images/images/fi_4436481.svg' alt="feature-icon" />
                            </span>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            <div
                className='arrow_getstart'
                onClick={() => {
                    window.location.href = 'https://login.styleuai.com/login';
                }}
            >
                <span>Get start</span>
                <span className='Arrow_Div'>
                    <img className='Arrow_img' src='/images/images/Arrow 4.svg' alt='arrow' />
                </span>
            </div>

        </>
    );
}

export default PricingPlan;
