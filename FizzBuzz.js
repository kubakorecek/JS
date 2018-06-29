"use strict";
/*  This function should show all numbers from 1 - 100, when it is divisible by 3, then print 
    Fizz, for divisibility by 5 and not 3 print Buzz
*/


function FizzBuzz_A(){
	for( let i = 0; i < 101;i++){
		if( i % 3 == 0){		
		console.log(i, 'Fizz');
				}
		else if(i % 3 != 0 & i % 5 ==0){
			console.log(i, 'Buzz');
				   }	
	}
}
/*  This function should show all numbers from 1 - 100, when it is divisible by 3, then print 
    Fizz, for divisibility by 5 and not 3 print Buzz, for divisibilty by 3,5 print FizzBuzz
*/
function FizzBuzz_B(){
	for( let i = 0; i < 101;i++){
		if( i % 3 == 0 & i % 5 !=0){		
		console.log(i, 'Fizz');
				}
		else if(i % 3 != 0 & i % 5 ==0){
			console.log(i, 'Buzz');
				   }
		else if(i % 3 == 0 & i % 5 ==0){
			console.log(i, 'FizzBuzz');
				   }	
	}
}


function main(){
	console.log('Version A')
	FizzBuzz_A();
	console.log('Version B');
	FizzBuzz_B();
	}
main();
