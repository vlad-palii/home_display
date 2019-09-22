import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import UserLocation from './UserLocation'


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.defaultCenter.coords}>
  </GoogleMap>
));

export default function MyMap  () {

  const [coords, setCoords] = useState(null);

  useEffect(() => {

    console.log("start use effect")

    async function fetchData() {
      const { coords } = await UserLocation();
      let { latitude, longitude } = coords;
      let compiledCoords = {
        lat: parseInt(latitude.toFixed(3)),
        lng: parseInt(longitude.toFixed(3))
      }

      console.log(compiledCoords)

      setCoords(compiledCoords)
    }

    fetchData();

  }, [])

  if (coords === null) {
    return 'Loading...';
  }

  return (
    <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key="
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    defaultCenter={{coords}}
  /> 
  )

}