const { fail } = require('assert');
let mateBasica = require('./math');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  var option = 0
  const prompt = require('prompt-sync')();
  while(option != 6){
  var number1 = prompt('Enter the first number ');
  var number2 = prompt('Enter the second number');

  option = prompt('1->Sum 2-> Substract 3-> Divide 4->Module 5->Product 6-> Exit');
  

  switch(option){
    case "1":
        console.log(mateBasica.suma(number1,number2))
        break
    case "2":
        console.log(mateBasica.resta(number1,number2));
        break
    case "3":
        console.log(mateBasica.division(number1,number2));
        break
    case "4":
        console.log( mateBasica.modulo(number1,number2));
        break
	case "5":
        console.log( mateBasica.producto(number1,number2));
        break
	case "6":
        setTimeout((function() {
			console.log("Thanks for using the calculator");
			return process.exit(22);
		}), 500);
  }
  }
