import { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import getCenter from "geolib/es/getCenter"

function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation]  = useState({}) 

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const centre = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        widht:'100%',
        height: '100%',
        latitude: centre.latitude,
        longitude: centre.longitude,
        zoom: 11,
    });

    return <ReactMapGL
    mapStyle="mapbox://styles/ayaansheth/cks0p46l656v218qgfs2nvyug"
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport) }
    >
        {searchResults.map(result => (
            <div key={result.long}>
                <Marker
                longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                offsetTop={-10}
                
                >
                    <p
                    onClick={() => setSelectedLocation(result)}
                    className="cursor-pointer text-2xl animate-bounce"
                    aria-label="push-pin"
                    >
                        📍
                    </p>

                </Marker>
                {selectedLocation.long=== result ? (
                    <Popup
                    onClose={()=> setSelectedLocation({})}
                    latitude={result.lat}
                    longitude={result.long}
                    closeOnClick={true}
                    >
                        {result.title}
                    </Popup>
                ): (
                    false
                )}
            </div>
        ))}

    </ReactMapGL>
}

export default Map
