function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null
    if (discountRate < 0 || discountRate > 1) return null;
    return price - (price * discountRate);
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return []
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    const sorted = [...inventory] // creates a shallow copy to not alter the original
    sorted.sort((a,b) => {
        if(a[key] < b[key]) return -1; //when a comes before b
        if(a[key] > b[key]) return 1; //when b comes before a
        return 0; //a and b are equal
    }) 
    return sorted;
}

module.exports = {calculateDiscount, filterProducts, sortInventory};