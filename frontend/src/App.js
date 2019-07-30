import React, { Component } from "react";

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
      <div>
        {this.state.objects.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
