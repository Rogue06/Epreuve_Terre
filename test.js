//console.log(__filename.split("/").pop());
console.log("### SOLUTION 2 ###");

const afficherArgument = (argument, index) => {
  if (index > 1) {
    console.log(argument);
  }
};

arguments.forEach(afficherArgument);
