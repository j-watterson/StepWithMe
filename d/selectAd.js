// selectAd.js
function selectAd() {

    var adID = "shoes/merrell-trail-glove-7-gore-tex"
    var adLink = "https://ads.stepwith.me/" + adID + ".html";
    var adImage = "https://ads.stepwith.me/" + adID + ".png";

    document.getElementById('ad-link').href = adLink;
    document.getElementById('ad-image').src = adImage;
}

// Call the function when the page loads
window.onload = selectAd;
