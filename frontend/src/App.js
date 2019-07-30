import React, { Component } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";

class App extends Component {
  state = {
    objects: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://inventory-django-react.herokuapp.com/api/objects/"
      );
      const objects = await res.json();
      this.setState({
        objects
      });
    } catch (event) {
      console.log(event);
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            {/*Object List*/}
            <ListGroup>
              {this.state.objects.map(object => (
                <ListGroupItem key={object.id} className="list-group-item">
                  <h1>{object.name}</h1>
                  {object.description}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
