/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

const pastFB = []

function domInput(){
    let num = parseInt(document.querySelector('#num').value)
    pastFB.push(fizzBuzzMain(num))
    domOutput()
}
function domOutput(){
    let div = document.querySelector('#salida')
    div.innerHTML = ''
    pastFB.map(result=> div.innerHTML += JSON.stringify(result)+"<br>")
}