// redirect.js
var chosenUrl = ""; // Global variable to store the chosen URL

function getDynamicUrl() {
    // List of URLs to choose from
    var urls = [
        "https://ads.stepwith.me/shoes/vivobarefoot-geo-court-iii-mens.html",
        "https://ads.stepwith.me/shoes/vivobarefoot-primus-lite-iii.html",
        "https://ads.stepwith.me/shoes/vivobarefoot-tracker-fg.html",
        // Add more URLs as needed
    ];

    // Randomly select a URL from the list
    var randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
}

function redirectToDynamicUrl() {
    chosenUrl = getDynamicUrl();
    window.location.href = chosenUrl;
}

// Set the redirection to occur on window click
window.onload = function() {
    redirectToDynamicUrl(); // Set the URL to be redirected to
    window.onclick = function() {
        window.location.href = chosenUrl; // Redirect on click
    };
