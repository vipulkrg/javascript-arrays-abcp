var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
console.log(chocolateBars)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";

// console.log(inputarray)
// console.log(inputelement)

function addElementToBeginningOfArray(inputarray, inputelement) {
  newarray1 = [inputelement, ...inputarray];
  console.log(newarray1)
}

addElementToBeginningOfArray(inputarray,inputelement)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";


function destructivelyAddElementToBeginningOfArray(inputarray, inputelement) {
  newarray2 = inputarray;
  newarray2[0] = inputelement;
  console.log(newarray2)
}

destructivelyAddElementToBeginningOfArray(inputarray, inputelement)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";

function addElementToEndOfArray(inputarray, inputelement) {
  newarray3 = [...inputarray,inputelement];
  console.log(newarray3)
}

addElementToEndOfArray(inputarray, inputelement)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";

function destructivelyAddElementToEndOfArray(inputarray, inputelement) {
  newarray4 =  inputarray;
  newarray4[2] = inputelement;
  console.log(newarray4)
}

destructivelyAddElementToEndOfArray(inputarray, inputelement)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";


function destructivelyRemoveElementFromBeginningOfArray(inputarray) {
  newarray5 = inputarray;
  newarray5.shift()
  console.log(newarray5)
}

destructivelyRemoveElementFromBeginningOfArray(inputarray)

var inputarray = ["Philadelphia", "New York", "San Francisco"];
var inputelement = "Felix";


function removeElementFromBeginningOfArray (inputarray) {
  newarray6 = inputarray;
  console.log(newarray6.slice(1))
  console.log(inputarray)
}

removeElementFromBeginningOfArray (inputarray)



