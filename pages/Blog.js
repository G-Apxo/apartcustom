import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from "../locales/enBlog";
import ru from "../locales/ruBlog";
import ge from "../locales/geBlog";
import Link from "next/link";
import Footer from "../components/footer";
import axios from "axios";
import { useTitle } from "../components/title";
import Head from "next/head";
import Layout from "../components/Layout";

export const getStaticProps = async () => {
  const res = await fetch(`https://api.apart.ge/api/blogs/`);
  const data = await res.json();
  console.log(data);

  return {
    props: { blog: data },
  };
};

const IndexPage = ({ blog }) => {
  const router = useRouter();
  const { locale } = router;
  console.log(locale);
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;
  useTitle("Blog - Apart Development");

  return (
    <div>
      <Head>
        <title>
          {t.title}
          Blog - Apart Development
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="hero">
          <div>
            <Container className="mb-120">
              <h2 className="row-marginer mt-120 mb-60">Blog</h2>
              {/* <h4>ბლოგი დაემატება მალე</h4> */}
              <Row>
                {blog.map(blog => (
                  <Link
                    className="blog-single-blog"
                    key={blog}
                    // href={"blog/"+ blog.url}
                      name={blog.lang}
                      id={blog.url}
                      href={{
                        pathname: `/blog/${blog.url}`,
                        query: { url: blog.url, lang: blog.lang },
                      }}
                  >
                    <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                      <div className="">
                        <div className="blog-image__content">
                          <div className="text__contianer">
                            <p className="text-white">{blog.createdAt}</p>
                            <h2 className="text-white">{blog.title}</h2>
                          </div>
                          <img src={blog.mainImage} alt="banner immage" className="blogList" />
                        </div>
                      </div>
                    </Col>
                  </Link>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default IndexPage;
