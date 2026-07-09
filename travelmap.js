// The approximate center coordinates for Isle of Palms, South Carolina are 32.800278° N, -79.795556°
var coordinates = [32.800278, -79.795556];
var map = L.map('map').setView(coordinates, 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {
    "title": "Hello from Isle of Palms!",
    color: "white",
    fillColor: "#EA4335",
    radius: 10000
})
    .bindPopup("<p>Hello from Isle of Palms</p>"
).addTo(map);
