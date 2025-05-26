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
const resultObj = {
  	status: "", 
  	message: "", 
  	data: {
  		number: 0, 
  		result: "" 
  	}
}

function fizzBuzzMain(){
    let input = domInput()
    resultObj.status = input ? "OK" : "Error"
    if(resultObj.status=="OK"){
        resultObj.data.number = input
        resultObj.data.result = fizzBuzzCalc(input)
    }
    console.log(resultObj, resultObj.data)
}

function fizzBuzzCalc(num){
    const numA = 3
    const numB = 5
    let result = 0
    let aux = ''
    if (num%numA==0) {result += 1}
    if (num%numB==0) {result += 2}
    switch(result){
        case 0: aux = "igual"; break;
        case 1: aux = "fizz"; break;
        case 2: aux = "buzz"; break;
        case 3: aux = "fizzbuzz"; break;
    }
    return aux
}