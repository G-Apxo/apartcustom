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

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "ru" ? ru : ge;

  const [blogList, setBlogst] = useState([])


  var data = '';
  const blogListFunc = () =>{
    var config = {
      method: 'get',
      url: `https://c0e7-2a0b-6204-33bb-4a00-8990-8d22-911b-bfa9.ngrok.io/api/blogs/ge`,
      headers: { 
        'Authorization': 'Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      
      const blogdata = response.data
      setBlogst(blogdata)
      console.log(blogList)
      console.log(blogdata)
      console.log(setBlogst)
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div>
      <div className="hero">
        <Nav />
        <div>
          <Container className="mb-120">
            <h2 className="row-marginer mt-120 mb-60" onClick={blogListFunc}>Blog</h2>
            <Row>
            {blogList.map((blog) =>
              <Link className="blog-single-blog" href={"blog/"+ blog.url}>
             
              <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
              <div className="">
                <div className="blog-image__content">
                  <img src={blog.mainImage} alt="banner immage" className="blogList"/>
                  <p className="text-dark">{blog.createdAt}</p>
                  <h2 className="text-dark">{blog.title}</h2>
                </div>
              </div>
            </Col>
              </Link>
   )} 
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
}
