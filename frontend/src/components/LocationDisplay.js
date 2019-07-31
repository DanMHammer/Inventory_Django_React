import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
//require("dotenv").config();

export class MapContainer extends Component {}

export default GoogleApiWrapper({
  //TODO: Just for testing dotenv issue. Will be invalidated and removed.
  apiKey: "AIzaSyAe9DfbMla7RRIXNqDOwbduvwgRYYO5-ZI"
})(MapContainer);
