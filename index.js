
let pacientes = [];
let option;

function ingresarNombre() {
    let nombre = prompt("Ingresa tu nombre");
    alert("Hola, " + nombre);
    return nombre;
}

function ingresarPeso() {
    let peso = Number(prompt("Ingresa tu peso en kg"));
    alert("Su peso es: " + peso + " kg");
    return peso;
}

function ingresarAltura() {
    let altura = Number(prompt("Ingresa tu altura en metros"));
    alert("Su altura es: " + altura + " metros");
    return altura;
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function evaluarIMC(imc) {
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

function mostrarPaciente(paciente) {
    alert(
        `Paciente: ${paciente.nombre}
        Peso: ${paciente.peso} kg
        Altura: ${paciente.altura} metros
        IMC: ${paciente.imc}
        Evaluación: ${paciente.evaluacion}`
    );
}

while (option !== 0) {
    option = Number(prompt("Bienvenidos, en esta página calcularemos tu índice de masa corporal. Necesitamos estos datos: \n 1. Ingresar nombre \n 2. Ingresar peso en kg \n 3. Ingresar altura en metros \n 4. Calcular índice de masa corporal \n 5. Mostrar pacientes \n 0. Salir"));

    if (option === 1) {
        let nombre = ingresarNombre();
        let paciente = { nombre: nombre, peso: null, altura: null, imc: null, evaluacion: null };
        pacientes.push(paciente);
    } else if (option === 2) {
        if (pacientes.length > 0) {
            let peso = ingresarPeso();
            pacientes[pacientes.length - 1].peso = peso;
        } else {
            alert("Primero ingrese el nombre del paciente.");
        }
    } else if (option === 3) {
        if (pacientes.length > 0) {
            let altura = ingresarAltura();
            pacientes[pacientes.length - 1].altura = altura;
        } else {
            alert("Primero ingrese el nombre del paciente.");
        }
    } else if (option === 4) {
        if (pacientes.length > 0) {
            let paciente = pacientes[pacientes.length - 1];
            if (paciente.peso && paciente.altura) {
                paciente.imc = calcularIMC(paciente.peso, paciente.altura);
                paciente.evaluacion = evaluarIMC(paciente.imc);
                alert("Su índice de masa corporal es: " + paciente.imc);
                alert(paciente.evaluacion);
            } else {
                alert("Por favor, ingrese su peso y altura antes de calcular el IMC.");
            }
        } else {
            alert("No hay datos de pacientes. Ingrese nombre, peso y altura primero.");
        }
    } else if (option === 5) {
        pacientes.forEach(mostrarPaciente);
    } else if (option === 0) {
        alert("Gracias por visitar esta página.\n Pizarro Fidel");
    } else {
        alert("Opción no válida, por favor ingrese una opción válida.");
    }
}