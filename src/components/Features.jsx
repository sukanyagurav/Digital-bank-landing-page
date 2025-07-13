import React from 'react';
import Container from './Container';


const features =[
    {
        title:'Online Banking',
        imgSrc:'/images/icon-online.svg',
        description:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },{
        title:'Simple Budgeting',
        imgSrc:'/images/icon-budgeting.svg',
        description:'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
        title:'Fast Onboarding',
        imgSrc:"/images/icon-onboarding.svg",
        description:'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },{
        title:'Open API',
        imgSrc:"/images/icon-api.svg",
        description:'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
]
const Features = () => {
  return (
    <section className=" bg-gray-100 px-6 pt-28  pb-10 text-center md:text-left">
      <Container>
        <h2 className='text-3xl mb-4'>Why choose Digitalbank? </h2>
        <p className='md:max-w-[50%] text-gray-600'>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.{' '}
        </p>
        <div className='my-16 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
            {
                features.map(feature=>(
                    <div key={feature.title} className='flex flex-col gap-3 items-center md:items-start  ' >
                        <img src={feature.imgSrc} alt={feature.title} className='w-12 h-12'/>
                        <h2 className='text-lg font-semibold'>{feature.title}</h2>
                        <p className='text-gray-600'>{feature.description}</p>
                    </div>
                ))
            }
        </div>
      </Container>
    </section>
  );
};

export default Features;
