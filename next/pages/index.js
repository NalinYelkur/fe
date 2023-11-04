import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeChatbot/MainBanner';

import ServiceRightImageStyle from '../components/HomeChatbot/ServiceRightImageStyle';
import ServiceLeftImageStyle from '../components/HomeChatbot/ServiceLeftImageStyle';
import WhyChooseUsTwo from '../components/Common/WhyChooseUsTwo';
import Features from '../components/HomeChatbot/Features';
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider';

import FaqContent from '../components/Faq/FaqContent';

import FreeTrialArea from '../components/HomeChatbot/FreeTrialArea';
import Footer from '../components/Layouts/Footer';
import StickyButtons from '../components/HomeChatbot/Sticky';

class IndexChatbot extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />

                <ServiceRightImageStyle />
                <ServiceLeftImageStyle />
                <WhyChooseUsTwo />
                <Features />
                <ClientsFeedbackSlider />

                {/* <FaqContent /> */}
                <FreeTrialArea />
                <StickyButtons/>
                <Footer />
            </>
        );
    }
}

export default IndexChatbot;