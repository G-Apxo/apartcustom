import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '../locales/enFourOhFour';
import ru from '../locales/ruFourOhFour';
import ge from '../locales/geFourOhFour';

export default function FourOhFour() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;
    return (
        <div className='four-oh-four'>
            <h1>{t.header}</h1>
            <Link href='/' passHref>
                <a>
                    <button className='btn-send btn btn-primary btn-404'>{t.button}</button>
                </a>
            </Link>
        </div>
    );
}
