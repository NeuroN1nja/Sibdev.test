import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class ApiCard extends Component {
  render() {
    return (
      <Col>
        <Card body sm={{ size: 4, order: 2, offset: 1 }} >
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
            </Card>
      </Col>
    )
  }
}

export default ApiCard
