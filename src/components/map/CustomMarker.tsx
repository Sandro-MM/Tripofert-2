import { useEffect, useRef } from 'react';

const CustomMarker = ({ map, position, label, onAdd, onRemove, description, isSelected, image, time }) => {
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

            // Add click event listeners for the buttons
            markerContent.querySelector('.button-30_add').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_30').classList.remove('visible');
                markerContent.querySelector('.min_60').classList.add('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-60_add').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_90').classList.add('visible');
                markerContent.querySelector('.min_60').classList.remove('visible');
                // onAdd(position);
            });
            markerContent.querySelector('.button-60_del').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_30').classList.add('visible');
                markerContent.querySelector('.min_60').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-90_add').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_120').classList.add('visible');
                markerContent.querySelector('.min_90').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-90_del').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_60').classList.add('visible');
                markerContent.querySelector('.min_90').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-120_add').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_150').classList.add('visible');
                markerContent.querySelector('.min_120').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-120_del').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_90').classList.add('visible');
                markerContent.querySelector('.min_120').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-150_add').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_180').classList.add('visible');
                markerContent.querySelector('.min_150').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-150_del').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_120').classList.add('visible');
                markerContent.querySelector('.min_150').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-180_add').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_210').classList.add('visible');
                markerContent.querySelector('.min_180').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-180_del').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_150').classList.add('visible');
                markerContent.querySelector('.min_180').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-210_add').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_240').classList.add('visible');
                markerContent.querySelector('.min_210').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.button-210_del').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_180').classList.add('visible');
                markerContent.querySelector('.min_210').classList.remove('visible');
                // onAdd(position);
            });


            markerContent.querySelector('.button-240_del').addEventListener('click', (e) => {
                e.stopPropagation();
                markerContent.querySelector('.min_210').classList.add('visible');
                markerContent.querySelector('.min_240').classList.remove('visible');
                // onAdd(position);
            });

            markerContent.querySelector('.remove-item-button').addEventListener('click', (e) => {
                e.stopPropagation();
                onRemove(position);
            });

            markerContent.querySelector('.button-30_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(30);
            });

            markerContent.querySelector('.button-60_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(60);
            });

            markerContent.querySelector('.button-90_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(90);
            });

            markerContent.querySelector('.button-120_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(120);
            });
            markerContent.querySelector('.button-150_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(150);
            });
            markerContent.querySelector('.button-180_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(180);
            });
            markerContent.querySelector('.button-210_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(210);
            });
            markerContent.querySelector('.button-240_select').addEventListener('click', (e) => {
                e.stopPropagation();
                onAdd(240);
            });





            if (isSelected) {
                markerContent.querySelector('.min_30').classList.remove('visible');
                markerContent.querySelector('.remove-item-button').classList.add('visible_block');
                markerContent.querySelector('.visit-time-container').classList.add('visible_block');
            }

            const marker = new AdvancedMarkerElement({
                map,
                position,
                content: markerContent,
                title: label,
            });

            // markerContent.querySelector('.marker-top_area').addEventListener('click', (e) => {
            //     if (markerContent.querySelector('.marker-top_area').classList.contains('marker-top_area_close')){
            //         e.stopPropagation();
            //         closeMarker(marker)
            //     }
            // });



            // Add click event listener for the marker
            marker.addListener('click', () => {
                toggleHighlight(marker);
            });

            markerRef.current = marker;
        };

        const toggleHighlight = (marker) => {
            console.log(111)
            if (marker.content.classList.contains('highlightedMapView')) {
                return
            } else {
                marker.content.classList.add('highlightedMapView');
                marker.content.querySelector('.marker-top_area').classList.add('marker-top_area_close');
                marker.zIndex = 1;
            }

        };

        const closeMarker = (marker) => {
            if (marker.content.classList.contains('highlightedMapView')) {
                marker.content.classList.remove('highlightedMapView');
                marker.content.querySelector('.marker-top_area').classList.remove('marker-top_area_close');
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
