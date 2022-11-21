import '../styles/index.css';
import '../styles/applications.scss';
import 'react-quill/dist/quill.snow.css';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAnalytics } from '../hooks/useWindowSize/useAnalytics';
import { usePixel } from '../hooks/useWindowSize/usePixel';
import * as fbq from '../lib/fpixel';

function MyApp({ Component, pageProps }) {
    useAnalytics();

    return (
        <>
            <Script async src='https://www.googletagmanager.com/gtag/js?id=G-H58RBQJ53W'></Script>
            <Script>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H58RBQJ53W');
        `}
            </Script>
            <Script
                id='fb-pixel'
                strategy='afterInteractive'
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
            fbq('init', 677034560498786);
          `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
