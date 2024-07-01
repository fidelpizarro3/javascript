
let miFormulario = document.getElementById('formulario');

miFormulario.addEventListener('submit', funcionCalculo);

let usuarios = []

function funcionCalculo(evento){
    evento.preventDefault();
    
    let nombre = document.getElementById ('nombre').value;       // nombre ingresado por usuario
    let peso = document.getElementById('peso').value;            // peso ingresado por usuario
    let altura = document.getElementById('altura').value;        // altura ingresada por usuario

    localStorage

let calculoIMC = Number(peso / (altura * altura)); //calculo de indice masa corporal

let usuario = {
    nombre: nombre,
    peso: peso,
    altura: altura,
    imc: calculoIMC
}

usuarios.push(usuario);

function resultadoCalculo(){
    if (calculoIMC < 18.5) {
        return "Tu índice de masa corporal es de bajo peso.";
    } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        return "Tu índice de masa corporal es saludable.";
    } else if (calculoIMC >= 25 && calculoIMC <= 29.9) {
        return "Tu índice de masa corporal es de sobrepeso.";
    } else if (calculoIMC >= 30) {
        return "Tu índice de masa corporal es de obesidad.";
    }
}

let resultadoElemento = document.createElement('p');
resultadoElemento.textContent = 'Hola ' + nombre + ', tu índice de masa corporal es de ' + calculoIMC.toFixed(2) + '. ' + resultadoCalculo();

let cajaResultados = document.getElementById('resultados');
cajaResultados.innerHTML = '';
cajaResultados.appendChild(resultadoElemento);

console.log('Usuario agregado:', usuario);
console.log('Lista de usuarios:', usuarios);

}


