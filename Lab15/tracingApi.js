function Target(name) { this.name = name; this.speak = function() {console.log ("My name is " + this.name);}}
let target1 = new Target("target1");
let handler = {
	set: function(target, property, value, receiver) {console.log("set trap called: " + property + " property was created for object " + target.name);},
	has: function(target, property) {console.log("has trap called: " + property + " property was checked for object " + target);},
	get: function(target, property, receiver) {console.log("get trap called: " + property + " property was retrieved for object " + target);},
	apply: function(target, thisArg, argumentsList) {
		console.log("apply trap called: " + target + " was applied to the arguments " + argumentsList.toString());
		return 0;
	},
	construct: function(target, argumentsList, newTarget) {
		console.log("construct trap called: " + newTarget + " object was created from the prototype " + target);
		return {value: argumentsList[0]};
	},
	deleteProperty: function(target, property) {console.log("deleteProperty trap called: " + property + " property was removed from object " + target);}
}

proxy1 = new Proxy(target1, handler);
proxy1.value = 10;
console.log(proxy1.value);
let bool = 	"value" in proxy1;
let v = proxy1.value;
delete proxy1.value;
console.log(proxy1.value);
proxy2 = new Proxy(Target, handler); //This statement is not triggering the "construct" trap
proxy2("target2");
new proxy2();
proxy1.speak;

