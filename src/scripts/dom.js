/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
function domInput(){
    let num = document.querySelector('#num').value
    console.log(num)
    return parseInt(num)
}
function domOutput(obj){
    let div = document.querySelector('#salida')
    div.innerHTML += obj+"<br>"
}