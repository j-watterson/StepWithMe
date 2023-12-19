// Define a 2D array with items
// Each item has three components: [ID, URL, Boolean]
var itemList = [
    ["/shoes/altra-escalante-2.5", "https://www.altrarunning.com/shop/men-39%3Bs-escalante-25-al0a4vqa", true],
    ["/shoes/inov-8-bare-xf-210-v3", "https://www.inov-8.com/us/bare-xf-210-v3-mens-natural-training-shoe", true],
    ["/shoes/merrell-trail-glove-7-gore-tex", "https://www.merrell.com/US/en/trail-glove-7-gore-tex/58270M.html", true],
    ["/shoes/merrell-vapor-glove-3-luna-leather", "https://www.merrell.com/UK/en_GB/vapor-glove-3-luna-leather/33382M.html", true],
    ["/shoes/merrell-vapor-glove-5", "https://www.merrell.com/US/en/vapor-glove-5/48688M.html", true],
    ["/shoes/merrell-vapor-glove-6", "https://www.merrell.com/US/en/vapor-glove-6/195018950710.html", true],
    ["/shoes/vivobarefoot-geo-court-iii-mens", "https://www.vivobarefoot.com/us/geo-court-iii-mens", true],
    ["/shoes/vivobarefoot-primus-lite-iii", "https://www.vivobarefoot.com/us/primus-lite-iii-mens-ss22", true],
    ["/shoes/vivobarefoot-tracker-fg", "https://www.vivobarefoot.com/us/tracker-ii-fg-mens-ss22", true],
    /*["/shoes/", "linky", true],
    ["/shoes/", "linky", true],
    ["/shoes/", "linky", true],
    ["/shoes/", "linky", true],
    ["/shoes/", "linky", true],
    // ... add more items as needed*/
];

// Function to lookup redirect URL by ID
function lookupRedirect(id) {
    // Find the item with the matching ID
    var item = itemList.find(function(element) {
        return element[0] === id;
    });

    // Return the URL (second column) if found, otherwise undefined
    return item ? item[1] : undefined;
}

// Export the itemList array for use in other files (if using modules)
// Uncomment the line below if you're using modules
// export { itemList };
