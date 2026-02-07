/**
 * Calculate the total cost of the products in a shopping cart
 */

const products = [
    {name: "shampo", price: 600},
    {name: "body_lotion", price: 500},
    {name: "chiruni", price: 200},
    {name: "shirt", price: 900},
    {name: "pant", price: 1200},
]

function totalCostOfProducts(products){
    let total = 0;
    for(let product of products){
        total += product.price;
    }
    return total;
}

const totalCost = totalCostOfProducts(products);
console.log("Total Cost are: ", totalCost);