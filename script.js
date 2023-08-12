function decimalToBinary(num) {
  //Write you code here
	  if (num === 0) {
        return '0';
    }

    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }

    return binary;
}

window.decimalToBinary = decimalToBinary;
You can use this code in a web environment where you have access to the window object. The decimalToBinary function takes a decimal number as input and returns its binary representation. You can call this function using window.decimalToBinary(number) and pass the decimal number you want to convert.






  
}

window.decimalToBinary = decimalToBinary;
