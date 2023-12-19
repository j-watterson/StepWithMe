// Function to get the ad ID
// Assuming itemList is available globally
// If using modules, import itemList from 'list.js'

function getAdId() {
    // Generate a random index based on the itemList length
    var randomIndex = Math.floor(Math.random() * itemList.length);

    // Return the ID (first element) of a random item from itemList
    return itemList[randomIndex][0];
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
