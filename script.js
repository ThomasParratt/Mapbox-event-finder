mapboxgl.accessToken = 'MAPBOX_API_KEY'; // Replace this with your Mapbox API key

// Initialize map
const map = new mapboxgl.Map({
    container: 'map', // The id of the container in HTML
    style: 'mapbox://styles/mapbox/streets-v11', // The style of the map
    center: [-74.5, 40], // Longitude, Latitude (this will be adjusted later)
    zoom: 9 // Zoom level
});

// Get user location
navigator.geolocation.getCurrentPosition(function(position) {
    const userLongitude = position.coords.longitude;
    const userLatitude = position.coords.latitude;
    
    // Center the map on user's location
    map.setCenter([userLongitude, userLatitude]);
    map.setZoom(12); // Zoom in to the user's location

    // Add a marker for the user's location
    new mapboxgl.Marker()
        .setLngLat([userLongitude, userLatitude])
        .addTo(map);
}, function(error) {
    console.error('Error getting location: ', error);
});

