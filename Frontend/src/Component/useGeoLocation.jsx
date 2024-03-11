import React, { useEffect, useState } from 'react'

function useGeoLocation() {
    const [location, setLocation] = useState({
        loaded: false,
      coordinates:{lat:"",lng:""}  
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates:{
                lat: location.coords.latitude,
                lng: location.coords.longtitide,
            },
        });
    };

    const onError = error => {
        setLocation({
            loaded: true,
           error,
        });
    }

    useEffect(()=> {
        if(! ("geolcation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
       
        }
            navigator.geolocation.getCurrentPosition(onSuccess, onError)
    },[]);

  return location;
}

export default useGeoLocation