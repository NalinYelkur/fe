import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-31GFW6H636"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-31GFW6H636');
          `,
                        }}
                    />
                </Head>
                <body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCFFCDH"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
<noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=736330180923564&ev=PageView&noscript=1"
/></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;