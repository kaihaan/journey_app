import { useEffect, useRef } from 'react'
import { StyledMap } from './styled.map'
import {setMarkers, setPath, makeMap} from './maputils'


export default () => {

    const mapRef = useRef(null)

    useEffect(() => {
        console.log('in map func')

        var script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxQy2F-8ud-Ronqxbg_isPvJ-4E9ZRSV0&callback=initMap';
        script.defer = true;
        script.async = true;

        // Attach your callback function to the `window` object
        window.initMap = function () {
            // JS API is loaded and available
            const map = makeMap(mapRef.current, { lat: 0, lng: -180 }, 3)
            setMarkers(map)
            setPath(map)
        }
        // Append the 'script' element to 'head'
        document.head.appendChild(script);
    }, [])

    return (
        <StyledMap>
            <div id="map" ref={mapRef} style={{ height: "100%", width: "100%" }}></div>
        </StyledMap>
    )
}