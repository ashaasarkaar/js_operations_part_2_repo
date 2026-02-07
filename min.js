function minPrice(numbers){
    let min = numbers[0];
    for(let number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}
const prices = [20000, 15000, 30000, 100000, 11000];
const min = minPrice(prices);
console.log("Minimum Price Is: ", min);