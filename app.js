//                                            Question # 1

// var input = prompt("Enter a character or number");
// if (input >= 'A' && input <= 'Z') {
//     console.log(input + " is an uppercase letter.");
// } else if (input >= 'a' && input <= 'z') {
//     console.log(input + " is a lowercase letter.");
// }  else {
//     console.log(input + " is an invalid input.");
// }

//                                               Question # 2

// var userNum1 = +prompt("Enter first number");
// var userNum2 = +prompt("Enter second number");
// if(userNum1>userNum2){
//     console.log(userNum1  + "  is larger than  "  +   userNum2 );
// }
// else if(userNum1<userNum2){
//     console.log(userNum2  + "  is larger than  "  +   userNum1);
// }
// else{
//     console.log("both numbers are equal");
// }

//                                                  Question # 3

// var num = +prompt("Enter any number");
// if (num > 0) {
//     console.log(num + " is positive.");
// } else if (num < 0) {
//     console.log(num + " is negative.");
// } else {
//     console.log(num + " is zero.");
// }

//                                                   Question # 4

// var userCharacter = prompt("Enter any character");
// if (userCharacter==="a" || userCharacter==="e" || userCharacter==="i" || userCharacter==="o"|| userCharacter==="u"){
// console.log("True");
// }
// else{
//     console.log("False");
// }

//                                                    Question # 5

// var correctPassword = "myPassword123"; 
// var userPassword = prompt("Please enter your password:");

// if (userPassword === "") {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

//                                                        Question # 6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

//                                                          Question # 7

// var hour = +prompt("Enter a time");
// if (hour >= 0 && hour < 12) {
//     console.log("Good Morning!");
// } else if (hour >= 12 && hour < 17) {
//     console.log("Good Afternoon!");
// } else if (hour >= 17 && hour < 21) {
//     console.log("Good Evening!");
// } else if (hour >= 21 && hour <= 24) {
//     console.log("Good Night!");
// } else {
//     console.log("Invalid hour. Please enter a time between 0 and 24.");
// }