import React from 'react';
import Container from './Container';
import Button from './Button';

const Banner = () => {
  return (
    <section className=" py-18 md:h-[500px] px-6 ">
      <Container classes="flex flex-col-reverse md:flex-row items-center md:justify-between relative z-10 ">
        <div className="justify-self-center text-center md:text-left ">
          <h1 className="-mt-[12rem] md:mt-0 text-4xl md:text-5xl leading-[1.3em]">
            Next generation
            <br /> digital banking
          </h1>
          <p className="my-8 md:max-w-[50%]">
            Your Digitalbank account will be a one-stop-shop for spending,
            saving, budgeting, investing, and much more.{' '}
          </p>
          <Button>Request Invite</Button>
        </div>
        <div className="w-full md:max-w-[55%] md:h-[75vh] relative md:absolute -top-52 right-0">
          <img
            src="/images/image-mockups.png"
            className=" "
          />
          <picture>
            <source
              srcset="/images/bg-intro-desktop.svg"
              media="(min-width:900px)"
            />
            <img
              src="/images/bg-intro-mobile.svg"
              class="absolute w-full -z-1 right-0 top-0"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
