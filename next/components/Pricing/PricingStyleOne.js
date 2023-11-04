import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleOne extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabs_item');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByTagName('li');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('current', '');
    }

    document.getElementById(tabNmae).style.display = 'block';
    evt.currentTarget.className += 'current';
  };

  render() {
    return (
      <section className='pricing-area pt-100 pb-70 bg-f4f5fe'>
        <div className='container'>
          <div className='section-title'>
            <h2>Choose the ideal plan for yourself.</h2>
            <p>We Have Everything Covered.</p>
          </div>

          <div className='tab pricing-list-tab'>
            {/* Pricing Tab List */}
            <ul className='tabs'>
              <li
                className='current'
                onClick={(e) => this.openTabSection(e, 'tab1')}
              >
                <span>
                  <i className='bx bxs-calendar-check'></i> Monthly
                </span>
              </li>

              <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                <span>
                  <i className='bx bxs-calendar-check'></i> Yearly
                </span>
              </li>
            </ul>

            <div className='tab_content'>
              <div id='tab1' className='tabs_item'>
                <div className='row'>
                  {/* Single pricing table Free Plan */}
                  <div className='col-lg-3 col-sm-6'>
                    <div
                      className='single-pricing-table left-align'
                      // style={{height:'700px'}}
                    >
                      <div className='pricing-header'>
                        <h3>Free Plan</h3>
                      </div>

                      <div className='price'>
                        <sup>$</sup>0 <sub>/ month</sub>
                      </div>

                      <ul
                        className='pricing-features'
                        // style={{ overflowY: "auto", maxHeight: "500px", height:'480px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - 1,000 MAU
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Each additional MAU $0.04"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Via chat during office hours
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Up to 10 participants
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" 
                                                    title="ptc 'Super Group Chats' support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."
                                                    ></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - 2 months
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Limited conversations and messages
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single pricing table 1 */}
                  <div className='col-lg-3 col-sm-6'>
                    <div
                      className='single-pricing-table left-align'
                      // style={{height:'700px'}}
                    >
                      <div className='pricing-header'>
                        <h3>Basic</h3>
                      </div>

                      <div className='price'>
                        <sup>$</sup>99 <sub>/ month</sub>
                      </div>

                      <ul
                        className='pricing-features'
                        style={{ overflowY: 'auto', maxHeight: '400px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - 10,000 MAU
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Each additional MAU $0.04"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Chatbot interface
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Reply-via-email directly (sync to chat)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Analytics and conversation monitoring
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Mask contact information
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Stop your users from sharing contact information such as email addresses & phone numbers'
                          ></span>
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Via chat during office hours
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Up to 30 participants
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" 
                                                    title="ptc 'Super Group Chats' support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."
                                                    ></span> */}
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - 6 months
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Unlimited conversations and messages
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Webhooks
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots'
                          ></span>
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table 2 */}
                  <div className='col-lg-3 col-sm-6'>
                    <div
                      className='single-pricing-table left-align'
                      // style={{height:'700px'}}
                    >
                      <div className='pricing-header'>
                        <h3>Starter</h3>
                      </div>

                      <div className='price'>
                        <sup>$</sup>199 <sub>/ month</sub>
                      </div>

                      <ul
                        className='pricing-features'
                        style={{ overflowY: 'auto', maxHeight: '400px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - 25,000 MAU
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Each additional MAU $0.03"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Chatbot interface
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Reply-via-email directly (sync to chat)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Analytics and conversation monitoring
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Mask contact information
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Stop your users from sharing contact information such as email addresses & phone numbers'
                          ></span>
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Priority chat & email
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Up to 300 participants
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" 
                                                    title="ptc 'Super Group Chats' support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."
                                                    ></span> */}
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - 12 months
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom (HTML & CSS) notification emails
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom email sender domain
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Real-time message translation
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          In-conversation message search
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Unlimited conversations and messages
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Webhooks
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots'
                          ></span>
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table 3 */}
                  <div className='col-lg-3 col-sm-6 offset-lg-0 offset-sm-3'>
                    <div
                      className='single-pricing-table left-align'
                      // style={{height:'700px'}}
                    >
                      <div className='pricing-header'>
                        <h3>Professional</h3>
                      </div>

                      <div className='price'>
                        <sup>Customised</sup>
                      </div>

                      <ul
                        className='pricing-features'
                        style={{ overflowY: 'auto', maxHeight: '400px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - Custom
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Chatbot interface
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Reply-via-email directly (sync to chat)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Analytics and conversation monitoring
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Mask contact information
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Stop your users from sharing contact information such as email addresses & phone numbers'
                          ></span>
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Priority phone, chat & email
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Custom
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Unlimited conversations and messages
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom (HTML & CSS) notification emails
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom email sender domain
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Real-time message translation
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          In-conversation message search
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - Custom
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Webhooks
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots'
                          ></span>
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Domain masking
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Uptime & support guarantees (SLA)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Guaranteed performance under high loads
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Guaranteed at-rest encryption
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Priority access to our roadmap
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Designated Solutions Engineer
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          On-Premise / Private Cloud
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Dedicated Infrastructure
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='tab2' className='tabs_item'>
                <div className='row'>
                  {/* Single pricing table Free Plan */}
                  <div className='col-lg-3 col-sm-6'>
                    <div
                      className='single-pricing-table left-align'
                      // style={{height:'700px'}}
                    >
                      <div className='pricing-header'>
                        <h3>Free Plan</h3>
                      </div>

                      <div className='price'>
                        <sup>$</sup>0 <sub>/ Year</sub>
                      </div>

                      <ul
                        className='pricing-features'
                        // style={{ overflowY: "auto", maxHeight: "500px", height:'480px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - 1,000 MAU
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Each additional MAU $0.04"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Via chat during office hours
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Up to 10 participants
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" 
                                                    title="ptc 'Super Group Chats' support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."
                                                    ></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - 2 months
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Limited conversations and messages
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Single pricing table 4 */}

                  <div className='col-lg-3 col-sm-6'>
                    <div className='single-pricing-table left-align'>
                      <div className='pricing-header'>
                        <h3>Basic</h3>
                      </div>

                      <div className='price'>
                        <sup>$</sup>999 <sub>/ Year</sub>
                      </div>

                      <ul
                        className='pricing-features'
                        style={{ overflowY: 'auto', maxHeight: '400px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - 10,000 MAU
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Each additional MAU $0.04"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Chatbot interface
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Reply-via-email directly (sync to chat)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Analytics and conversation monitoring
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Mask contact information
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Stop your users from sharing contact information such as email addresses & phone numbers'
                          ></span>
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Via chat during office hours
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Up to 30 participants
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" 
                                                    title="ptc 'Super Group Chats' support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."
                                                    ></span> */}
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - 6 months
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Unlimited conversations and messages
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Webhooks
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots'
                          ></span>
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>1999 <sub>/ yearly</sub>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Up to 5 chat operators 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    150 ChatBot Triggers
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    24/7 Live Chat
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Email Integration
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Messenger Integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Info
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Mobile + Desktop Apps
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Quick Responses 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Drag & Drop Widgets
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Notes <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Google Analytics
                                                </li>
                                            </ul>

                                            <div className="btn-box">
                                                <Link href="/login">
                                                    <a className="default-btn">
                                                        <i className="bx bxs-hot"></i> 
                                                        Try It Free Now <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> */}

                  {/* Single pricing table 5 */}
                  <div className='col-lg-3 col-sm-6'>
                    <div className='single-pricing-table left-align'>
                      <div className='pricing-header'>
                        <h3>Starter</h3>
                      </div>

                      <div className='price'>
                        <sup>$</sup>1999 <sub>/ Year</sub>
                      </div>

                      <ul
                        className='pricing-features'
                        style={{ overflowY: 'auto', maxHeight: '400px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - 25,000 MAU
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Each additional MAU $0.03"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Chatbot interface
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Reply-via-email directly (sync to chat)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Analytics and conversation monitoring
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Mask contact information
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Stop your users from sharing contact information such as email addresses & phone numbers'
                          ></span>
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Priority chat & email
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Up to 300 participants
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" 
                                                    title="ptc 'Super Group Chats' support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."
                                                    ></span> */}
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - 12 months
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom (HTML & CSS) notification emails
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom email sender domain
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Real-time message translation
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          In-conversation message search
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Unlimited conversations and messages
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Webhooks
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots'
                          ></span>
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table 6 */}
                  <div className='col-lg-3 col-sm-6 offset-lg-0 offset-sm-3'>
                    <div className='single-pricing-table left-align'>
                      <div className='pricing-header'>
                        <h3>Professional</h3>
                      </div>

                      <div className='price'>
                        <sup>Customised</sup>
                      </div>

                      <ul
                        className='pricing-features'
                        style={{ overflowY: 'auto', maxHeight: '400px' }}
                      >
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Monthly Active Users (MAU) - Custom
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Customizable UI
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Chatbot interface
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Email, SMS, and push notifications
                          {/* <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="SMS messages are charged separately"></span> */}
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Reply-via-email directly (sync to chat)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Analytics and conversation monitoring
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          File transfers & location sharing
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Mask contact information
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Stop your users from sharing contact information such as email addresses & phone numbers'
                          ></span>
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Support - Priority phone, chat & email
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Group chats - Custom
                        </li>

                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Unlimited conversations and messages
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom (HTML & CSS) notification emails
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Custom email sender domain
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Real-time message translation
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          In-conversation message search
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Message retention - Custom
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Webhooks
                          <span
                            className='tooltips bx bxs-info-circle'
                            data-toggle='tooltip'
                            data-placement='right'
                            title='Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots'
                          ></span>
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Domain masking
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Uptime & support guarantees (SLA)
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Guaranteed performance under high loads
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Guaranteed at-rest encryption
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Priority access to our roadmap
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Designated Solutions Engineer
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          On-Premise / Private Cloud
                        </li>
                        <li>
                          <i className='bx bxs-badge-check'></i>
                          Dedicated Infrastructure
                        </li>
                      </ul>

                      <div className='btn-box'>
                        <Link href='/login'>
                          <a className='default-btn'>
                            <i className='bx bxs-hot'></i>
                            Try It Free Now <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingStyleOne;
