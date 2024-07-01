
let miFormulario = document.getElementById('formulario');

miFormulario.addEventListener('submit', funcionCalculo);

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Obtener datos previos del localStorage o inicializar con un array vacío

function funcionCalculo(evento) {
    evento.preventDefault();
    
    let nombre = document.getElementById('nombre').value;       // Nombre ingresado por usuario
    let peso = parseFloat(document.getElementById('peso').value);   // Peso ingresado por usuario
    let altura = parseFloat(document.getElementById('altura').value); // Altura ingresada por usuario

    let calculoIMC = peso / (altura * altura); // Cálculo del índice de masa corporal

    let usuario = {
        nombre: nombre,
        peso: peso,
        altura: altura,
        imc: calculoIMC.toFixed(2)
    };

    usuarios.push(usuario);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    function resultadoCalculo() {
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
