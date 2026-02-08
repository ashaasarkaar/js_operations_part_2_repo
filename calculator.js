/**
 * Make a Simple Calculator to call function inside a function
 */

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function mod(num1, num2){
    return num1 % num2;
}

function calculator(num1, num2, operation){
    if( operation === "add"){
        const result = add(num1, num2);
        return result;
    }
    else if( operation === "subtract"){
        const result = sub(num1, num2);
        return result;
    }
    else if( operation === "multiply"){
        const result = mul(num1, num2);
        return result;
    }
    else if( operation === "divide"){
        const result = divide(num1, num2);
        return result;
    }
    else if( operation === "modulus"){
        const result = mod(num1, num2);
        return result;
    }
} 

const result = calculator(2, 3, "multiply");
console.log(result);