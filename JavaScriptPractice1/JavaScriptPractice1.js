/**
   Turn an array of strings containing integers into an array
   of integers. Don't use a loop, and don't use recursion.
*/
function toNums(a) {
    return a.map(function(x) {
       return Number(x);
    });
}

/**
   Given an array of numbers, return the product of the square roots 
   of the non-negative ones. Use filter/map/reduce. Don't use a loop,
   and don't use recursion.
*/
function prodNonNegRoots(a) {
    return a.filter(function(x) { return x >= 0; })
            .map(function(e){ return Math.sqrt(e); })
            .reduce(function(p, c, arr){ return arr === [] ? 0 : p * c }, 1);
}


/**
   Given two arrays of equal lengths, return an array of pairs (i.e.
   arrays of length 2) of corresponding entries. Don't use a loop,
   and don't use recursion.
*/
function correspondingPairs(a, b) {
    return a.map(function(x, i) { 
         return [x, b[i]];
    });
}


/**
   Given an array of integers and an array of strings, produce
   a string that associates the integers with the strings, like
   this: [3, 2, 1], ["french hens", "turtle doves", 
   "Partridge in a pear tree"] ->
   "3 french hens, 2 turtle doves, and 1 partridge in a pear tree"
   Note the spaces after the numbers, commas after the strings,
   and the word "and " before the last item.
   You can assume that the two arrays have equal length.
   Use reduceRight. No loops, no recursion. 
*/
function numsAndStrings(nums, strings) {    
    if (nums.length == 0) return ""
    return nums.reduceRight(function(p, c, i, a) {
      if(i === a.length - 1)
         return "and " + nums[i] + " " + strings[i] + p;
      else
         return nums[i] + " " + strings[i] + ", " + p;
    }, "") 
}
