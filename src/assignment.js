// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
let arrayOfNumbers = [68,-68,27,94,72,-25,-51,32,10,64,-94, 4,34,-86,90,81,20,-56,-91,-50];
 function sumOfNumbers(arrayOfNumbers) {
   let sum = 0
   for (let j=0; j<arrayOfNumbers.length; j++) 
   {sum +=arrayOfNumbers[j];}
     return sum;
 }
 console.log (sumOfNumbers(arrayOfNumbers))
  assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
 let arrayOfCelcius = [17,0,67,41,49,21,1,86,76,2,54,14,93,84,14,77,35,7,29,64];
 function countEvenNumbers(arrayOfCelcius){
   var count = 0;
     for ( var i = 0; i<arrayOfCelcius.length; i++ ){ 
       if (arrayOfCelcius[i] % 2 == 0){
         count++;
       }
     }
     return count;
   };

   console.log (countEvenNumbers(arrayOfCelcius))

  assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */

// const arrayOfFahrenheit = [24, 30, 14, -8, 22, 17, -5, 25, 2, 25, 10, 10, 28, 33, 39, 28, 23, -1, 2, -4];
//  let arrayOfCelcius = [];
//  function celsiusToFahrenheit(arrayOfFahrenheit)
//  { let index = 0;
//   arrayOfCelcius.length == arrayOfFahrenheit.length;
// while (index<arrayOfFahrenheit.length ) { 
//  arrayOfCelcius = (arrayOfFahrenheit[index] * 9/5) + 32;     
//   console.log (Math.trunc(arrayOfCelcius)); 
//    index++;
//    } 
//  }
//     celsiusToFahrenheit(arrayOfCelcius)

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

 


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================