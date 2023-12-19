// Function to get the ad ID
function getAdId() {
    // Logic to retrieve ad ID goes here.
    // For example, this could be a random number, or fetched from a server, etc.
    // Here's a placeholder return value for demonstration:
    return "/shoes/merrell-trail-glove-7-gore-tex";
}

// Function to select and display an ad
function selectAd() {
    var adId = getAdId(); // Retrieve the ad ID using the new function
    var adLink = "https://ads.stepwith.me" + adId + ".html";
    var adImage = "https://ads.stepwith.me" + adId + ".png";

    document.getElementById('ad-link').href = adLink;
    document.getElementById('ad-image').src = adImage;
}

// Call the function when the page loads
window.onload = selectAd;
