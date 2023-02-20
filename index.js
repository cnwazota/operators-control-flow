//Question 3

let studentChoice = "Socialscience";

let Science = "Physics, Chemistry, Biology, Technical Drawing";
let Socialscience = "Accounting, Commerce, Marketing, Geography";
let Arts = "Government, Economics, Literature, History";
let General = "English, Mathematics";

if (studentChoice === "Science") {
    console.log(General + ", " + Science);
} else if (studentChoice === "Socialscience") {
    console.log(General + ", " + Socialscience);
} else if (studentChoice === "Arts") {
    console.log(General + ", " + Arts);
} else {
    console.log(General);
}

// Question 5 (A program that finds the power of 2 nearest to that number)

let num = 1900;      // takes positive Number
let pwr = [];       // an empty list that stores the values of 2 ** n; where n is 0 all the way to the number of interest
let note;           // a variable for keeping track of value of the powers

for (let i = 1; i <= num; i++) { // a for loop iterating from 1 up to the number of interest
    note = 2 ** i;               // power operation
    pwr.push(note);              // appends each power after every iteration to the pwr list
}

let closest = pwr[0];            // variable to keep track of the closest power of 2 nearest to the number of interest

for (x of pwr) {
    if (Math.abs(x - num) < Math.abs(closest - num)) {
        closest = x;
    }
}

console.log("The number", closest, "is the power of 2 nearest to", num); // log answer


