let botton = document.getElementById('sumar')
let respuesta = document.getElementById('respuesta')

botton.addEventListener('click', sumar)

function sumar(){
    let num1=parseFloat(document.getElementById('n1').value);
    let num2=parseFloat(document.getElementById('n2').value);
    let res= num1 + num2;
    respuesta.innerHTML= `El valor obtenido es: ${res}`;
}