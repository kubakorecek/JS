"use strict";
/* Use ChessBoard_HTML adn Console outop to see code */

let size = prompt('Choose size of the boad:');
Board(size)
console.log(size);
function Board(size){
	//console.log('p');
	for(let row=1;row <= size;row++){
		let StringRow = "";
		for(let col=1; col <=size; col++){
			if ((col + row) % 2 ==0){
				//console.log('if',col+row);
				StringRow +=" ";}
			else{
				//console.log('else',col+row);
				StringRow +="#";
					}
						}
			console.log(StringRow);
	}
}
