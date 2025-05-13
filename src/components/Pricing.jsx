import React, { useState } from 'react';
import PricingPlan from './PricingPlan';
import '../css/Pricing.css';
import Header from './Header';

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <>
    <Header />
   
    <div className='pracing_plans_maincontainer'>
      <span >
        <div className='Toggle-button'>
          <span
                 className={isMonthly ? 'Monthly_true' : 'Monthly_false'}
                 onClick={() => setIsMonthly(true)}
          >
            Monthly
          </span>
          <span
      className={!isMonthly ? 'Monthly_true' : 'Monthly_false'}
      onClick={() => setIsMonthly(false)}
          >
            Annually
          </span>
        </div>


      </span>
      <div className='pricing_container_1'>
        <span style={{display:"none"}} className='Pricing_Top_Headder'>Pricing</span>
        <span className='Pricing_Seco_Header'>Select the Perfect Plan</span>
        <span className='Pricing_small_Header'>Unlock powerful AI tools for image generation</span>
      </div>

      <div className='pricing_container_2'>
        <div className="price_plan_standard">
          <PricingPlan
            title="Standard"
            description="Lorem ipsum dolor sit amet consectetur. Elementum risus pretium eu pellentesque sed."
            price={isMonthly ? "₹3999" : "₹2222"}
            duration="per month"
            features={[
              "100 Credits/Month",
              "Background Remover",
              "Unlimited Models/Garments",
              "Image Enhancer",
              "Commercial Use"
            ]}
          />
        </div>

        <div className="price_plan_gold">
          <div className='Mostpopular'>MOST POPULAR</div>
          <div>
            <PricingPlan
              title="Gold"
              description="Lorem ipsum dolor sit amet consectetur. Elementum risus pretium eu pellentesque sed."
              price={isMonthly ? "₹11999" : "₹2222"}

              duration="per month"
              features={[
                "100 Credits/Month",
                "All Standard Features",
                "Background Generator (pro)",
                "Seo Content",
                "Influencer Page",
                "25 Design Requests",
                "No Watermark"
              ]}
            />
          </div>
        </div>

        <div className="price_plan_standard">
          <PricingPlan
            title="Business"
            description="Lorem ipsum dolor sit amet consectetur. Elementum risus pretium eu pellentesque sed."
            duration="Custom Pricing"
            features={[
              "Team Managers Everything",
              "Bulk Image Processing",
              "QA Review & Fast Delivery",
              "Dedicated Manager",
              "Commercial Use"
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Pricing;
