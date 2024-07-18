let miFormulario = document.getElementById('formulario');

miFormulario.addEventListener('submit', funcionCalculo);

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function funcionCalculo(evento) {
    evento.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let calculoIMC = peso / (altura * altura);

    let usuario = {
        nombre: nombre,
        peso: peso,
        altura: altura,
        imc: calculoIMC.toFixed(2)
    };

    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mostrarUsuarios();
    limpiarFormulario();
}

function resultadoCalculo(imc) {
    if (imc < 18.5) {
        return "Tu índice de masa corporal es de bajo peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Tu índice de masa corporal es saludable.";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Tu índice de masa corporal es de sobrepeso.";
    } else if (imc >= 30) {
        return "Tu índice de masa corporal es de obesidad.";
    }
}

function mostrarUsuarios() {
    let cajaResultados = document.getElementById('resultados');
    cajaResultados.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        let resultadoElemento = document.createElement('p');
        resultadoElemento.textContent = `Hola ${usuario.nombre}, tu índice de masa corporal es de ${usuario.imc}. ${resultadoCalculo(usuario.imc)}`;

        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarUsuario(index));

        resultadoElemento.appendChild(botonEliminar);
        cajaResultados.appendChild(resultadoElemento);
    });
}

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarUsuarios();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}

document.addEventListener('DOMContentLoaded', mostrarUsuarios);


function obtenerClima(ciudad) {
    const apiKey = '030b4386a17334e9be4a9f0a54b2ccbb'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const descripcion = data.weather[0].description;
            const temperatura = data.main.temp;
            const humedad = data.main.humidity;

            const mensaje = `El clima en ${ciudad} es ${descripcion}. La temperatura es ${temperatura}°C y la humedad es ${humedad}%.`;
            document.getElementById('clima').innerText = mensaje;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            document.getElementById('clima').innerText = 'No se pudo obtener el clima. Intenta nuevamente más tarde.';
        });
}