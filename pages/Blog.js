import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Row, Container, Col, input } from 'react-bootstrap';
import en from '../locales/enBlog';
import ru from '../locales/ruBlog';
import ge from '../locales/geBlog';
import Link from 'next/link';
import Footer from '../components/footer';
import axios from 'axios';
import { useTitle } from '../components/title';
import Head from 'next/head';
import Layout from '../components/Layout';
import React from 'react';
import Router from 'next/router';
import Script from 'next/script'
export const getStaticProps = async () => {
    const res = await fetch(`https://api.apart.ge/api/blogs/`);
    const data = await res.json();
    // console.log(data);
    return {
        props: { blog: data },
    };
};

const IndexPage = ({ blog }) => {
    const [blogList, setBlogst] = useState([]);

    var data = '';
    const blogListFunct = () => {
        var config = {
            method: 'get',
            url: `https://api.apart.ge/api/blogs/`,
            data: data,
        };

        axios(config)
            .then(function (response) {
                const blogdata = response.data;
                setBlogst(blogdata);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    React.useEffect(() => {
        blogListFunct();
    }, []);

    const router = useRouter();
    console.log(router);
    const { locale } = router;
    const t = locale === 'en' ? en : locale === 'ru' ? ru : ge;

    console.log(locale);

    return (
        <div>
            <Head>
                <title>
                    {t.title}
                    Blog - Apart Development
                </title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <Script async src='https://www.googletagmanager.com/gtag/js?id=G-H58RBQJ53W'></Script>
                <Script>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H58RBQJ53W');
        `}
                </Script>
            </Head>
            <Layout>
                <div className='hero'>
                    <div>
                        <Container className='mb-120'>
                            <h2 className='row-marginer mt-120 mb-60'>{t.title}</h2>
                            {/* <h4>ბლოგი დაემატება მალე</h4> */}
                            <Row>
                                {blogList.map(blog =>
                                    // if blog lang is same as current lang show only ge posts
                                    locale === blog.lang ? (
                                        <Link
                                            className='blog-single-blog'
                                            key={blog}
                                            id={blog.url}
                                            href={{
                                                pathname: `/blog/${blog.url}`,
                                            }}
                                        >
                                            <Col
                                                className='cursor mt-5'
                                                xs='12'
                                                lg='6'
                                                md='6'
                                                sm='6'
                                                xl='6'
                                                xxl='6'
                                            >
                                                <div className=''>
                                                    <div className='blog-image__content'>
                                                        <div className='text__contianer'>
                                                            <p className='text-white'>{blog.createdAt} </p>
                                                            <h2 className='text-white'>{blog.title}</h2>
                                                        </div>
                                                        <img
                                                            src={blog.mainImage}
                                                            alt='banner immage'
                                                            className='blogList'
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Link>
                                    ) : // if blog lang is same as current lang show only en posts
                                    locale === blog.lang ? (
                                        <Link
                                            className='blog-single-blog'
                                            key={blog}
                                            name={blog.lang}
                                            id={blog.url}
                                            href={{
                                                pathname: `/blog/${blog.url}`,
                                                query: { url: blog.url, lang: blog.lang },
                                            }}
                                        >
                                            <Col
                                                className='cursor mt-5'
                                                xs='12'
                                                lg='6'
                                                md='6'
                                                sm='6'
                                                xl='6'
                                                xxl='6'
                                            >
                                                <div className=''>
                                                    <div className='blog-image__content'>
                                                        <div className='text__contianer'>
                                                            <p className='text-white'>{blog.createdAt}</p>
                                                            <h2 className='text-white'>{blog.title}</h2>
                                                        </div>
                                                        <img
                                                            src={blog.mainImage}
                                                            alt='banner immage'
                                                            className='blogList'
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Link>
                                    ) : // if blog lang is same as current lang show only ru posts
                                    locale === blog.lang ? (
                                        <Link
                                            className='blog-single-blog'
                                            key={blog}
                                            id={blog.url}
                                            href={{
                                                pathname: `/blog/${blog.url}`,
                                                query: { url: blog.url, lang: blog.lang },
                                            }}
                                        >
                                            <Col
                                                className='cursor mt-5'
                                                xs='12'
                                                lg='6'
                                                md='6'
                                                sm='6'
                                                xl='6'
                                                xxl='6'
                                            >
                                                <div className=''>
                                                    <div className='blog-image__content'>
                                                        <div className='text__contianer'>
                                                            <p className='text-white'>{blog.createdAt}</p>
                                                            <h2 className='text-white'>{blog.title}</h2>
                                                        </div>
                                                        <img
                                                            src={blog.mainImage}
                                                            alt='banner immage'
                                                            className='blogList'
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Link>
                                    ) : null
                                )}
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
export default IndexPage;
