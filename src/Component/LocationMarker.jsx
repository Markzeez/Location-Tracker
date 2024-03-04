import { GiCrimeSceneTape } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useState } from "react";
function LocationMarker() {


 
  return (
    <div className="location-marker">
      {/* <GiCrimeSceneTape className="location-icon"  /> */}
      <FaMapMarkerAlt className="location-icon" />
    
    </div>
  );
}

export default LocationMarker;