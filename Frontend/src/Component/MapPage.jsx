import React, { useEffect, useRef, useState } from 'react';
import { TileLayer, Marker, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import osmProviders from './osm-providers';
import useGeoLocation from './useGeoLocation';
import LocationMarker from './LocationMarker';

function MapPage() {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const location = useGeoLocation();

  const showMyLocation = () => {
    if( location.loaded && !location.error){
      mapRef.current.leafletElement.flyTo([location.coordinates.lat, location.coordinates.lng], ZOOM_LEVEL, {animate:true});
    }else{
      alert(location.error.message)
    }
  }

  return (
    <div className='w-[900px] h-[500px] flex justify-center items-center'>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={osmProviders.maptiler.url}
          attribution={osmProviders.maptiler.attribution}
        />

        {location.loaded && !location.error && (
              <Marker icon={<LocationMarker/>} position={[location.coordinates.lat, location.coordinates.lng ]}></Marker>
            ) }
      </MapContainer>

     <div> <button
        onClick={showMyLocation}
        className="bg-[#d37373] cursor-pointer p-2 "
      >
        Locate Me
      </button></div>
    </div>
  );
}

export default MapPage;
