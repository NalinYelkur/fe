import React, { Component } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import PageTitleArea from "../components/Common/PageTitleArea";
import PricingStyleOne from "../components/Pricing/PricingStyleOne";
import FaqContent from "../components/Faq/FaqContent";

import Footer from "../components/Layouts/Footer";

import FreeTrialArea from "../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../components/HomeChatbot/Sticky";

class Pricing extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Transparent Pricing"
          pageDescription="Borderless account pricing"
        />

        <PricingStyleOne />

        <div className="section-title pt-100">
          <h2>Frequently Asked Questions</h2>
          <p>Get to know about PlugtoChat</p>
        </div>

        <FaqContent />

        <FreeTrialArea />
        <StickyButtons/>

        <Footer />
      </>
    );
  }
}

export default Pricing;
