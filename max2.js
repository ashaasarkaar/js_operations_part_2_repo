/**
 * who will get the straberry?
 * find max numbers between two numbers.
 * you can do it from different angle.
 */

// simple and 1st way to find max number

const salaat = 98;
const azaan = 78;
if(salaat > azaan){
    console.log(salaat);
}
else{
    console.log(azaan);
}

// way - 2

const num1 = 78;
const num2 = 67;
function getMaxNumber(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const maxNumber = getMaxNumber(num1, num2)
console.log(maxNumber)
const max1 = getMaxNumber(45, 78)
const max2 = getMaxNumber(67, 90)
const ultimetMax = getMaxNumber(max1, max2)
console.log(ultimetMax)




