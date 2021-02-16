import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import bemCssModules from "bem-css-modules";

import { default as MapStyles } from "./Map.module.scss";

const style = bemCssModules(MapStyles);

function Mapa(props) {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 52.58527977198758, lng: 17.39493838295808 }}
    >
      <Marker position={{ lat: 52.58527977198758, lng: 17.39493838295808 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapa));

const Map = () => {
  return (
    <div className={style("")}>
      <h2 className={style("title")}>Mapa Dojazdu</h2>
      <div className={style("map")}>
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBtH3x10QgQaasPBEz8oXcxM-CBL-Iog-0"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
  //AIzaSyBtH3x10QgQaasPBEz8oXcxM-CBL-Iog-0
};
export default Map;
