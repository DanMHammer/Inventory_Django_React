//Reference: https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class LocationDisplay extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={{
          width: "100%",
          height: "100%"
        }}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: JSON.stringify(process.env.GoogleAPIKey)
})(LocationDisplay);
