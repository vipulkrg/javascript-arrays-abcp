var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
console.log(chocolateBars)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";

console.log(inputarray)
console.log(inputelement)

function addElementToBeginningOfArray(inputarray, inputelement) {
  newarray1 = [inputelement, ...inputarray];
  console.log(newarray1)
}

function destructivelyAddElementToBeginningOfArray(inputarray, inputelement) {
  newarray2 = inputarray;
  newarray2[0] = inputelement;
  console.log(newarray2)
}

function addElementToEndOfArray(inputarray, inputelement) {
  newarray3 = [...inputarray,inputelement];
  console.log(newarray3)
}

function destructivelyAddElementToEndOfArray(inputarray, inputelement) {
  newarray4 =  inputarray;
  newarray4[2] = inputelement;
  console.log(newarray4)
}

addElementToBeginningOfArray(inputarray,inputelement)
destructivelyAddElementToBeginningOfArray(inputarray, inputelement)
addElementToEndOfArray(inputarray, inputelement)
destructivelyAddElementToEndOfArray(inputarray, inputelement)