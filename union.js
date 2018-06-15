/*Write a JavaScript program to compute the union of two arrays.
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]*/


// Method #1
function union(array1, array2) {
	//by putting declaring inside of the  function, it encapsulates it
	//this function can now be used anywhere

	// let unionArray = [];
	// for(let i =0; i < array1.length; i++) {
	// 	unionArray.push(array1[i]);
	// }
	// for(let j=0; j< array2.length; j++) {
	// 	//if(unionArray.includes())
	// 	unionArray.push(array2[j]);
	// }
	// return unionArray
	return array1.concat(array2);
}



//Method #2
// function onlyUnique(value, index, self){
// 	//value - what you want to get
// 	//indexOf - is where it is
// 	//self is the type
// 	//returns a boolean; it compares
// 	return index === self.indexOf(value);
// }

//Results
// create a new Array that calls the method you created
let unionArray = union([1, 2, 3], [100, 2, 1, 10]);
console.log("My new Array " + unionArray);

//this filters the array that was just created and prints but 
//does not change the original array and returns a new array that satisfies the conditions
// console.log(unionArray.filter(onlyUnique)); //refactored...commented the onlyUnique Method out
console.log("ODD :" + unionArray.filter((x=> x%2==1 )));
console.log("EVEN :" + unionArray.filter((x=> x%2==0 )));
console.log("unionArray :" + unionArray.filter((value, index, self)=>{ return index === self.indexOf(value)}));
console.log("unionArray2 :" + unionArray.filter((a, b, c)=>{ return b === c.indexOf(a)}));
console.log("Original " + unionArray)