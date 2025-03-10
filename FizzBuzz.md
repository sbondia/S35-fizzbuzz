# FizzBuzz con Manipulación del DOM

## Descripción

Este ejercicio tiene como objetivo evaluar tus conocimientos sobre JavaScript, manipulación del DOM y control de errores con try...catch. Implementarás el clásico problema de "FizzBuzz" con una interfaz web donde el usuario podrá ingresar un número y recibir la respuesta en pantalla.

## Requisitos

* Crear una página HTML con un campo de entrada (input) para recibir un número, un botón para procesarlo y una sección donde se muestren los resultados
* Validar que el usuario solo pueda ingresar números.
* Al presionar el botón, mostrar el resultado en pantalla según las reglas de FizzBuzz.
* Mostrar un historial de los valores ingresados y sus respectivos resultados.
* Manejar errores usando try...catch.

## Criterios de Aceptación

* Si el número ingresado es divisible por 3, se muestra Fizz.
* Si el número ingresado es divisible por 5, se muestra Buzz.
* Si el número ingresado es divisible por 3 y 5, se muestra FizzBuzz.
* Si el número ingresado no es divisible ni por 3 ni por 5, se muestra el número mismo.
* Si el usuario ingresa un valor no numérico, se debe mostrar un mensaje de error.
* Se almacena cada número ingresado junto con su resultado en un objeto.
* Se muestra en pantalla un historial con los valores ingresados y sus resultados.

## Casos de prueba (formato Gherking)

### Feature: Validación de FizzBuzz
#### Scenario: Número divisible por 3
    Given un número 9
    When el número es procesado
    Then se muestra "Fizz"
#### Scenario: Número divisible por 5
    Given un número 10
    When el número es procesado
    Then se muestra "Buzz"
#### Scenario: Número divisible por 3 y 5
    Given un número 15
    When el número es procesado
    Then se muestra "FizzBuzz"
#### Scenario: Número no divisible por 3 ni 5
    Given un número 7
    When el número es procesado
    Then se muestra "7"
#### Scenario: Entrada no numérica
    Given una entrada "Hola"
    When el usuario intenta procesar la entrada
    Then se muestra un mensaje de error
#### Scenario: Historial de entradas
    Given un número 9 y un número 10
    When el usuario los ingresa secuencialmente
    Then el historial muestra "9: Fizz" y "10: Buzz"

### Pistas
* Usa document.getElementById() o querySelector() para obtener los elementos del DOM.
* Usa parseInt() para convertir la entrada del usuario en un número.
* Usa isNaN() para validar si la entrada es un número válido.
* Usa try...catch para manejar errores y mostrar mensajes adecuados.
* Usa innerText o textContent para mostrar el resultado en la página.
* Usa un array de objetos para almacenar los números ingresados y sus resultados.
* Usa forEach() o map() para iterar sobre el array y mostrar el historial en la interfaz.

¡Buena suerte! 🚀