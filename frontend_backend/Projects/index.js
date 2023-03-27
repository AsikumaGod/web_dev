let num1 = 12;
if (num1 % 3 === 0 && num1 % 5 === 0)
    console.log("FizzBuzz");
else if (num1 % 5 === 0)
    console.log("Buzz");
else if (num1 % 3 === 0)
    console.log("Fizz");
else
    console.log(num1)