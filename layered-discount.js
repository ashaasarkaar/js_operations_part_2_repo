/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
 */

function layeredDiscountPrice(productQuantity){
    const first100Price = 100;
    const second200Price = 90;
    const above200Price = 70;
    if(productQuantity <= 100){
        const price = productQuantity * first100Price;
        return price;
    }
    else if(productQuantity <= 200){
        const firstLayerPrice = first100Price * 100;
        const remainingProductQuantity = productQuantity - 100;
        const remainingTotalProductPrice = remainingProductQuantity * second200Price;
        const price = firstLayerPrice + remainingTotalProductPrice;
        return price;
    }
    else{
         const firstLayerPrice = first100Price * 100;
        const secondLayerPrice = second200Price * 100;
        const remainingProductQuantity = productQuantity - 200;
        const remainingTotalProductPrice = remainingProductQuantity * above200Price;
        const price = firstLayerPrice + secondLayerPrice + remainingTotalProductPrice;
        return price;
    }

}

const totalPrice = layeredDiscountPrice(150)
console.log("Total Price is:", totalPrice)

