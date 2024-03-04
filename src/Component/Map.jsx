import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

// import LocationInfo from './LocationInfo';

function Map({eventData, center, zoom}) {
//  console.log(eventData, "first")
 
	const markers = eventData.map(crime =>{

		//Don't make the mistake of putting the LocationMarker comp in a div and there by in a key. the issue you will face will actually make your marker(LocationMarker) set a column and won't be assigned to their respective locations.
        
            return <LocationMarker lat={crime?.location[0]} lng={crime?.location[1]} crime={crime?.description}/>
        
		// return <LocationMarker lat={42.3265} lng={-122.8765} crime={crime?.description}/>
       
	})

  return (
	<div className='map'>
		<GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyDWTJCJEle8NjFGOIJXXNqVPGTMutSRXw0'}}
		defaultCenter={center} defaultZoom = {zoom}>
		{markers}
		{/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
		</GoogleMapReact>
	</div>
  )
}

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8765
	},
	zoom: 6
}

export default Map
	// ApiNotActivatedMa