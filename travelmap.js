// The approximate center coordinates for Isle of Palms, South Carolina are 32.819412° N, -79.734383° W
var coordinates = [32.819412, -79.734383];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker(coordinates, {"title": "Hello from Isle of Palms!"}).bindPopup(
    "<p>Hello from Isle of Palms</p>"
).addTo(map);
