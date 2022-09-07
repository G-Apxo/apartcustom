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
import BlogEdit from "../edit/index"


const index = ({ blog }) => {
  const [blogList, setBlogst] = useState([]);

  const [language , setLanguage] = useState([]);

  const [ url, setURl ] = useState([]);

  const [show, setShow] = useState(false);

  var data = "";
  const blogListFunct = () => {
    var config = {
      method: "get",
      url: "https://9ba0-95-137-233-63.ngrok.io/api/blogs",
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

  const deleteBlog = (a) => {
    var config = {
      method: "delete",
      url: `https://9ba0-95-137-233-63.ngrok.io/api/blog/${a.target.name}/${a.target.id}`,
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
      <h2 onClick={blogListFunct}>Blog List</h2>
      <Row>
        {blogList.map((blog) => (
          <Col xs="4" key={blog}>
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
                        pathname: 'admin/edit',
                        query: { url: blog.url,
                          lang:blog.lang
                          },
                      }}
                      // href="edit/?url="{...blog.url} {...blog.lang}
                      variant="success" >
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
      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            edit existing blog
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <BlogEdit/>
          </Container>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default index;
