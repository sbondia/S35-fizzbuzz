const { expect } = require("@jest/globals");
import { FizzBuzz } from "../src/FizzBuzz"; // forma de ES6. Desde la clase se debe exportar asi: export {FizzBuzz};

/**
 * ACCEPTANCE CRITERIA  ----> Historias de usuario
     * Feature para saber cuándo un número es primo de 3 y de 5
     *  1.Cuando el usuario digite un número divisible por 3, devuelve Fizz,
     *  2.Cuando el usuario digite un número divisible por 5, devuelve Buzz,
     *  3.Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz,
     *  4.Cuando el usuario digite un número que no sea divisible por 3 y 5, devuelve el número,
*/

describe('FizzBuzz test for multiples of 3 and 5', () => {
       
        test('test_returns_Fizz_when_multiple_3', () => {
            //Gherking test
            /**
             * GIVEN / DADO un número
             * WHEN / CUANDO sea múltiplo de 3
             * THEN / ENTONCES retorno Fizz como respuesta
             */

            // Arrange: Preparar el escenario
                //entrada
            let valor_entrada = 3;
                //salida
            let respuesta_esperada = "Fizz";
                //proceso - caja negra
            let fizz_buzz = new FizzBuzz();

            // Act: ejecutar el escenario
            let resultado = fizz_buzz.respoder_fizz_buzz(valor_entrada);
        
            // Assert: Comprobar el escenario
            expect(resultado).toBe(respuesta_esperada);
        });
    }
)