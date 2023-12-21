// Define a 2D array with items
// Each item has three components: [ID, URL, Boolean]
var itemList = [
    ['/sandals/bedrock-cairn-adventure','https://bedrocksandals.com/products/cairn-sandals',true],
    ['/sandals/earth-runners-primal-sandals','https://www.earthrunners.com/collections/elementals/products/primal-adventure-sandals',true],
    ['/sandals/xero-z-trail-ev','https://xeroshoes.com/shop/sandals/ztrail-men/',true],
    ['/shoes/altra-escalante-2.5', 'https://www.altrarunning.com/shop/men-39%3Bs-escalante-25-al0a4vqa', true],
    ['/shoes/altra-solstice-xt-2', 'https://www.altrarunning.com/shop/mens-shoes-gym-training/mens-solstice-xt-2-al0a546v', true],
    ['/shoes/inov-8-bare-xf-210-v3', 'https://www.inov-8.com/us/bare-xf-210-v3-mens-natural-training-shoe', true],
    ['/shoes/inov-8-bare-xf-210-v3-womens','https://www.inov-8.com/us/bare-xf-210-v3-womens-natural-training-shoe',true],
    ['/shoes/joe-nimble-wandertoes-2.0', 'https://uk.joe-nimble.com/products/wandertoes-w-black', true],
    ['/shoes/lems-boulder-boot-mens','https://www.lemsshoes.com/products/mens-boulder-boot?variant=30946208219194',true],
    ['/shoes/lems-primal-2', 'https://www.lemsshoes.com/products/mens-primal-2?variant=32230129827898', true],
    ['/shoes/merrell-trail-glove-7-gore-tex', 'https://www.merrell.com/US/en/trail-glove-7-gore-tex/58270M.html', true],
    ['/shoes/merrell-vapor-glove-3-luna-leather', 'https://www.merrell.com/UK/en_GB/vapor-glove-3-luna-leather/33382M.html', true],
    ['/shoes/merrell-vapor-glove-5', 'https://www.merrell.com/US/en/vapor-glove-5/48688M.html', true],
    ['/shoes/merrell-vapor-glove-6', 'https://www.merrell.com/US/en/vapor-glove-6/195018950710.html', true],
    ['/shoes/new-balance-minimus-tr-boa', 'https://www.newbalance.com/pd/minimus-tr-boa/MXMTRBW1-D-105.html', true],
    ['/shoes/nike-rival-waffle-6','https://www.nike.com/t/rival-waffle-6-road-and-cross-country-racing-shoes-txWgQr',true],
    ['/shoes/primus-lite-all-weather-mens', 'https://www.vivobarefoot.com/us/primus-lite-iii-all-weather-mens', true],
    ['/shoes/softstar-dash-runamoc', 'https://www.softstarshoes.com/adult-dash-runamoc.html', true],
    ['/shoes/tadeevo-bliss', 'https://tadeevo.com/en_US/p/Tadeevo-Bliss-black-minimalist-shoes/102', true],
    ['/shoes/vibram-five-fingers-v-run', 'https://www.vibram.com/us/shop/fivefingers/men/v-run-mens/M31_2_BlackYellow.html', true],
    ['/shoes/vibram-kso-evo', 'https://www.vibram.com/us/shop/fivefingers/men/kso-evo-mens/M07_BlackRed.html', true],
    ['/shoes/vivobarefoot-geo-court-iii-mens', 'https://www.vivobarefoot.com/us/geo-court-iii-mens', true],
    ['/shoes/vivobarefoot-primus-lite-iii', 'https://www.vivobarefoot.com/us/primus-lite-iii-mens-ss22', true],
    ['/shoes/vivobarefoot-primus-lite-knit-mens', 'https://www.vivobarefoot.com/us/primus-lite-knit-mens', true],
    ['/shoes/vivobarefoot-primus-trail-ii-fg', 'https://www.vivobarefoot.com/us/primus-trail-ii-fg-mens-ss22', true],
    ['/shoes/vivobarefoot-primus-trail-iii-all-weather-fg-womens','https://www.vivobarefoot.com/us/primus-trail-iii-all-weather-fg-womens',true],
    ['/shoes/vivobarefoot-tracker-fg', 'https://www.vivobarefoot.com/us/tracker-ii-fg-mens-ss22', true],
    ['/shoes/xero-360-women','https://xeroshoes.com/shop/shoes/360-women/',true],
    ['/shoes/xero-prio-men', 'https://xeroshoes.com/shop/shoes/prio-men/', true],
    ['/shoes/xero-xcursion-fusion-boot','https://xeroshoes.com/shop/boots/xcursion-men/',true],
    /*['/shoes/','url',true],*/
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
