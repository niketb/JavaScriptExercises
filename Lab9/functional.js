var foldl = function (f, acc, array) {
	//reduce(array, f, 0);

	for(var i = 0; i < array.length; i++) {
		acc = f(acc, array[i]);	
	}
	return acc;
}

console.log(foldl(function(x,y){return x+y}, 0, [1,2,3]));

var foldr = function (f, z, array) {
	for(var i = array.length - 1; i >= 0; i--) {
		acc = f(array[i], acc);	
	}
	return acc;
}

console.log(foldl(function(x,y){return x/y}, 1, [2,4,8]));

var map = function (f, array) {
	var output = [];

	for(var i = 0; i < array.length; i++) {
		output[i] = f(array[i]);	
	}
	return output;
}

console.log(map(function(x){return x+x}, [1,2,3,5,7,9,11,13]));


// Write a curry function as we discussed in class.
// Create a `double` method using the curry function
// and the following `mult` function.
function mult(x,y) {
  return x * y;
}

Function.prototype.curry = function() {
  var slice = Array.prototype.slice,
      args = slice.apply(arguments),
      that = this;
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
};


var double = mult.curry(2);

console.log(double(5));

function Student(firstName, lastName, studentID) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.studentID = studentID;
  this.display = function() { console.log("First Name: " + this.firstName + " Last Name: " + this.lastName + " Student ID: " + this.studentID); }
}

var studentList = [];

studentList[0] = new Student("Niket", "Bhodia", "012451556");

studentList[0].display();

studentList[0].graduated = "No";

studentList[0].display = function() { console.log("First Name: " + this.firstName + " Last Name: " + this.lastName + " Student ID: " + this.studentID + " Graduated: " + this.graduated); }

studentList[0].display();

studentList[1] = {__proto__: Student};
studentList[1].firstName = "Hari";
studentList[1].secondName = "Seldon";
studentList[1].studentID = "314159265";

studentList[1].display();