/** 
 * Who Is the Tallest? Find The Max Number In An Array
*/

function maxNumber(numbers){
    let max = numbers[0];
    for(let number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}
const array = [12, 45, 90, 78, 98, 100];
const maxNum = maxNumber(array);
console.log("Max Value is:", maxNum);