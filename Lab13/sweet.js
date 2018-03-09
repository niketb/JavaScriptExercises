syntax rotate = function (ctx) {
	var inCtx = ctx.contextify(ctx.next().value);
	
	var first = inCtx.next().value;
	var second;

	var temp = first;
	var result = #`var temp = ${first}; `;
	
	for(second of inCtx) {
		result = result.concat(#`${first} = ${second}; `);
		first = second;
	}
	
	var result = result.concat(#`var ${second} = ${temp}; `);
	return result; 
}

console.log(rotate(1, 2, 3, 4));
//What is our input?
//rotate(1, 2, 3, 4);

//What is the desired output?
//2, 3, 4, 1

//What do we want the macro to write?
//var temp = first;
//var first = second;
//...
//var second = temp;
