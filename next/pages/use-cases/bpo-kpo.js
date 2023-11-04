import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";

import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../../components/Layouts/Footer";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="BPO & KPO" />
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>Deliver impressive and efficient customer services</h2>
              <p>
                Uplift your platform with scalability, security, and advanced
                in-app chat messaging.
              </p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <a className="default-btn" href="/signup">
                    <i className="bx bxs-hot"></i>
                    Try PlugtoChat
                    <span></span>
                  </a>
                </div>
                <div>
                  <Link href="/contact">
                    <a className="default-btn">
                      <i className="bx bxs-hot"></i>
                      Talk to An Expert
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-right-color ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-content">
                <div className="content left-content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>
                    Increase content viewability and enhance visitor engagement
                  </h2>
                  <p>
                    Enabling continuous, contextual conversations makes each
                    customer conversation more powerful. Build once using
                    Plugtochat API platform and deploy them across messaging
                    channels at scale to connect with customers. Develop and
                    grow your BPO & KPO from chat to asynchronous messaging
                    experiences and stay associated with customers.
                  </p>

                  <Link href="/signup">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting starting tutorial
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img
                      src="/images/useCases/bpo&kpo/Hioring.png"
                      alt="image"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-left-color bg-f4f6fc ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img
                      src="/images/useCases/bpo&kpo/illustration1.png"
                      alt="image"
                    />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>
                    Integrate your business with PlugtoChat adaptive UI and
                    layout design tools
                  </h2>
                  <p>
                    Customize your chat windows and invitation designs to fit
                    specific business needs. From the dashboard, the user can
                    change the theme of the chatbox. Plugtochat themes let you
                    change the core design aspects of the UI with simple CSS
                    properties.
                  </p>

                  {/* <Link href="/service-details">
                      <a className="default-btn">
                        <i className="bx bxs-spreadsheet"></i>
                        Learn More
                        <span></span>
                      </a>
                    </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-right-color ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-content">
                <div className="content left-content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>Actionable messaging for your enterprise</h2>
                  <p>
                    Resolves issues faster to provide a blended chat experience
                    where service providers and agents collaborate seamlessly.
                    Grow revenue and strengthen loyalty while increasing your
                    customer satisfaction scores.
                  </p>

                  {/* <Link href="/service-details">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting started tutorial
                      <span></span>
                    </a>
                  </Link> */}
                </div>
              </div>

              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img
                      src="/images/useCases/bpo&kpo/remotework.png"
                      alt="image"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-left-color bg-f4f6fc ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img
                      src="/images/useCases/bpo&kpo/virtualevents.png"
                      alt="image"
                    />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>
                    Ensure privacy for your customers through a secured platform
                  </h2>
                  <p>
                    For any successful business, it is necessary to ensure the
                    privacy of customer’s data. Plugtochat APIs are designed in
                    such a way that they can provide a predictable programmatic
                    interface for accessing customers' privacy accounts via a
                    REST API.
                  </p>
                  <p>
                    With APIs' help, the companies can implant reliable and
                    securable omnichannel communication capabilities into their
                    applications. Thus, it can enhance the needs of businesses,
                    customers as well as end-users.
                  </p>

                  <Link href="/signup">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting started tutorial
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FreeTrialArea/>
        <StickyButtons/>

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
