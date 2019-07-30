import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
//require("dotenv").config();

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  //TODO: Just for testing dotenv issue. Will be invalidated and removed.
  apiKey: "AIzaSyAe9DfbMla7RRIXNqDOwbduvwgRYYO5-ZI"
})(MapContainer);
