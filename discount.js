/**
 * upto 100: ---> 100
 * more than 101-200: ---> 90
 * more than 200: ---> 70
 */


function discountPrice(quantity){
    const first100 = 100;
    const second200 = 90;
    const above200 = 70;
    if(quantity <= 100){
        const price = quantity * first100;
        return price;
    }
    else if(quantity <= 200){
        const price = quantity * second200;
        return price;
    }
    else{
        const price = quantity * above200;
        return price;
    }
}
const totalPrice = discountPrice(50);
console.log("Total Price Is:", totalPrice);
const totalPrice2 = discountPrice(101);
console.log("Total Price Is:", totalPrice2);
const totalPrice3 = discountPrice(201);
console.log("Total Price Is:", totalPrice3);