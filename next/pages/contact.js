import React, { Component } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import PageTitleArea from "../components/Common/PageTitleArea";
import ContactFormArea from "../components/Contact/ContactFormArea";

import Footer from "../components/Layouts/Footer";
import FreeTrialArea from "../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../components/HomeChatbot/Sticky";

class Contact extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Contact Us"
          pageDescription="Drop us Message for any Query"
        />

        <ContactFormArea />

        <FreeTrialArea />
        <StickyButtons/>
        <Footer />
      </>
    );
  }
}

export default Contact;
