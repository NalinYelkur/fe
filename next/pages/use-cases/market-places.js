import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";
import Footer from "../../components/Layouts/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Market Place" />
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>Drive more Transactions through chats</h2>
              <p>
                PlugtoChat enables chat between buyers and sellers and improves
                customer support with a pre-built customized live chat API for
                marketplaces
              </p>

              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <a className="default-btn" href="/signup">
                    <i className="bx bxs-hot"></i>
                    Try for free
                    <span></span>
                  </a>
                </div>
                <div>
                  <Link href="/contact">
                    <a className="default-btn">
                      <i className="bx bxs-hot"></i>
                      Talk to an expert
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Image */}
          <div className="shape10">
            <img src="/images/shape/shape10.png" alt="image" />
          </div>
          <div className="shape11">
            <img src="/images/shape/shape7.png" alt="image" />
          </div>
          <div className="shape12">
            <img src="/images/shape/shape11.png" alt="image" />
          </div>
          <div className="shape13">
            <img src="/images/shape/shape12.png" alt="image" />
          </div>
        </section>

        <section className="contact-area ptb-100">
          <div className="container">
            <div className="contact-inner">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="contact-features-list">
                    <h3>Strengthen your marketplace sales with live chat</h3>
                    <p>
                      We help you drive engagement and higher transactions by
                      connecting your marketplace&#39;s buyers and sellers
                      through Real- time chat/interactions, thereby eliminating
                      intermediaries. Integrating chat features into your
                      existing web &amp; mobile app using our pre-built UI,
                      powered by highly secure &amp; scalable Chat API &amp;
                      Javascript SDK, will deliver one-to- one or multi-user
                      chat and propel your business value.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="contact-features-list">
                    <h3>
                      Ensuring secure communications between buyers and sellers
                    </h3>
                    <p>
                      Never miss a sale or end up with someone choosing one of
                      your competitors. It requires a powerful Chat API &amp;
                      Javascript SDK which gives instant answers for the
                      potential customer&#39;s pre-sales questions and guides
                      them to the products. This creates personalized attention
                      and a quality customer experience while improving your
                      brand reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="service-details ptb-100">
          <div className="container">
            <div className="service-details-content">
              <h3>Strengthen your marketplace sales with live chat</h3>

              <p>
                We help you drive engagement and higher transactions by
                connecting your marketplace's buyers and sellers through
                Real-time chat/interactions, thereby eliminating intermediaries.
                Integrating chat features into your existing web & mobile app
                using our pre-build UI, powered by highly secure & scalable Chat
                API & Javascript SDK, will deliver one-to-one or multi-user chat
                propel your business value.
              </p>

              <h4>Ensuring secure communications between buyers and sellers</h4>
              <p>
                Never miss a sale or end up with someone choosing one of your
                competitors. It requires a powerful Chat API & Javascript SDK
                with instant answers for the potential customer's pre-sales
                questions and guides them to the products. This creates
                personalized attention and a quality customer experience while
                improving your brand reputation.
              </p> */}

        {/* <div className="service-details-info">
                <div className="single-info-box">
                  <h4>Client</h4>
                  <span>James Anderson</span>
                </div>

                <div className="single-info-box">
                  <h4>Category</h4>
                  <span>Saas, Marketing</span>
                </div>

                <div className="single-info-box">
                  <h4>Date</h4>
                  <span>February 28, 2020</span>
                </div>

                <div className="single-info-box">
                  <h4>Share</h4>
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-info-box">
                  <Link href="/service-details/#">
                    <a className="default-btn">Live Preview</a>
                  </Link>
                </div>
              </div> */}

        {/* </div>
          </div>
        </div> */}
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>
                Brilliantly connect customers with sellers and product owners
                over a secured platform
              </h2>
              <p>
                Confidence in making a purchase is an essential element for
                buyers. More information about the product helps the buyer to
                build confidence in choosing the right product. With Plugtochat
                integrated on the product page, your potential buyer will get
                the required product assistance and finally purchase their
                desired product through a seamless shopping experience.
              </p>
            </div>
          </div>
        </section>

        <>
          {" "}
          <section className="services-area bg-right-color ptb-100">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="services-content">
                  <div className="content left-content">
                    <div className="icon">
                      {/* <img src="/images/icon1.png" alt="image" /> */}
                    </div>

                    <h2>
                      Real-time Marketplace Chat monitoring options for business
                    </h2>
                    <p>
                      Keeping buyers and sellers happy with a smoothly running
                      marketplace is a challenging task. Interrupted
                      transactions could cost losing users forever. We
                      understand your problems and have provided a chat
                      monitoring feature that tracks every conversation between
                      buyers and sellers.
                    </p>
                    <p>
                      A handy feature integrated to make you proactively handle
                      the issue before a buyer or seller gets around to
                      submitting a ticket.
                    </p>
                    {/* <Link href="/service-details">
                      <a className="default-btn">
                        <i className="bx bxs-spreadsheet"></i>
                        Read More
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
                        src="/images/useCases/marketPlace/marketplace2.jpg"
                        alt="image"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="services-area bg-left-color bg-f4f6fc ptb-100">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="services-image">
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    delay={50}
                    animateOnce={true}
                  >
                    <div className="image">
                      <img src="/images/services/chat2.png" alt="image" />
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="services-content">
                  <div className="content">
                    <div className="icon">
                      <img src="/images/icon1.png" alt="image" />
                    </div>

                    <h2>
                      The best Innovative Chatbot and automations are here to
                      expand
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua. Quis ipsum
                      suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link href="/service-details">
                      <a className="default-btn">
                        <i className="bx bxs-spreadsheet"></i>
                        Learn More
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="free-trial-area ptb-100 bg-f4f5fe">
            <div className="container">
              <div className="free-trial-content">
                <h2>Plugtochat keeps you safe from unlicensed dealers</h2>
                <p>
                  Violating the terms of service, such as spamming buyers or
                  trying to sell illegal goods are some activities we encounter
                  online every time. The direct chat feature helps to identify
                  users who do it.
                </p>
                <p>
                  Developing a direct chat feature from scratch takes a lot of
                  time and resources. Our pre-built chat API and javascript SDK
                  speed up this process, so you're rolling it out within hours.
                </p>
              </div>
            </div>
          </section>
          <section className="faq-area ptb-100">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="faq-accordion">
                    <h2>
                      Pre-built Chat UI for <span>Marketplace</span>
                    </h2>
                    <p>
                      Plugtochat&#39;s Pre-built User Interface helps you build
                      the experience with the UI elements with our SDKs and
                      build the features &amp; extensions you need to create the
                      complete experience. Highly customizable and available for
                      iOS, Android, & Web, they all work together, making
                      cross-platform a breeze. With documentation that's best in
                      class, in-depth tutorials, and demo apps for every
                      platform, you'll swiftly figure out exactly how they work
                    </p>

                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Ready-to-use pop-up, Chatbox and inbox
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Engage and improve your interactions with our chat
                            pop-up. Want to try it? Come chat with us. Try
                            pre-built chatbox and inbox to experience a
                            different type of chat UI
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="b">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Cross-device user interface
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Plugtochat is fully responsive on nearly all mobile
                            phones and computers.
                          </p>
                          <p>
                            Our SDKs are designed to help you build quickly.
                            Available for iOS, Android, & Web, making
                            cross-platform a breeze.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Responsive cross-browser UX
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            With an in-house testing team, we have successfully
                            integrated Plugtochat on nearly all mobile phones
                            and computers. The performance accelerates the
                            User-Centric Communication wheel in real-time across
                            browsers. like Chrome, Safari, Firefox, Edge, and
                            Opera, as well as Internet Explorer 11 and above.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Multi-Language User Interface
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Bringing the native language chat experience through
                            real-time multilingual setup, which translates
                            messages up to 100+ languages, sent and received
                            within the chat screen. For all of your
                            platform&#39;s users, you can change the default
                            language on the dashboard. Also, you can set a
                            language per User Configuration in case you need to
                            support multiple languages for a different user.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <Link href="#"> View all features</Link>
                    </Accordion>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="faq-image">
                    <img src="/images/faq-img1.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>

        {/* <SubscribeStyleTwo /> */}

        {/* <OurLovingClients /> */}
        <FreeTrialArea />
        <StickyButtons />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
