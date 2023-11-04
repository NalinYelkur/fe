import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";
import Footer from "../../components/Layouts/Footer";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Social Communities" />
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>Build and maintain real-time Social Community platforms</h2>
              <p>
                Grow engagement through conversations and enhance social
                community experience on your website and app
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
                    Quick integration with Plugtochat API and Javascript SDK
                  </h2>
                  <p>
                    Nowadays, communities want to share and respond to the
                    latest news as it happens. Plugtochat is an on‑premise
                    installation package solution that adds a social community
                    experience to your website and app.
                  </p>
                  <p>
                    For better retention and more robust engagement build your
                    social &amp; community platform, up and complete with
                    messaging features and integration-friendly capabilities
                    provided in Plugtochat.
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
                    <img src="/images/useCases/social/s4.jpg" alt="image" />
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
                    <img src="/images/useCases/social/s2.jpg" alt="image" />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>Secure private interactions for members</h2>
                  <p>
                    Connect people in group chats, then allow them to build
                    1-on-1 private connections. The real time private direct
                    chat can be integrated into your existing web &amp; mobile
                    app using Plugtochat API SDK.
                  </p>
                  <p>
                    Never let your members miss any conversation, even when they
                    are offline. PlugtoChat notifies the user with an email or
                    SMS notification whenever a message is received. Keep
                    everyone in the loop in real-time.
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

                  <h2>Every Interest Matters. Build Discreet Chat rooms</h2>
                  <p>
                    Provide the growing communities with a place to belong to by
                    allowing them to start conversations that matter. Build
                    group chats, chat rooms for every interest and type of
                    content that like-minded people share. Then grow your
                    community with quality interactions in every conversation
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

              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img src="/images/useCases/social/s3.jpg" alt="image" />
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
                    <img src="/images/useCases/social/s1.jpg" alt="image" />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>
                    Arranging a safe and secure platform for exclusive
                    conversations
                  </h2>
                  <p>
                    With moderation for community managers to freeze channels,
                    mute, ban, or deactivate users, never fear a toxic presence
                    in your community for your in-app or website messaging
                  </p>
                  <p>
                    With automatic or manual moderation tools, profanity
                    filters, and spam flood protection added with GDPR, EU-US
                    Privacy Shield we help you secure your community and defend
                    against toxicity.
                  </p>

                  {/* <Link href="/service-details">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting started titorial
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

                  <h2>
                    Indulge in viral conversations through instant participation
                  </h2>
                  <p>
                    Allow your community members to share any media or chat
                    topics when the impulse strikes them. Plugtochat establishes
                    real-time presence with notifications, typing indicators,
                    group & friend lists like native messaging features
                    providing the communities with the ability to retain users.
                  </p>
                </div>
              </div>

              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img src="/images/useCases/social/s5.png" alt="image" />
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
                    <img src="/images/useCases/social/s6.png" alt="image" />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>Inspiring users to design their custom chat interface</h2>
                  <p>
                    From the dashboard, the user can change the theme of the
                    chatUI. PlugtoChat Themes let you change the core design
                    aspects of the UI with simple CSS properties and make a
                    perfect blend with your app and website.
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
        <FreeTrialArea />
        <StickyButtons />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
