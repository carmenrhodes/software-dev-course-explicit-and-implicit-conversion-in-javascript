/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.



*Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.
*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log(Boolean("This is valid!"));
}

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

let notANumber = NaN;
console.log(typeof notANumber);
console.log(Boolean(notANumber));
console.log(typeof Boolean(notANumber))

let assignmentGrade = "You got a " + 95;
console.log(assignmentGrade);
console.log(typeof 95);
console.log(typeof assignmentGrade);