import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>React Bootstrap</h1>
            <FaCartPlus color="#ff6600" size="150px" />
            <Button variant="primary">
              <FaCartPlus color="#ffffff" /> 加入
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
