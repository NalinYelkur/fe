import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../styles/style.css'
import '../styles/responsive.css'
// import '../node_modules/emoji-mart/dist/';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './demo.css'
import '../styles/globalStyles.scss';

import React from 'react'
import App from 'next/app'
import Head from "next/head"
import Loader from '../components/Shared/Loader'
import GoTop from '../components/Shared/GoTop'
import Script from 'next/script'
import { ToastContainer } from "react-toastify";
import toast from "../components/Toast/Toast";
import "react-toastify/dist/ReactToastify.css";


export default class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>PlugtoChat</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="The Ultimate self-hosted Javascript SDK & Chat API Solution Ever" />
                    <meta name="og:title" property="og:title" content="plugTochat"></meta>
                    <meta name="twitter:card" content="The Ultimate self-hosted Javascript SDK & Chat API Solution Ever"></meta>
                    <meta name="facebook-domain-verification" content="g1b0zdh78xtas4tydn72gbieqn3jof" />
                    <script type="text/javascript" src="https://load.fomo.com/api/v1/3r8nL8cHTCIQRrXTclGECw/load.js" async></script>
                </Head>
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '736330180923564');
          fbq('track', 'PageView');
          `,
                    }}
                />
                {/* <!-- Start of HubSpot Embed Code --> */}
                <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/22359867.js"></script>
                {/* <!-- End of HubSpot Embed Code --> */}




                <Component {...pageProps} />
                <ToastContainer
                    position="top-right"
                    autoClose={8000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    draggable={false}
                    pauseOnVisibilityChange
                    closeOnClick
                    pauseOnHover
                />

                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </>
        );
    }
}