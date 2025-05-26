/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 
const numA = 3
const numB = 5
const resultObj = {
  	status: "", 
  	message: "", 
  	data: {
  		number: 0, 
  		result: "" 
  	}
}

function fizzBuzzMain(input){
    console.log(input)
    resultObj.status = input ? "OK" : "NOK"; resultObj.message = `Introduce un valor correcto.`;
    if(resultObj.status=="OK"){
        resultObj.data.number = input
        fizzBuzzCalc(input)
    }
    console.log(resultObj, resultObj.data)
    return resultObj
}

function fizzBuzzCalc(num){
    let result = 0
    if (num%numA==0) {result += 1}
    if (num%numB==0) {result += 2}
            switch(result){
            case 0: 
                resultObj.data.result = "Poof";
                resultObj.message = `El número no es divisible por los valores establecidos.`;
                break;
            case 1: 
                resultObj.data.result = "Fizz";
                resultObj.message = `El número es divisible por ${numA}.`;
                break;
            case 2: 
                resultObj.data.result = "Buzz";
                resultObj.message = `El número es divisible por ${numB}.`;
                break;
            case 3: 
                resultObj.data.result = "FizzBuzz";
                resultObj.message = `El número es divisible por ${numA} y ${numB}.`;
                break;
        }
}