import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";

const index = ({ blog }) => {
  const [blogList, setBlogst] = useState([]);

  var data = "";
  const blogListFunct = () => {
    var config = {
      method: "get",
      url: "https://55fa-95-137-233-63.ngrok.io/api/blogs",
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

  const deleteBlog = (a) =>{
    var config = {
      method: 'delete',
      url: `https://55fa-95-137-233-63.ngrok.io/api/blog/${a.target.name}/${a.target.id}`,
      headers: { 
        'Authorization': 'Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5'
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    }); 
    
  }

  return (
    <>
      <h2 onClick={blogListFunct}>Blog List</h2>
      <Row>
        {blogList.map((blog) => 
        <Col xs="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={blog.mainImage} />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Title>{blog.lang}</Card.Title>
              <Row>
                <Col xs="6">
                  <Button variant="success">Edit</Button>
                </Col>
                <Col xs="6">
                  <Button className="ml-5" variant="danger" name={blog.lang} id={blog.url} onClick={deleteBlog}> 
                    delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        )}

      </Row>
    </>
  );
};

export default index;
