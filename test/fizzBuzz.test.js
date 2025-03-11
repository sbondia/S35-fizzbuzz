const { expect } = require("@jest/globals");
import { fizzBuzz } from "../src/fizzBuzz";

describe('FizzBuzz test for multiples of 3 and 5', () => {
       
        test('test_returns_Fizz_when_multiple_3', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 3
             * Given un número 9
             * When el número es procesado
             * Then se muestra "Fizz"
             */

            // Arrange: Preparar el escenario
                //entrada
            let valor_entrada = 9;
                //salida
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 3", // Mensaje de validación
                data: {
                    input: 9,  // Número evaluado
                    output: "Fizz" // Resultado esperado
                }}

            // Act: ejecutar el escenario
            let resultado = fizzBuzz(valor_entrada);
        
            // Assert: Comprobar el escenario
            expect(resultado).toBe(respuesta_esperada);
        });

        test('test_returns_Buzz_when_multiple_5', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 5
             * Given un número 10
             * When el número es procesado
             * Then se muestra "Buzz"
             */

            // Arrange

            // Act
    
            // Assert
    
        })

        test('test_returns_FizzBuzz_when_multiple_3_5', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 3 y 5
             * Given un número 15
             * When el número es procesado
             * Then se muestra "FizzBuzz"
             */

        })

        test('test_returns_number_when_isnt_multiple_3_5', () => {
            //Gherking test
            /**
             * Scenario: Número no divisible por 3 ni 5
             * Given un número 8
             * When el número es procesado
             * Then se muestra el número ingresado
             */
    
        })

        
        test('test_returns_number_when_isnt_multiple_3_5', () => {
            //Gherking test
            /**
             * Scenario: Número no divisible por 3 ni 5
             * Given un número 8
             * When el número es procesado
             * Then se muestra el número ingresado
             */
    
        })
    }
)