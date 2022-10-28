import '../styles/index.css';
import '../styles/applications.scss';
import 'react-quill/dist/quill.snow.css';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAnalytics } from '../hooks/useWindowSize/useAnalytics';

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
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
