function comp(x, y) {
    return x == y ? 0 : x < y ? -1 : 1;
}

/*
  Given one or two "key extraction functions", yield a comparator
  that compares its arguments by applying the first key extraction
  function to both objects and comparing the result (which is expected
  to be a number). If there is a tie, and there is a second function
  supplied, use it in the same way.
*/
function compare(fun1, fun2) {
   return function(a, b) { 
      if(fun1(a) === fun1(b)) {
         var cf = fun2 || fun1;
         return comp(cf(a), cf(b));
      } else {
         return comp(fun1(a), fun1(b));
      }
   }
}
