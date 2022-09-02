import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios';
import { useState } from "react";

const index = () => {

const [blogList, setBlogst] = useState([])

var data = '';


    var config = {
        method: 'get',
        url: 'https://a1f3-2a0b-6204-33bb-4a00-40aa-4038-dd4c-c10d.ngrok.io/api/blogs',
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        const blogdata = response.data
        setBlogst(blogdata)
        console.log(blogList)
        console.log(blogdata)
      })
      .catch(function (error) {
        console.log(error);
      });

  return (
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Row>
            <Col xs="6">
            <Button variant="success">Edit</Button>
            </Col>
            <Col xs="6">
            <Button className='ml-5' variant="danger">delete</Button>
            </Col>
        </Row>
    </Card.Body>
    </Card>
  )
}

export default index