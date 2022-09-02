import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Blogpost from './blog-post';
import Blogcard from './blog-card'
const index = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column custom__column">
          <Nav.Item>
            <Nav.Link eventKey="first" className='custom__pills mt-120 text-white'> All blogs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second" className='custom__pills text-white'>Create Blog</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first"  className="mt-120">
            <Blogcard />
          </Tab.Pane>
          <Tab.Pane eventKey="second"  className="mt-120">
            <Blogpost/>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  )
}

export default index