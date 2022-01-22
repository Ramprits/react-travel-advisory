import { Dispatch, SetStateAction } from "react";
import { MapContainer } from "./Map.style";
import GoogleMapReact from "google-map-react";

type MapProps = {
  setCoordinates: Dispatch<SetStateAction<any>>;
  coordinates: any;
};
function Map(props: MapProps) {
  console.log(props);
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={props.coordinates}
        center={props.coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={() => null}
        onChildClick={() => null}></GoogleMapReact>
    </MapContainer>
  );
}

export default Map;
