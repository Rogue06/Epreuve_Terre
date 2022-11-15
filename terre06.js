function reverseString (s) {
    return s
    .split("") // convert string to array
    .reverse() // reverse array
    .join("")  // finally, convert array back to string
    ;
}

console.log(
    reverseString(
    process.argv
        .slice(2)  // remove executable (nodejs) and script (test.js)
        .join(" ") // convert array of arguments to string and restore spaces between them
    )
);