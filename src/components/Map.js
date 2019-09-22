import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '300px'
};

export class MyMap extends Component {

  constructor(props) {
    super(props);
    this.name = "oloolol"
  }

  componentDidMount (){

  }

  render() {
    return (
        <div>
              <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{
                lat: 50.45,
                lng: 30.52
                }}
              >
                <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                      <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                </InfoWindow>
              </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MyMap);