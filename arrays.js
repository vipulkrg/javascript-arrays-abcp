var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
console.log(chocolateBars)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";

console.log(inputarray)
console.log(inputelement)

function addElementToBeginningOfArray(inputarray, inputelement) {
  newarray = [inputelement, ...inputarray];
  console.log(newarray)
}

function destructivelyAddElementToBeginningOfArray(inputarray, inputelement) {
  newarray = inputarray;
  newarray[0] = inputelement;
  console.log(newarray)
}

function addElementToEndOfArray(inputarray, inputelement) {
  newarray = [...inputarray,inputelement];
  console.log(newarray)
}

function destructivelyAddElementToEndOfArray(inputarray, inputelement) {
  newarray =  inputarray;
  newarray[2] = inputelement;
  console.log(newarray)
}

addElementToBeginningOfArray(inputarray,inputelement)
destructivelyAddElementToBeginningOfArray(inputarray, inputelement)
addElementToEndOfArray(inputarray, inputelement)
destructivelyAddElementToEndOfArray(inputarray, inputelement)