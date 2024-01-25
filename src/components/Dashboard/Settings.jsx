import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Settings() {
  return <>
  <Link to="/settings" style={{textDecoration:"none"}}>
      <h1>Choose Your Theme Here</h1>

      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://vxhtabpxdsjx-u4747.pressidiumcdn.com/wp-content/uploads/2022/11/theme_1-1024x576.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://vxhtabpxdsjx-u4747.pressidiumcdn.com/wp-content/uploads/2022/11/theme_1-1024x576.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://vxhtabpxdsjx-u4747.pressidiumcdn.com/wp-content/uploads/2022/11/theme_1-1024x576.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://vxhtabpxdsjx-u4747.pressidiumcdn.com/wp-content/uploads/2022/11/theme_1-1024x576.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://vxhtabpxdsjx-u4747.pressidiumcdn.com/wp-content/uploads/2022/11/theme_1-1024x576.jpg" thumbnail />
        </Col>
      </Row>
      <Link style={{padding:"20px"}} to="/home"><Button variant="warning">Go To Home </Button></Link>
      <Link style={{padding:"20px"}} to="/dashboard"><Button variant="success">Go To Dashboard </Button></Link>
    </Container>

    
  </Link>
  
  </>
}

export default Settings