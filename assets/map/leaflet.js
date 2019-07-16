var map = L.map('map', {
  center: [41.153930, -7.011930],
  minZoom: 2,
  zoom: 18
})

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map)

var myIcon = L.icon({
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

L.marker([41.153930, -7.011930])
  .bindPopup('<a href="' + "" + '" target="_blank">' + 'Marta Teixeira Simões Advogada.' + '</a>')
  .addTo(map);
