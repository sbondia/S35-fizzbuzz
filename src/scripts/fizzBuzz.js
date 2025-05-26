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

function fizzBuzzMain(input){
    const resultObj = {
        status: "", 
        message: "", 
        data: {
            number: 0, 
            result: "" 
        }
    }
    //console.log(input)
    resultObj.status = input ? "OK" : "NOK"; resultObj.message = `Introduce un valor correcto.`;
    if(resultObj.status=="OK"){
        resultObj.data.number = input
        fizzBuzzCalc(input, resultObj)
    }
    //console.log(resultObj, resultObj.data)
    return resultObj
}

function fizzBuzzCalc(num, obj){
    const numA = 3
    const numB = 5
    let result = 0
    if (num%numA==0) {result += 1}
    if (num%numB==0) {result += 2}
            switch(result){
            case 0: 
                obj.data.result = "Poof";
                obj.message = `El número no es divisible por los valores establecidos.`;
                break;
            case 1: 
                obj.data.result = "Fizz";
                obj.message = `El número es divisible por ${numA}.`;
                break;
            case 2: 
                obj.data.result = "Buzz";
                obj.message = `El número es divisible por ${numB}.`;
                break;
            case 3: 
                obj.data.result = "FizzBuzz";
                obj.message = `El número es divisible por ${numA} y ${numB}.`;
                break;
        }
}