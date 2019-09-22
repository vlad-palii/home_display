import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs, TrafficLayer, DirectionsRenderer} from "react-google-maps"
import UserLocation from './UserLocation'

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.defaultCenter.coords}>
    <Marker position={props.defaultCenter.coords}/>
    <TrafficLayer autoUpdate />
  </GoogleMap>
  
)

);

export default function MyMap  () {

  const [coords, setCoords] = useState(null);
  const [rawCoords, setRawCoords] = useState(null);

  useEffect(() => {

    console.log("start use effect")

    async function fetchData() {
      const { coords } = await UserLocation();
      let { latitude, longitude } = coords;
      let compiledCoords = {
        lat: latitude,
        lng: longitude
      }
      let compiledRawCoords = [latitude, longitude];

      setRawCoords(compiledRawCoords)
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