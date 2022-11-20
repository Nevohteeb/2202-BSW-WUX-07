// Setting up access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJja3A0b2RvNXQwZHZsMm5vdzJhMzlneHliIn0.GePUzyfjdyGc0pnYNPerqA';

// Etablishes the map and applies initial settings
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9', // Style sheet - can change see documentation
  center: [174.77975783177726, -41.279357927016264], // starting position [lng, lat]
  zoom: 15 // starting zoom
});

// //Set up marker for map
// var marker = new mapboxgl.Marker()
//     .setLngLat([174.780055, -41.279044])
//     .addTo(map);

// // Marker for Te Papa
// var markerB = new mapboxgl.Marker()
// .setLngLat([174.781918, -41.289618])
// .addTo(map);

// // Marker for Spa Reac Track
// var markerC = new mapboxgl.Marker()
// .setLngLat([5.972229751524546, 50.43753132193865])
// .addTo(map);


// Click function that flys to Te Papa Marker
$('#tePapa').click(function () {
    map.flyTo({
        // These options control the ending camera position
        // the target, zoom level, and orientation - N,S,W,E
        center: [174.781918, -41.289618],
        zoom: 18.5,
        bearing: 0,
        // Control flight curve, speed of flight and zoom before panning
        speed: 0.55, // make the fly slow
        curve: 1,

        // easing function - to ease the animation 
        easing: function (t) {
            return t;
        },
        // overide perfers-reduced-motion
        essential: true
    })
});

$('#trainStation').click(function () {
    map.flyTo({
        // These options control the ending camera position
        // the target, zoom level, and orientation - N,S,W,E
        center: [174.780055, -41.279044],
        zoom: 18.5,
        bearing: 0,
        // Control flight curve, speed of flight and zoom before panning
        speed: 0.55, // make the fly slow
        curve: 1,

        // easing function - to ease the animation 
        easing: function (t) {
            return t;
        },
        // overide perfers-reduced-motion
        essential: true
    })
});

$('#spaRaceTrack').click(function () {
    map.flyTo({
        // These options control the ending camera position
        // the target, zoom level, and orientation - N,S,W,E
        center: [5.972229751524546, 50.43753132193865],
        zoom: 12,
        bearing: 0,
        // Control flight curve, speed of flight and zoom before panning
        speed: 0.55, // make the fly slow
        curve: 1,

        // easing function - to ease the animation 
        easing: function (t) {
            return t;
        },
        // overide perfers-reduced-motion
        essential: true
    })
});

// Features - (Important point on the map)
var geojson = {
    'type': 'FeatureCollection',
    'features': [

        //TE PAPA FEATURE
        {
            'type': 'Feature',
            'properties': {
                'title': 'Te Papa',
                'description': 'Museum of New Zealand',
                'iconSize': [60,60],
                'backgroundImage': 'url()'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [174.781918, -41.289618]
            }
        },

        // RAILWAY FEATURE
        {
            'type': 'Feature',
            'properties': {
                'title': 'Railway Station',
                'description': 'Metlinks disaster',
                'iconSize': [20,20]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [174.780055, -41.279044]
            }
        }
        
    ]
}

// add markers for features
for (var marker of geojson.features) {
    // Create a Dom element for each marker
    var el = document.createElement('div');
    var width = marker.properties.iconSize[0];
    var height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    // //Click Event to show message
    // el.addEventListener('click', function () {
    //     window.alert(marker.properties.title);
    // });

    // Add Markers to our map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25}) // adds popups
                .setHTML(
                    `<h3>${marker.properties.title}</h3><p>${marker.properties.description}</p>`
                ) // allows you to set HTML of pop up
        )
        .addTo(map);

}