function operations (number, number2, operator){

    let result = 0;

    switch(operator){
        case "+":
            result = number + number2;
            break;
        case "-":
            result = number - number2;
            break;
        case "*":
            result = number * number2;
            break;
        case "/":
            result = number / number2;
            break;
        case "%":
            result = number % number2;
            break;
        case "**":
            result = number ** number2;
            break;
    }
    console.log(result);
}