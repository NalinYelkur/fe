import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";
import Footer from "../../components/Layouts/Footer";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import dynamic from "next/dynamic";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1024: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

class ServiceDetails extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="On Demand Services" />
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>
                Integrate a Reliable, Efficient & Instant chat in your on-demand
                app
              </h2>
              <p>
                Connect your customers and service providers with instant
                real-time chat app
              </p>
              {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <Link href="/contact">
                    <a className="default-btn">
                      <i className="bx bxs-hot"></i>
                      Try PlugtoChat
                      <span></span>
                    </a>
                  </Link>
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
              </div> */}
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

                  <h2>Benefit your customers and service providers</h2>
                  <p>
                    Real-time chat nurtures inter-connections leading to better
                    community retention. Plugtochat SDK &amp; API service
                    platform delivers to you all the necessary features to make
                    it possible to add direct messages… and provide a more
                    efficient and smoother experience between all customers and
                    service providers on your app or website.
                  </p>
                  <p>
                    Integrate Plugtochat and enable quick and reliable
                    communication resulting in a pleasant transaction between
                    both parties
                  </p>

                  {/* <Link href="/service-details">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting starting tutorial
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
                      src="/images/useCases/on-demand-services/ods1.jpg"
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
                      src="/images/useCases/on-demand-services/ods2.jpg"
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

                  <h2>Leave no room for confusion</h2>
                  <p>
                    It&#39;s essential to remain flexible and engaged to provide
                    exemplary service to the customers. Your customers should
                    reach the right on-demand service provider at the right time
                    to get the required services they demand.
                  </p>
                  <p>
                    Give your commuters/ride-booking customers and chauffeurs a
                    place to interact appropriately and understand each other
                    rather than leading to endless amounts of confusion and
                    frustration bubble up. Enable them to share information, get
                    quick responses, and collaborate to reach their destination
                    on time.
                  </p>
                  <p>
                    Without waiting on emails or phone calls, empower service
                    agents to reach out to their customers for a quick question
                    or to discuss their locations.
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

                  <h2>Deliver vital information at the Speed of on-demand</h2>
                  <p>
                    It is essential for chauffeurs, couriers, handypersons, and
                    other service providers to have an effective instant
                    communication chat and remove complexity to reduce delays.
                    Even offline, they will get push notifications, thus keeping
                    every conversation alive & intact.
                  </p>
                  <p>
                    Once you allow the PlugtoChat SDK to integrate chat features
                    into your existing web &amp; mobile app, it will deliver
                    user-to-user chats and maintain rapid-fire-response chat
                    messaging streams.
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
                      src="/images/useCases/on-demand-services/ods3.jpg"
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
                      src="/images/useCases/on-demand-services/ods4.jpg"
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
                    Ameliorate your brand value with excellent customer
                    retention
                  </h2>
                  <p>
                    Provide custom notifications and communication data and let
                    the customers get the best booking and delivery experience,
                    and allow them to foster loyalty on your platform.
                  </p>
                  <p>
                    Plugtochat's SDK gives you the tools to effortlessly
                    implement a real-time messaging platform with which your
                    users are familiar. Elevate compelling and safe brand
                    experiences with chat moderation, automatic profanity
                    filters, and more features, and increase business retention.
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

        <section className="faq-area ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="faq-accordion">
                  <h2>
                    Pre-built Chat UI for
                    <span> On-Demand Services</span>
                  </h2>
                  <p>
                    Plugtochat&#39;s Pre-built User Interface helps you create a
                    complete experience with the UI elements combined with
                    features and extensions using our SDKs. Highly customizable
                    and available for iOS, Android, & Web, they all work
                    together, making cross-platform a breeze. With documentation
                    that's best in class, in-depth tutorials, and demo apps for
                    every platform, you'll swiftly figure out exactly how they
                    work.
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
                          pre-built chatbox and inbox to experience a different
                          type of chat UI
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
                          phones and computers. Our SDKs are designed to help
                          you build quickly. Available for iOS, Android, &amp;
                          Web, making cross- platform a cakewalk.
                        </p>
                        <p>
                          With Plugtochat, configure your platform to send an
                          email or SMS and deliver every communication detail
                          efficiently while ensuring direct and speedy delivery.
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
                          integrated Plugtochat on nearly all mobile phones and
                          computers. The performance accelerates the
                          User-Centric Communication wheel in real-time across
                          browsers like Chrome, Safari, Firefox, Edge, and
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
                          real-time multilingual setup which translates messages
                          up to 100+ languages sent and received within the chat
                          screen. For all of your platform's users, you can
                          change the default language on the dashboard. Also,
                          you can set a language per User Configuration in case
                          you need to support multiple languages for a different
                          user.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <Link href="#"> View all features</Link>
                  </Accordion>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="faq-image">
                  <img
                    src="/images/useCases/on-demand-services/ondemandservicves.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FreeTrialArea />
        <StickyButtons />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
