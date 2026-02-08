/**
 * Handle unexpected function input parameter error
 */

function mul(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'please Provide a number'
    }
    const result = a * b;
    return result;
}

const result = mul(2, 4);
console.log('Multiply Is:', result);

const result2 = mul(2, '4');
console.log('Multiply Is:', result2);

const result3 = mul('2', '4');
console.log('Multiply Is:', result3);

const result4 = mul('2', 'four');
console.log('Multiply Is:', result4);


//full name input neyar validation 

const firstName = "Afifaa";
const secondName = 3;

const firstName2 = "Afifaa";
const secondName2 = "Jannat";


function fullName(firstName, secondName){
    if(typeof firstName !== 'string'){
        return "Enter Your Valid Name in String"
    }
    else if(typeof secondName !== 'string'){
         return "Enter Your Valid Name in String"
    }
    const full = firstName + " " + secondName;
    return full;
}


const full = fullName(firstName, secondName);
console.log("Full Name Is:", full);

const full2 = fullName(firstName2, secondName2);
console.log("Full Name Is:", full2);


//object validation

function price(product){
    if(typeof product !== 'object'){
        return "Please Provide an object";
    }
    const price = product.price;
    return price;
}

const productPrice = price({name: "iphone", price: 100000})
console.log(productPrice)

const productPrice2 = price("tabu")
console.log(productPrice2)

// Array validation as a parameter

function arrayValidatio(array){
    if(Array.isArray(array) === false){
        return "please provide a array";
    }
    const secondIndex = array[1];
    return secondIndex;
}


const array = arrayValidatio([1,3,5]);
console.log(array);

const array2 = arrayValidatio(9);
console.log(array2);