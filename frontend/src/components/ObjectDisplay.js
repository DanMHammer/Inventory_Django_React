import React, { Component } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";

export default class ObjectDisplay extends React.Component {
  render() {
    return (
      <Container fluid>
        {/*Object Table*/}
        <Table hover>
          <thead>
            <tr>
              <th>Asset Tag</th>
              <th>Object Name</th>
              <th>Object Description</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.props.objects.map(object => (
              <tr key={object.id}>
                <th scope="row">{object.tag}</th>
                <td>{object.object_name}</td>
                <td>{object.description}</td>
                <td>@{object.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
