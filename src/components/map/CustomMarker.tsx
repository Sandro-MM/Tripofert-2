import { useEffect, useRef } from 'react';

const CustomMarker = ({ map, position, label, onAdd, onRemove, description, isSelected }) => {
    const markerRef = useRef(null);

    useEffect(() => {
        const initMarker = async () => {
            if (!google.maps.marker) {
                await google.maps.importLibrary('marker');
            }
            const { AdvancedMarkerElement } = google.maps.marker;

            const markerContent = document.createElement('div');
            markerContent.classList.add('custom-marker');
            if (isSelected) {
                markerContent.classList.add('selected-marker'); // Add class if selected
            }
            markerContent.innerHTML = `
                <div class="container">
                    <div class="marker-label">${label}</div>
                    <div class="marker-description">${description}</div>
                    <button class="add-button">+</button>
                    <button class="remove-button">-</button>
                </div>
                <div class="triangle"></div>
            `;

            // Add click event listeners for the buttons
            markerContent.querySelector('.add-button').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(position);
            });
            markerContent.querySelector('.remove-button').addEventListener('click', (e) => {
                e.stopPropagation();
                onRemove(position);
            });

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
        } else if (markerRef.current) {
            // Update marker content if isSelected changes
            if (isSelected) {
                markerRef.current.content.classList.add('selected-marker');
            } else {
                markerRef.current.content.classList.remove('selected-marker');
            }
        }

        return () => {
            if (markerRef.current) {
                markerRef.current.setMap(null);
                markerRef.current = null;
            }
        };
    }, [map, position, label, onAdd, onRemove, isSelected]);

    return null;
};

export default CustomMarker;
