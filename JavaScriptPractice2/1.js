/*
  The scan function has three arguments: an array, a function with
  two arguments, and an initial value. Apply f as follows:

        f
       / \
      f   a[2]
     / \
    f   a[1]
   / \
init  a[0]

  and return an array of all function results.

*/
function scan(a, init, f)
{
   return a.reduce(function(p, c, i, arr) {
      if(i === 0) {
         p.push(f(init, c));
         return p;
      } else {
         p.push(f(p[p.length - 1], c));
         return p;
      }
   }, []); 
}
