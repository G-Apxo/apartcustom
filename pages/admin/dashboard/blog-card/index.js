import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import dynamic from "next/dynamic";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import BlogEdit from "../edit/index";
import { useEffect } from "react";

const index = ({ blog }) => {
  const [blogList, setBlogst] = useState([]);

  const [language, setLanguage] = useState([]);

  const [url, setURl] = useState([]);

  const [show, setShow] = useState(false);

  var data = "";
  const blogListFunct = () => {
    var config = {
      method: "get",
      url: "https://api.apart.ge/api/blogs",
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        const blogdata = response.data;
        setBlogst(blogdata);
        console.log(blogList);
        console.log(blogdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // stop rendering blogListFunct() on every render
  React.useEffect(() => {
    blogListFunct();
  }, []);
  

  const deleteBlog = a => {
    var config = {
      method: "delete",
      url: `https://api.apart.ge/api/blog/${a.target.name}/${a.target.id}`,
      headers: {
        Authorization: "Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <>
      <h2>Blog List</h2>
      <Row>
        {blogList.map(blog => (
          <Col xs="4" 
          key={blog.id}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog.mainImage} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Title>{blog.lang}</Card.Title>
                <Row>
                  <Col xs="6"> 
                    <Link
                      name={blog.lang}
                      id={blog.url}
                      href={{
                        pathname: "dashboard/edit",
                        query: { url: blog.url, lang: blog.lang },
                      }}
                      variant="success"
                    >
                      edit
                    </Link>
                  </Col>
                  <Col xs="6">
                    <Button
                      className="ml-5 "
                      variant="danger"
                      name={blog.lang}
                      id={blog.url}
                      onClick={deleteBlog}
                    >
                      delete
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default index;
