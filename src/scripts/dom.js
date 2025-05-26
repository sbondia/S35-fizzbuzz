/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
const pastFB = []
function domInput(){
    let num = parseInt(document.querySelector('#num').value)
    pastFB.push(fizzBuzzMain(num))
}
function domOutput(obj){
    //console.log(1, obj.toString())
    let div = document.querySelector('#salida')
    //div.innerHTML += obj+"<br>"
    div.innerHTML = pastFB
    //console.log(2 , div.innerHTML)
}