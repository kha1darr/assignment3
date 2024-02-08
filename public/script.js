const googleMapsApiKey = 'AIzaSyBMVuSXqhohuzZSU-nAGcdz8drwddyMdpI';
const twitterApiKey = 'NxYVMSjfHnwfwhABNEC7GyUw7';
const nasaApiKey = 'zQc9dhTTV9ou4So8mAwOvFJIRSTkqyYSGrDPdFsN';

// скрипт google Maps API
function loadGoogleMapsScript() {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
    googleMapsScript.defer = true;
    googleMapsScript.async = true;
    document.body.appendChild(googleMapsScript);
}

// скрипт Twitter API
function loadTwitterScript() {
    const twitterScript = document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.defer = true;
    twitterScript.async = true;
    document.body.appendChild(twitterScript);
}

// скрипт NASA API
function loadNasaScript() {
    const nasaScript = document.createElement('script');
    nasaScript.src = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;
    nasaScript.defer = true;
    nasaScript.async = true;
    document.body.appendChild(nasaScript);
}

//google maps
function initMap() {
    const location = { lat: 51.090972900390625, lng: 71.41802215576172 };
    const mapOptions = {
        zoom: 14,
        center: location
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "My location"
    });
}

// загрузка скриптов
window.onload = function() {
    loadGoogleMapsScript();
    loadTwitterScript();
    loadNasaScript();
};