// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
  center: [26.032 , 50.513],
  zoom: 2
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



//creating a marker on map



var marker = L.marker([34.8456 , 136.5390],{draggable: true, title:"Japan"}).addTo(myMap)
marker.bindPopup("<h1>Suzuka Kokusai Rēsingu Kōsu</h1><img src='./img/Suzuka_circuit.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([-37.843163294 , 144.967662796],{draggable: true, title:"Australia"}).addTo(myMap)
marker.bindPopup("<h1>Melbourne Grand Prix Circuit</h1><img src='./img/bahrain.png' style='width: 12vw; min-width: 100px;'>") 

var marker = L.marker([26.032 , 50.513],{draggable: true, title:"bahrain"}).addTo(myMap)
marker.bindPopup("<h1>Bahrain Grand Prix</h><img src='./img/bahrain.png' style='width: 12vw; min-width: 100px;'>") 

var marker = L.marker([44.3441 , 11.7144],{draggable: true, title:"IMOLA"}).addTo(myMap)
marker.bindPopup("<h1>Autodromo Enzo e Dino FerrariAutodromo Enzo e Dino Ferrari</h1><img src='./img/Imola.png' style='width: 12vw; min-width: 100px;'>") 

var marker = L.marker([25.9580, -80.2389],{draggable: true, title:"Miami"}).addTo(myMap)
marker.bindPopup("<h1>MIAMI INTERNATIONAL AUTODROME</h1><img src='./img/Hard_Rock.png' style='width: 12vw; min-width: 100px;'>") 

var marker = L.marker([43.73416373, 7.418998324],{draggable: true, title:"Manaco"}).addTo(myMap)
marker.bindPopup("<h1>CIRCUIT DE MONACO</h1><img src='./img/Hard_Rock.png' style='width: 12vw; min-width: 100px;'>") 

var marker = L.marker([41.568664392, 2.25666564],{draggable: true, title:"spain"}).addTo(myMap)
marker.bindPopup("<h1>CIRCUIT DE BARCELONA-CATALUNYA</h1><img src='./img/barcelona.png' style='width: 12vw; min-width: 100px;'>") 

var marker = L.marker([40.3729, 49.8532],{draggable: true, title:"Azerbaijan"}).addTo(myMap)
marker.bindPopup("<h1>BAKU CITY CIRCUIT</h1><img src='./img/Baku.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([45.5016, -73.5280],{draggable: true, title:"Canada"}).addTo(myMap)
marker.bindPopup("<h1>CIRCUIT GILLES VILLENEUVE</h1><img src='./img/CircuitGillesVilleneuve.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([52.0733, 1.0147],{draggable: true, title:"UK"}).addTo(myMap)
marker.bindPopup("<h1>SILVERSTONE</h1><img src='./img/Silverstone.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([47.2202, 14.7652],{draggable: true, title:"Austria"}).addTo(myMap)
marker.bindPopup("<h1>Red Bull Ring</h1><img src='./img/Spielberge.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([43.2490, 5.7883],{draggable: true, title:"France"}).addTo(myMap)
marker.bindPopup("<h1>CIRCUIT PAUL RICARD</h1><img src='./img/Le_Castellet.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([47.573997704, 19.24249903],{draggable: true, title:"Austria"}).addTo(myMap)
marker.bindPopup("<h1>Hungaroring</h1><img src='./img/Hungaroring.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([50.4369, 5.9720],{draggable: true, title:"Belgian"}).addTo(myMap)
marker.bindPopup("<h1>Circuit de Spa-Francorchamps</h1><img src='./img/Spa-Francorchamps.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([52.3877, 4.5442],{draggable: true, title:"Netherlands"}).addTo(myMap)
marker.bindPopup("<h1>CIRCUIT ZANDVOORT, ZANDVOORT</h1><img src='./img/Circuit_Zandvoort-2020.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([45.6218, 9.2848],{draggable: true, title:"Italy"}).addTo(myMap)
marker.bindPopup("<h1>Autodromo Nazionale Monza</h1><img src='./img/Monza.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([43.4100, 39.9690],{draggable: true, title:"Russia"}).addTo(myMap)
marker.bindPopup("<h1>SOCHI AUTODROM</h1><img src='./img/Sochi.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([1.2914, 103.8639],{draggable: true, title:"Singapore"}).addTo(myMap)
marker.bindPopup("<h1>MARINA BAY STREET CIRCUIT</h1><img src='./img/Marina.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([30.1346, -97.6359],{draggable: true, title:"America"}).addTo(myMap)
marker.bindPopup("<h1>CIRCUIT OF THE AMERICAS</h1><img src='./img/Austin_circuit.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([19.4059, -99.0925],{draggable: true, title:"Mexico"}).addTo(myMap)
marker.bindPopup("<h1>AUTODROMO HERMANOS RODRIGUEZ</h1><img src='./img/Autódromo_Hermanos.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([24.466998132, 54.601830926],{draggable: true, title:"ABU DHABI"}).addTo(myMap)
marker.bindPopup("<h1>YAS MARINA CIRCUIT</h1><img src='./img/Yas_Marina_Circuit.png' style='width: 12vw; min-width: 100px;'>")

var marker = L.marker([-23.7012, -46.6980],{draggable: true, title:"Brazil"}).addTo(myMap)
marker.bindPopup("<h1>AUTODROMO JOSE CARLOS PACE INTERLAGOS</h1><img src='./img/Autódromo_José_Carlos.png' style='width: 12vw; min-width: 100px;'>")

var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<select><option>1</option><option>2</option><option>3</option></select>';
    div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
    return div;
};
legend.addTo(map);

$('select').change(function(){
    alert('changed');
});