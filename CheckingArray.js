// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.



const books = ["JavaScript: The Good Parts", "Eloquent JavaScript", "Clean Code", "You Don't Know JS", "Java: The Complete Reference"];


const hasJavaScriptBook = books.includes("JavaScript: The Good Parts");


if (hasJavaScriptBook) {
    console.log("The array contains a JavaScript book.");
} else {
    console.log("The array does not contain a JavaScript book.");
}
console.log(hasJavaScriptBook);