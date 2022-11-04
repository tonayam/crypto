import React, { useEffect } from "react";
import PageHeader from "../../components/header/PageHeader";

const AffiliateProgram = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Broker - Affiliate Program`;
  }, []);
  return (
    <section className='affiliate-program'>
      <PageHeader>Affiliate Program</PageHeader>
      <div className='content'>
        <h2 className='content-title'>OUR AFFILIATE PROGRAM</h2>
        <p className='content-paragraph'>
          The company's growth is difficult to imagine without the help of
          numerous customers and partners. Many of them have been cooperated
          with us before and know about our capabilities, they helped us in
          shaping of business strategy and bringing the first investment in
          trust management. Today, any of our clients can be our partner and
          even earn through affiliate link. After registration each user
          receives a unique affiliate link (which contains his username). You
          can use this link for registration of new investors. Just send this
          link to your friend via email. Once your friend clicks a link and
          signs up, he becomes your referral.
        </p>
        <ul className='content-list'>
          <li>
            Every deposit of your referral will bring you a reward in the amount
            of 5% for Referral Registration this works for affiliate investors
            or marketers while normal investors are also paid 5% referral
            commission.
          </li>
        </ul>

        <h3 className='content-sub-title'>HOW TO BE AN AFFILIATE MARKETER</h3>
        <p className='content-paragraph'>
          You have to sign up for any of the packages of your choice to
          instantly become an affiliate marketer. Thereafter, all you need to do
          is to make sure you refer 20+ people within a month to claim your
          reward as the best marketer of the month.
        </p>
        <div className='underline'></div>
      </div>
    </section>
  );
};

export default AffiliateProgram;
