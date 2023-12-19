// Function to get the ad ID
function getAdId() {
    var adIds = [
        "/shoes/merrell-trail-glove-7-gore-tex",
        "/apparel/nike-dri-fit-shirt",
        "/accessories/adidas-running-cap",
        // ... add more ad IDs here
    ];

    // Generate a random index based on the array length
    var randomIndex = Math.floor(Math.random() * adIds.length);

    // Return a random ad ID from the array
    return adIds[randomIndex];
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
