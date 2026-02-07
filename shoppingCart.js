/**
 * Calculate the total cost of the products in a shopping cart with quantity
 */

const products = [
    {name: "shampo", price: 600, quantity: 2},
    {name: "body_lotion", price: 500, quantity: 2},
    {name: "chiruni", price: 200, quantity: 2},
    {name: "shirt", price: 900, quantity: 2},
    {name: "pant", price: 1200, quantity: 2},
]

function totalShoppingCart(products){
    let total = 0;
    for(let product of products){
        let thisProductPrice = product.price * product.quantity;
        total = total + thisProductPrice;
    }
    return total;
}

const totalCost = totalShoppingCart(products);
console.log("Total Cost are: ", totalCost);