import { useRouter } from 'next/router';
import { useEffect } from 'react';
export const usePixel = () => {
    const router = useRouter();

    useEffect(() => {
        // This pageview only triggers the first time (it's important for Pixel to have real information)
        fbq.pageview();

        const handleRouteChange = () => {
            fbq.pageview();
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
};
