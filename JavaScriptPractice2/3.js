/*
  Compute the minimum element in the (possibly sparse) array a, skipping
  any non-existent elements. (Hint: forEach)
  If there are no elements, return undefined.
  If a comparison function is provided, use it to compare elements.
  Otherwise, convert elements to strings and convert them. (That 
  may sound bizarre, but it is exactly what Array.prototype.sort does.)
*/
function min(a, comp) {
    if(a.length === 0) {
      //console.log("if 1");
      return undefined;
    }
    else {
      //console.log("else 1");
      var m;
      //console.log(m);
      a.forEach(function(e, i, arr){
         //console.log(i + " = " + e); 
         if(m === undefined) {
            //console.log("if 2");
            m = e;
            //console.log(m);
         }
         else {
            //console.log("else 2 ");
            var cf = comp || function(x,y){ String(x) - String(y); };
            if (cf(e, m) < 0)
              m = e;        
         }
      }, this);
      //console.log("final value = " + m);
      return m;
   }
}