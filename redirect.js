// redirect.js
function getDynamicUrl() {
    // List of URLs to choose from
    var urls = [
        "https://ads.stepwith.me/vivobarefoot-geo-court-iii-mens.html",
        "https://ads.stepwith.me/vivobarefoot-primus-lite-iii.html",
        "https://ads.stepwith.me/vivobarefoot-tracker-fg.html",
        // Add more URLs as needed
    ];

    // Randomly select a URL from the list
    var randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
}

function redirectToDynamicUrl() {
    var url = getDynamicUrl();
    window.location.href = url;
}

// When the window loads, execute the redirect
window.onload = redirectToDynamicUrl;
