const { expect } = require("@jest/globals");
import { FizzBuzz } from "../src/FizzBuzz";

/**
 * CASOS DE PRUEBA
     * Feature validación de FizzBuzz
     *  1.Cuando el usuario digite un número divisible por 3, devuelve Fizz,
     *  2.Cuando el usuario digite un número divisible por 5, devuelve Buzz,
     *  3.Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz,
     *  4.Cuando el usuario digite un número que no sea divisible por 3 y 5, devuelve el número,
*/

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
            let respuesta_esperada = "Fizz";
                //proceso - caja negra
            let fizz_buzz = new FizzBuzz();

            // Act: ejecutar el escenario
            let resultado = fizz_buzz.respoder_fizz_buzz(valor_entrada);
        
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
    }
)