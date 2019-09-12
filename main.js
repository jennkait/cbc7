//CONDITIONAL EXERCISES
//exercise 1

var i = 2;
i += 5;
i *= 2;
console.log(i);
i = i%3;
//remainder 2
console.log(i);
i = i%2;
//return 0

//exercises 2 & 3

if (i === 0) {
    console.log("yay");
} else {
    console.log("uneven variable");
}

//exercise 4

if (i > 10 || i < 20 || i <= 0 || i >= 5) {
    console.log("Your variable is cool");
} else {
    console.log("Your variable is lame");
}

//exercise 5

if (i === 0) {
    console.log("You are the winner");
}
if (i > 5) {
    console.log("The variable is a number above 5");
}
if (i < 5) {
    console.log("The variable is between 0 and 4");
}
//when you use the if else statement the computer stops once all of the conditions in the if statement are met. if the statements are not met then it returns the else result. the computer checks all of the if statements indivdually in exercise 5

//LOOP EXERCISES
//exercise 1

var i = 0;

//exercise 2

i += 1;
for (var i = 0; i < 50; i++) {
    console.log(i);
}

//exercise 3

var i = 0; 
while (i < 50) {
    console.log(i);
    i += 2
}

//exercise 4

for (i = 0; i < 100; i++) {
    if (i%3 === 0) {
        console.log("fizz");
    } else if (i%5 === 0) {
        console.log("buzz");
    } else if (i%3 === 0 && i%5 === 0) {
        console.log("fizzbuzz");
    }
}

//FUNCTIONS EXERCISES
//exercise 1

function pbandj (peanutbutter, jelly) {
    return (peanutbutter + jelly);
}

//exercise 2

function multi (cat, dog) {
    return (cat * dog);
}

//exercise 3 
function inbetween (1, 50) {
    for (i = 1; i < 50; i ++){
        console.log(i);
    }
}

//exercise 4
const globalVar = 11
function addGlobalVar(number) {
    var endNum = globalVar + number;
    console.log(endNum);
    return endNum;
}

//exercise 5
(function () {
    console.log("Yay! An IIFE!");
})()