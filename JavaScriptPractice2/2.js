/*
  Provide a function repeat that repeats a given function
  at least once until a given condition is true. 
*/
function repeatUntil(f, cond) {
   return function(x) {
      let acc = f(x);
      console.log(acc);
      while(!cond(acc)) {
         acc = f(acc);
         console.log(acc);
      }
      return acc; 
   };
}

var r = repeatUntil(function(x) { return x + x }, function(x) { return x >= 20 })
console.log(r(2));
console.log("Expected: 32");
console.log(r(10));
console.log("Expected: 20");
console.log(r(20));
console.log("Expected: 40");

// r = repeatUntil(function(x) { return x + x }, function(x) { return x.length() >= 10 });

// console.log(r("Hello"));
// console.log("Expected: HelloHello");