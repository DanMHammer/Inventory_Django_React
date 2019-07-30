import React, { Component } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import ObjectDisplay from "./components/ObjectDisplay";

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
    return <ObjectDisplay objects={this.state.objects} />;
  }
}

export default App;
