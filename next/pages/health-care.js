import React, { Component } from "react";
import Link from "next/link";

import NavbarThree from "../components/Layouts/NavbarThree";
import PageTitleArea from "../components/Common/PageTitleArea";
import FreeTrialArea from "../components/HomeChatbot/FreeTrialArea";
import Footer from "../components/Layouts/Footer";
import StickyButtons from "../components/HomeChatbot/Sticky";

const HealthCare = () => {
  return (
    <>
      <NavbarThree />

      <PageTitleArea
        pageTitle="Blog Details"
        // pageDescription="News and Insights"
      />

      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-details-desc">
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="bx bx-time"></i>
                        <Link href="#">
                          <a>Feb 18, 2020</a>
                        </Link>
                      </li>
                      {/* <li>
                        <i className="bx bx-user"></i>
                        <Link href="/blog">
                          <a>Steven Smith</a>
                        </Link>
                      </li> */}
                    </ul>
                  </div>

                  <h2>Role and Importance of Healthcare APIs</h2>

                  <p>
                    APIs are application programming interfaces that lie on top
                    of healthcare systems, databases, and applications. These
                    layers enable these apps to be accessible or repurposed
                    within the organization.
                  </p>
                  <p>
                    Healthcare technology is challenging to grasp. The majority
                    of healthcare firms use a variety of apps, databases, ERPs,
                    and software. Clinics, hospitals, clients, oversight boards,
                    and the more excellent enterprise must all be accommodated
                    by this technology. APIs make it easier for various systems
                    and environments to communicate. They also offer a
                    management and analytics layer to help with the overall
                    management of the digital healthcare ecosystem.
                  </p>

                  <div className="article-image">
                    <img
                      src="/images/blog/blog3.jpg"
                      alt="image"
                      height="20px"
                      width="100%"
                    />
                  </div>

                  <div style={{ marginTop: "100px" }}>
                    <h3>
                      The Advantages of Using APIs in the Healthcare Industry
                    </h3>
                    <p>
                      APIs make interoperability and data interchange in the
                      healthcare industry easier, which is a huge plus. We've
                      come up with a few advantages, which are listed below:
                    </p>

                    {/* <ul className="block-gallery columns-3">
                      <li className="blocks-gallery-item">
                        <figure>
                          <img src="/images/blog/gallery1.jpg" alt="image" />
                        </figure>
                      </li>

                      <li className="blocks-gallery-item">
                        <figure>
                          <img src="/images/blog/gallery2.jpg" alt="image" />
                        </figure>
                      </li>

                      <li className="blocks-gallery-item">
                        <figure>
                          <img src="/images/blog/gallery3.jpg" alt="image" />
                        </figure>
                      </li>
                    </ul> */}

                    <h4 className="mb-0">
                      Improved Information Connectivity on a Single Platform
                    </h4>

                    <p>
                      APIs in the healthcare area allow you to access all
                      health-related data from a single location. At any given
                      time, everyone will have easy access to all information.
                      This implies you'll have constant access to the internet.
                      Did you know that APIs can allow you to access data from
                      many devices for research and analysis? You may reuse this
                      information by using some programs to make it more
                      critical.
                    </p>

                    <h4 className="mb-0">
                      Exponential Growth in Health Sector
                    </h4>

                    <p>
                      The health industry has seen significant developments due
                      to seamless interaction between applications. Because of
                      data sharing, all companies, such as hospitals,
                      pharmaceutical producers, and health insurance companies,
                      may now coordinate. More health-related advancements will
                      result from this information-sharing technology.
                    </p>

                    <h4 className="mb-0">
                      Bring Coordination Between Patients & Doctors
                    </h4>

                    <p>
                      Healthcare APIs aid in the medical application's ability
                      to record all of a patient's details. As a result, doctors
                      can now treat their patients with the utmost care based on
                      their health records. The introduction of API into the
                      health sector has created a slew of new possibilities.
                    </p>
                  </div>
                  <div style={{ marginTop: "100px" }}>
                    <h3>Conclusion</h3>
                    <p>
                      If your health organization hasn't yet used APIs, contact
                      PlugtoChat to improve the experience you provide to your
                      customers and the broader ecosystem, resulting in
                      increased income and growth. We can help businesses turn
                      digital obstacles into competitive advantages and get more
                      out of your API programs.
                    </p>
                  </div>
                </div>
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
};

export default HealthCare;
