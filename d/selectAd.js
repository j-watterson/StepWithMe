// selectAd.js
function selectAd() {

    var adLink = "https://ads.stepwith.me/shoes/merrell-trail-glove-7-gore-tex.html";
    var adImage = "https://ads.stepwith.me/shoes/merrell-trail-glove-7-gore-tex.png";

    document.getElementById('ad-link').href = adLink;
    document.getElementById('ad-image').src = adImage;
}

// Call the function when the page loads
window.onload = selectAd;
