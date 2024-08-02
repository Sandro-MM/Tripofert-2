import {useEffect, useRef, useState} from 'react';

const CustomMarker = ({ map, position, label, onAdd, onRemove, description, isSelected, image, time }) => {
    const markerRef = useRef(null);
    const [highlighted, setHighlighted] = useState(false);

    useEffect(() => {
        const initMarker = async () => {
            if (!google.maps.marker) {
                await google.maps.importLibrary('marker');
            }
            const { AdvancedMarkerElement } = google.maps.marker;

            const markerContent = document.createElement('div');
            markerContent.classList.add('custom-marker');
            if (isSelected) {
                markerContent.classList.add('selected-marker');
            }
            markerContent.innerHTML = `
                <div class="container">
                <div class="marker-top_area">
                    <div class="marker-label">${label}</div>
                    <Image class="image_for_container" src=${image} alt="img"/>
                    <div class="marker-description">${description}</div>
                </div>
                
                    <div class="action_area">
                    <div class="min_30 visible">
                        <button class="add-button button-30_add">+</button>
                        <div class="marker-description"> 30 min stop for 30€</div>
                        <div class="button_area_transparent"></div>
                        <div class="add-item-button button-30_select">
                        Add
                        </div>
                    </div>
                     <div class="min_60">
                        <button class="add-button button-60_add">+</button>
                        <div class="marker-description"> 60 min stop for 48€</div>
                        <button class="remove-button button-60_del">-</button>
                        <div class="add-item-button button-60_select">
                        Add
                        </div>
                    </div>
                        <div class="min_90">
                        <button class="add-button button-90_add">+</button>
                        <div class="marker-description"> 90 min stop for 66€</div>
                        <button class="remove-button button-90_del">-</button>
                        <div class="add-item-button button-90_select">
                        Add
                        </div>
                    </div>
                        <div class="min_120">
                        <button class="add-button button-120_add">+</button>
                        <div class="marker-description"> 120 min stop for 82€</div>
                        <button class="remove-button button-120_del">-</button>
                        <div class="add-item-button button-120_select">
                        Add
                        </div>
                    </div>
                     <div class="min_150">
                        <button class="add-button button-150_add">+</button>
                        <div class="marker-description"> 150 min stop for 100€</div>
                        <button class="remove-button button-150_del">-</button>
                        <div class="add-item-button button-150_select">
                        Add
                        </div>
                    </div>
                    <div class="min_180">
                        <button class="add-button button-180_add">+</button>
                        <div class="marker-description"> 180 min stop for 117€</div>
                        <button class="remove-button button-180_del">-</button>
                        <div class="add-item-button button-180_select">
                        Add
                        </div>
                    </div>
                     <div class="min_210">
                        <button class="add-button button-210_add">+</button>
                        <div class="marker-description"> 210 min stop for 135€</div>
                        <button class="remove-button button-210_del">-</button>
                        <div class="add-item-button button-210_select">
                        Add
                        </div>
                    </div>
                     <div class="min_240">
                        <div class="button_area_transparent"></div>
                        <div class="marker-description"> 240 min stop for 153€</div>
                        <button class="remove-button button-240_del">-</button>
                        <div class="add-item-button button-240_select">
                        Add
                        </div>
                    </div>
                    </div>
                   
                    <div class="remove_area">
                      <div class="visit-time-container">
                        ${time} min stop
                    </div>
                    <div class="remove-item-button">
                        remove
                    </div>
                    </div>
                   
                    
                </div>
                <div class="triangle"></div>
            `;

            const addEventListeners = (selector, events, handler) => {
                const elements = markerContent.querySelectorAll(selector);
                elements.forEach(element => {
                    events.forEach(event => {
                        element.addEventListener(event, handler);
                    });
                });
            };

            const handleButtonEvent = (e) => {
                e.stopPropagation();
                const classList = e.currentTarget.classList;

                // Utility function to handle visibility changes
                const updateVisibility = (fromClass, toClass) => {
                    markerContent.querySelector(fromClass).classList.remove('visible');
                    markerContent.querySelector(toClass).classList.add('visible');
                };

                // Handle add and remove buttons
                if (classList.contains('button-30_add')) {
                    updateVisibility('.min_30', '.min_60');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-60_add')) {
                    updateVisibility('.min_60', '.min_90');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-60_del')) {
                    updateVisibility('.min_60', '.min_30');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-90_add')) {
                    updateVisibility('.min_90', '.min_120');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-90_del')) {
                    updateVisibility('.min_90', '.min_60');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-120_add')) {
                    updateVisibility('.min_120', '.min_150');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-120_del')) {
                    updateVisibility('.min_120', '.min_90');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-150_add')) {
                    updateVisibility('.min_150', '.min_180');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-150_del')) {
                    updateVisibility('.min_150', '.min_120');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-180_add')) {
                    updateVisibility('.min_180', '.min_210');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-180_del')) {
                    updateVisibility('.min_180', '.min_150');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-210_add')) {
                    updateVisibility('.min_210', '.min_240');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-210_del')) {
                    updateVisibility('.min_210', '.min_180');
                    markerContent.classList.add('highlightedMapView');
                    marker.zIndex = 1;
                } else if (classList.contains('button-240_del')) {
                    updateVisibility('.min_240', '.min_210');
                }

                // Handle action buttons
                if (classList.contains('remove-item-button')) {
                    console.log('remove-item-button');
                    onRemove(position);
                } else if (classList.contains('button-30_select')) {
                    console.log('button-30_select');
                    onAdd(30);
                } else if (classList.contains('button-60_select')) {
                    console.log('button-60_select');
                    onAdd(60);
                } else if (classList.contains('button-90_select')) {
                    console.log('button-90_select');
                    onAdd(90);
                } else if (classList.contains('button-120_select')) {
                    console.log('button-120_select');
                    onAdd(120);
                } else if (classList.contains('button-150_select')) {
                    console.log('button-150_select');
                    onAdd(150);
                } else if (classList.contains('button-180_select')) {
                    console.log('button-180_select');
                    onAdd(180);
                } else if (classList.contains('button-210_select')) {
                    console.log('button-210_select');
                    onAdd(210);
                } else if (classList.contains('button-240_select')) {
                    console.log('button-240_select');
                    onAdd(240);
                }
            };

            // markerContent.querySelector('.remove-item-button').addEventListener('click', (e) => {
            //     e.stopPropagation();
            //     onRemove(position);
            // });



            if (isSelected) {
                markerContent.querySelector('.min_30').classList.remove('visible');
                markerContent.querySelector('.remove-item-button').classList.add('visible_block');
                markerContent.querySelector('.visit-time-container').classList.add('visible_block');
            }

            addEventListeners('.add-button, .remove-button, .add-item-button', ['click', 'touchend'], handleButtonEvent);
            addEventListeners('.remove-item-button', ['click', 'touchend'], handleButtonEvent);

            const marker = new AdvancedMarkerElement({
                map,
                position,
                content: markerContent,
                title: label,
            });

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
