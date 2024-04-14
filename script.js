
function displayInteractiveMap() {
    var map = L.map('map').setView([48.8566, 2.3522], 5); 

   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    L.marker([48.8014, 2.1305]).addTo(map) 
        .bindPopup('Palace of Versailles where i went with my sister');

    L.marker([48.8566, 2.3522]).addTo(map) 
        .bindPopup(' Try Paris, France. It was to die for');

    L.marker([51.5074, -0.1278]).addTo(map) 
        .bindPopup('London, UK. Visit Big Ben ');
}

document.getElementById('mapButton').addEventListener('click', displayInteractiveMap);
