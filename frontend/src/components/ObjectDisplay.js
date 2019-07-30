import React, { Component } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";

class ObjectDisplay extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            {/*Object List*/}
            <ListGroup>
              {this.props.objects.map(object => (
                <ListGroupItem key={object.id} className="list-group-item">
                  <h1>{object.name}</h1>
                  <p>{object.description}</p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ObjectDisplay;
