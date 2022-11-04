import React, { useEffect } from "react";
import PageHeader from "../../components/header/PageHeader";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Broker - About Us`;
  }, []);
  return (
    <section className='about'>
      <PageHeader>About Us</PageHeader>
      <div className='block-one'>
        <div className='content'>
          <h2 className='content-title'>ABOUT TRIAD FIRM LTD</h2>
          <h3 className='content-sub-title'>WHO IS TRIAD FIRM LTD COMPANY?</h3>
          <p className='content-paragraph'>
            Triad Firm Ltd is a team of experienced and legally registered
            company in the field of fiduciary management and long-term
            investments. We are a group of the skilled financial professionals
            having a high level of knowledge and long term practice in the
            investment field. We have been working as a private fund since
            several years. Now we have opened our online project offering our
            projects worldwide.
          </p>
          <p className='content-paragraph'>
            Triad Firm Ltd focuses on the usability of forex, crypto and invest
            in real estate and stocks and makes it easy to users who wants to
            get started with investments get in easily.
          </p>
          <p className='content-paragraph'>
            In other words, Triad Firm Ltd offer everyone, who wishes to have
            stable extra earnings in the long term to invest in our Company.
            Once you make a deposit, you will start getting daily interest and
            continue earning until your Investment plan expires. After that you
            can either withdraw your deposit or invest it again,and you also can
            withdraw if you have a minimum of $10 on your balance, to continue
            getting daily interest. The money which we attract through our
            website will be used to increase our current assets and,
            consequently, increase our profit to share it with you as our
            investor.
          </p>
        </div>
      </div>
      <div className='block-two'>
        <div className='content'>
          <h2 className='content-title'>WHO OWNS TRIAD FIRM LTD?</h2>
          <p className='content-paragraph'>
            Triad Firm Ltd is owned by a group of experienced and successful
            financial traders and analyst, who came together with a common goal
            of providing a stable income for individuals, investors from all
            field of works to archeive a system that creates wealth for both
            organizations.
          </p>
          <p className='content-paragraph'>
            Organization founded: RFX, Triad Firm Ltd Company (Triad Firm Ltd)
          </p>
          <p className='content-paragraph'>
            Triad Firm Ltd specializes in providing financial analysis and
            creating analytical tools for the forex market and using them to
            make money for investors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
