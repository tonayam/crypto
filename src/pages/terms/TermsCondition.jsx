import React, { useEffect } from "react";
import PageHeader from "../../components/header/PageHeader";
import { termsAndConditions } from "../../data/termsList";

const TermsCondition = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Broker - Terms and Conditions`;
  }, []);
  return (
    <section className='terms-conditions'>
      <PageHeader>Terms and Condition</PageHeader>
      <div className='content'>
        <h2 className='content-title'>TERMS AND CONDITIONS</h2>
        <span>(Terms and Conditions, Privacy Policy and Cookies Policy)</span>
        <div className='block'>
          <h3 className='content-sub-title'>
            1. PLEASE READ THE FOLLOWING RULES CAREFULLY BEFORE SIGNING IN.
          </h3>
          <p className='content-paragraph'>
            Triad Firm Ltd is totally different from its competitors trying to
            achieve something special starting with the website design, mining &
            trading platform, and extremely functional. Since first beginning a
            few years ago, Triad Firm Ltd has created a name for itself between
            miners. The system is magnificent for miners and traders because of
            its solid mining and trading platform and a diversity of assets to
            mine and trade.
          </p>
          <p className='content-paragraph'>
            Triad Firm Ltd is an online platform which provides the services to
            users registered on the website. The website is accessible via Triad
            Firm Ltd.cc. The user is obliged to direct any statements in
            connection with the Service Provider's activities to this entity and
            contact with the Service Provider is possible via the online form
            available on the website or directly at info@tflc.cc.
          </p>
        </div>
        <div className='block'>
          <h3 className='content-sub-title'>2. SUBJECT OF THE SERVICES</h3>
          <p className='content-paragraph'>
            Users are offered the access to the Services provided within the
            website in accordance with their scope and the possibility to use
            them in compliance herewith and additionally published terms and
            conditions, including in particular the information included on
            subpages of each Service, which include:
          </p>
          <p className='content-paragraph'>
            The <strong>different investment</strong> packages works for the
            designated period of time prior to the investment plan choosen by
            the investor.
          </p>
          <p className='content-paragraph'>
            THE REGISTRATION ON THE WEBSITE DOES NOT REQUIRE ANY FEES.
          </p>
        </div>
        <div className='block'>
          <h3 className='content-sub-title'>
            3. THE REGISTRATION, AGREEMENT AND VERIFICATION
          </h3>
          <ol className='content-list'>
            {termsAndConditions.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>
        <div className='underline'></div>
      </div>
    </section>
  );
};

export default TermsCondition;
