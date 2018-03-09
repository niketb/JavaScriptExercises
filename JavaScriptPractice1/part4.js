function correspondingElements(as) {
   return as.reduce(function (pa, ca, ia, aa) { 
      temp = ca.map(function(e, ie){
         //console.log("pa: " + pa + "  " + "ca: " + ca + "  " + "ai: " +  ia + "  " + "aa: " + aa + "  " + "e: " + e + "  " + "ie: " + ie + "\n");
         return [e];
      })
      if(ia === 0) {
            pa = temp;            
      } else {
            pa = pa.map(function(a, ia) {
               return pa[ia].push(temp[ia]);
            }); 
      }
      return pa;
   }, []);
}
//    console.log(mapArr);
   
//    var redArr1 = [];
//    redArr1 = mapArr.reduce(function(p, c, arr) {
      
//    }, []);

//    console.log(redArr1);
   
//    var redArr2 = [];
//    redArr2 = redArr1.reduce(function(p, c, arr) {
//       p[c[2]].push(c[0]);
//    }, []);
   
//    console.log(redArr2);

//    return redArr2;

console.log(correspondingElements([[1, 4, -9, 16], ["a", "b", "c", "d"]]));
console.log(correspondingElements([[1, 4, -9, 16], ["a", "b", "c", "d"], [1, 2, 0, 4]]));