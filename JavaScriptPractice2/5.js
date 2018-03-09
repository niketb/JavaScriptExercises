/*
  Given two functions f and g, yield a 
  function that first applies f, and if the
  result is falsy (in the JavaScript sense),
  yields the result of applying g if g was
  supplied. Otherwise return the result of
  applying f
*/
function orElse(f, g) {
   return function(x) { 
      if(f(x)) 
         return f(x);
      else {
         h = g || f;
         return h(x);
      }
   }
}
