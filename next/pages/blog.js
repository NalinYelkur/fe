import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import BlogGrid from '../components/Blog/BlogGrid';
import FreeTrialArea from '../components/HomeChatbot/FreeTrialArea';
import Footer from '../components/Layouts/Footer';
import StickyButtons from '../components/HomeChatbot/Sticky';

class Blog extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <PageTitleArea 
                    pageTitle="Blog" 
                    pageDescription="News and Insights" 
                />

                <BlogGrid />

                <FreeTrialArea />
                <StickyButtons/>
                
                <Footer />
            </>
        );
    }
}

export default Blog;