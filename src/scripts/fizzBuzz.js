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
function fizzBuzz(numInput){
    const numA = 3
    const numB = 5
    let result = 0
    if (numInput%numA==0) {result += 1}
    if (numInput%numB==0) {result += 2}


    //return result
    domOutput(result)
}