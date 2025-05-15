import React from 'react';
import '../css/Pricing_Plan.css';

function PricingPlan({ title, description, price, duration, features,customClass, name,customClass_font,customClass_font_weight }) {
    return (
        <>
            <div className='pricing_pan_container'>
                <h1 className='pricing_header'>{title}</h1>
                <div className='pricing_description'>{description}</div>
                <div className='pricing_Box'>
                    <span className="pricing_text">{price}</span>
                    <span className={`pricing_duration ${customClass}`} style={{ fontFamily: customClass_font, fontWeight: customClass_font_weight }}>
  {duration}
</span>
                </div>
                <hr class="custom-hr" />
                <div>
                    {features.map((feature, index) => (
                        <div className='pricing_feature' key={index}>
                            <span>
                                <img className='Right_tick' src='/images/images/fi_4436481.svg' alt="feature-icon" />
                            </span>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            <div
  className={`arrow_getstart ${customClass || ''}`}
  onClick={() => {
    window.location.href = 'https://login.styleuai.com/login';
  }}
>
  <span>Get {name}</span>
  <span className='Arrow_Div'>
    <img className='Arrow_img' src='/images/images/Arrow 4.svg' alt='arrow' />
  </span>
</div>



        </>
    );
}

export default PricingPlan;
