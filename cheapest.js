/**
 * array of object theke will find cheapest price
 * Find the cheapest phone from an array of phone objects
 */

const phones = [
    { name: 'xiaomi', price: 20000, camera: "12mp", color: "black"},
    { name: 'iphone', price: 100000, camera: "12mp", color: "black"},
    { name: 'samsang', price: 95000, camera: "12mp", color: "black"},
    { name: 'vivo', price: 35000, camera: "12mp", color: "black"},
    { name: 'honor', price: 40000, camera: "12mp", color: "black"},
    { name: 'walton', price: 9000, camera: "12mp", color: "black"},
]

function cheapPhone(phones){
    let min = phones[0];
    for(let phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = cheapPhone(phones);
console.log("The Cheapest One Is: ", cheap);