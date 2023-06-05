
//1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

function convertFahrenheitToCelsius(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        return celsius;
      }

    let fahrenheitTemperature = 60;
    let celsiusTemperature = convertFahrenheitToCelsius(fahrenheitTemperature);
    console.log(Math.round(celsiusTemperature));

//Answer would be 16


//2. Create a function that will calculate the average of numbers in an array.

function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    const average = sum / numbers.length;
    return average;
  }

let numberArray = [10, 20, 30, 40, 70];
let averageResult = calculateAverage(numberArray);
console.log(averageResult);

//Answer would be 34   
 

//3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    } else {
      return false;
    }
  }

let num = 12;
let divisor1 = 3;
let divisor2 = 7;

let isDivisibleResult = isDivisible(num, divisor1, divisor2);
console.log(isDivisibleResult);

//Answer would be false


//4. Create a function that will output the first 100 prime numbers.

function generatePrimes(count) {
    let primes = [];
    let num = 2;
  
    while (primes.length < count) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes;
  }
  
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

let primeNumbers = generatePrimes(100);
console.log(primeNumbers);

//Answer would be (100) [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
// 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103,
// 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
// 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241,
// 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 
//331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401,
// 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479,
// 487, 491, 499, 503, 509, 521, 523, 541]


//5. Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  let number = 17;
  let isPrimeResult = isPrime(number);
  console.log(isPrimeResult);

//Answer would be true

//6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(numbers) {
    let positiveNumbers = numbers.filter(function(number) {
      return number > 0;
    });
    return positiveNumbers;
  }

let numArray = [2, -5, 10, -13, 19, -20];
let positiveNumArray = getPositiveNumbers(numArray);
console.log(positiveNumArray);

//Answer would be 2, 10, 19

//7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  

//Answer is to be viewed on the console


//8. The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria;
//It must start with a hash symbol, #.
//Ignore all spaces in the input.
//All words must have their first letter capitalized.
//If the final result is going to be longer than 140 characters, it should return false.
//If the input or result is an empty string, it should return false.

function generateHashtag(input) {
    // Remove spaces and split the input into an array of words
    let words = input.trim().split(" ");
  
    // Capitalize the first letter of each word
    let capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the words and add the hashtag symbol
    let hashtag = "#" + capitalizedWords.join("");
  
    // Check the length of the hashtag
    if (hashtag.length > 140 || hashtag.length === 1) {
      return false;
    }
  
    return hashtag;
  }

  let inputString = "Hello world, this is a hashtag generator";
  let hashtagResult = generateHashtag(inputString);
  
  if (hashtagResult) {
    console.log(hashtagResult);
  } else {
    console.log("Hashtag generation failed.");
  }

//Answer would be #HelloWorld,ThisIsAHashtagGenerator
  

  