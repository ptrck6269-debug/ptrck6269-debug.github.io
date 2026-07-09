// The approximate center coordinates for Isle of Palms, South Carolina are 32.800278° N, -79.795556°
var coordinates = [32.800278, -79.795556];
var popupcode = `
<center>
<h3>Hello from Isle of Palms!</h3>
<iframe width="200" height="200" src="https://www.youtube.com/embed/LxiTej0JDEQ?si=eWlCB8CxOC3B_D9R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>`;
var map = L.map('map').setView(coordinates, 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.circle(coordinates, {
    "title": "Hello from Isle of Palms!",
    color: "white",
    fillColor: "#EA4335",
    radius: 8000
})
    .bindPopup(popupcode).addTo(map);
