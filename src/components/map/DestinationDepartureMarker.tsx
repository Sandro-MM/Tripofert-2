import { useEffect, useRef } from 'react';

const DestinationDepartureMarker = ({ map, position, label, description, image, Pointclass }) => {
    const markerRef = useRef(null);

    useEffect(() => {
        const initMarker = async () => {
            if (!google.maps.marker) {
                await google.maps.importLibrary('marker');
            }
            const { AdvancedMarkerElement } = google.maps.marker;

            const markerContent = document.createElement('div');
            markerContent.classList.add('custom-marker');
            markerContent.classList.add('direction-point');
            markerContent.innerHTML = `
                <div class="container">
                    <div class=${Pointclass}></div>
                    <div class="marker-label">${label}</div>
                    <Image class="image_for_container" src=${image} alt="img"/>
                    <div class="marker-description">${description}</div>
                    
                </div>
                <div class="triangle"></div>
            `;

            // Add click event listeners for the buttons



            const marker = new AdvancedMarkerElement({
                map,
                position,
                content: markerContent,
                title: label,
            });

            // Add click event listener for the marker
            marker.addListener('click', () => {
                toggleHighlight(marker);
            });

            markerRef.current = marker;
        };

        const toggleHighlight = (marker) => {
            if (marker.content.classList.contains('highlightedMapView')) {
                marker.content.classList.remove('highlightedMapView');
                marker.zIndex = null;
            } else {
                marker.content.classList.add('highlightedMapView');
                marker.zIndex = 1;
            }
        };

        if (map && !markerRef.current) {
            initMarker();
        }

        return () => {
            if (markerRef.current) {
                markerRef.current.setMap(null);
                markerRef.current = null;
            }
        };
    }, [map, position, label]);

    return null;
};

export default DestinationDepartureMarker;
