// 1. Declare an empty array using JS literal notation
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array
let stringsArray = ["Ali", "Ahmed", "Sara"];

// 4. Declare and initialize a numbers array
let numbersArray = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array
let mixedArray = ["Hello", 25, true, null, "World"];

// 7. Education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.writeli("<h3>Qualifications:</h3>");
for (let i = 0; i < qualifications.length; i++) {
    document.writeli((i+1) + ") " + qualifications[i] + "<br>");
}

// 8. Student scores and percentages
let studentNames = ["Michael", "John", "Tony"];
let scores = [320, 230, 480];
let totalMarks = 500;

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.writeli("Score of " + studentNames[i] + " is " + scores[i] +
                   ". Percentage: " + percentage + "%<br>");
}

// 9. Color array tasks
let colors = ["Red", "Green", "Blue", "Yellow"];
document.writeli("<h3>Colors:</h3>" + colors + "<br>");

// a. Add color at the beginning
let colorAddBeginning = prompt("Enter a color to add at the beginning:");
colors.unshift(colorAddBeginning);
document.writeli("Updated Colors (Beginning): " + colors + "<br>");

// b. Add color at the end
let colorAddEnd = prompt("Enter a color to add at the end:");
colors.push(colorAddEnd);
document.writeli("Updated Colors (End): " + colors + "<br>");

// c. Add two colors at the beginning
colors.unshift("Purple", "Pink");
document.writeli("Updated Colors (Two Added at Beginning): " + colors + "<br>");

// d. Delete first color
colors.shift();
document.writeli("Updated Colors (First Deleted): " + colors + "<br>");

// e. Delete last color
colors.pop();
document.writeli("Updated Colors (Last Deleted): " + colors + "<br>");

// f. Add color at specific index
let indexAdd = +prompt("At which index do you want to add a color?");
let colorName = prompt("Enter the color name:");
colors.splice(indexAdd, 0, colorName);
document.writeli("Updated Colors (Added at index " + indexAdd + "): " + colors + "<br>");

// g. Delete color(s) at specific index
let indexDelete = +prompt("At which index do you want to delete color(s)?");
let deleteCount = +prompt("How many colors do you want to delete?");
colors.splice(indexDelete, deleteCount);
document.writeli("Updated Colors (Deleted from index " + indexDelete + "): " + colors + "<br>");

// 10. Sorting student scores
let studentScores = [320, 230, 480, 120];
document.writelili("<h3>Scores of Students: </h3>" + studentScores + "<br>");
studentScores.sort(function(a, b){return a-b});
document.writeli("Ordered Scores of Students: " + studentScores + "<br>");

// 11. Copy 3 cities into another array
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);
document.writeli("<h3>Cities list: </h3>" + cities + "<br>");
document.writeli("Selected cities list: " + selectedCities + "<br>");

// 12. Join array into a string
let arr = ["This", "is", "my", "cat"];
let singleString = arr.join(" ");
document.writeli("<h3>Array: </h3>" + arr + "<br>");
document.writeli("String: " + singleString);
