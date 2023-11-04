import React, { Component } from 'react';
import Link from 'next/link';
import FunFactsTwo from './FunFactsTwo';
import dynamic from 'next/dynamic';
// const ModalVideo = dynamic(() => import('react-modal-video'), {
//     ssr: false
// });

class WhyChooseUsTwo extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                {/* Popup Modal Video If you want to change the video need to update below videoID */}
                {/* <ModalVideo 
                    channel='custom' 
                    isOpen={this.state.isOpen} 
                    url='/videos/Website Presentation home page video.mp4'
                    onClose={() => this.setState({isOpen: false})} 
                /> */}

                <section className="video-presentation-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Why choose us?</h2>
                        </div>
                        <div className="video-box">
                            <div className="video-container">
                                <video src="/videos/website Presentation home page video.mp4" alt="plugtochatvideo" className="container " autoPlay muted style={{ maxWidth: '1100px', height: 'auto', borderRadius:'40px' }}>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            {/* <video  src="/videos/website Presentation home page video.mp4"  alt=" plugtochatvideo"  /> */}
                            {/* <img src="/images/video-bg2.jpg" className="main-image" alt="image" /> */}

                            {/* <div
                                onClick={e => {e.preventDefault(); this.openModal()}}
                                className="video-btn popup-youtube"
                            > 
                                <i className="bx bx-play"></i>
                            </div>
                         */}
                            {/* Shape Images */}
                            <div className="shape1">
                                <img src="/images/shape/shape1.png" alt="image" />
                            </div>
                            <div className="shape2">
                                <img src="/images/shape/shape2.png" alt="image" />
                            </div>
                            <div className="shape3">
                                <img src="/images/shape/shape3.png" alt="image" />
                            </div>
                            <div className="shape4">
                                <img src="/images/shape/shape4.png" alt="image" />
                            </div>
                            <div className="shape5">
                                <img src="/images/shape/shape5.png" alt="image" />
                            </div>
                            <div className="shape6">
                                <img src="/images/shape/shape6.png" alt="image" />
                            </div>
                        </div>

                        {/* Fun Facts Style Two */}
                        <FunFactsTwo />


                        <div className="contact-cta-box">
                            <h3>Have any questions about us?</h3>
                            <p>Don't hesitate to contact us.</p>

                            <Link href="/contact">
                                <a className="default-btn">
                                    <i className="bx bxs-edit-alt"></i>
                                    Contact Us
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="shape-map1">
                        <img src="/images/map1.png" alt="image" />
                    </div>
                    <div className="shape7">
                        <img src="/images/shape/shape7.png" alt="image" />
                    </div>
                    <div className="shape8">
                        <img src="/images/shape/shape8.png" alt="image" />
                    </div>
                    <div className="shape9">
                        <img src="/images/shape/shape9.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUsTwo;