
// let peso;
// let altura;
// let IndiceMasaCorporal;
// let optio
// while (option != 0) {
//     option = Number(prompt("Bienvenidos, en esta pagina calcularemos tu indice de masa corporal, necesitamos estos datos: \n 1. ingresar su peso en kg \n 2. ingresar su altura en metros \n 3. calcular indice masa corporal \n 0. salir")) 
//             //menu de opcion
//     if (option == 1) {
//         peso = Number(prompt("ingresa tu peso en kg"));
//         alert("su peso es: " + peso + " kg");
//     } else if (option == 2) {
//         altura = Number(prompt("ingresa tu altura en metros"));
//         alert("su altura es: " + altura + " metros");
//     } else if (option == 3) {
//         if (peso && altura) {
//             IndiceMasaCorporal = peso / (altura * altura);
//             alert("su indice de masa corporal es: " + IndiceMasaCorporal)         
//             // Evaluar el IMC
//             if (IndiceMasaCorporal < 18.5) {
//                 alert("tu indice de masa corporal es de bajo peso");
//             } else if (IndiceMasaCorporal >= 18.5 && IndiceMasaCorporal <= 24.9) {
//                 alert("tu indice de masa corporal es saludable");
//             } else if (IndiceMasaCorporal >= 25 && IndiceMasaCorporal <= 29.9) {
//                 alert("tu indice de masa corporal es de sobrepeso");
//             } else if (IndiceMasaCorporal >= 30) {
//                 alert("tu indice de masa corporal es de obesidad");
//             }
//         } else {
//             alert("Por favor, ingrese su peso y altura antes de calcular el IMC.");
//         }
//     } else if (option == 0) {
//         alert("gracias por visitar esta pagina.\n Pizarro Fidel");
//     } else {
//         alert("Opción no válida, por favor ingrese una opción válida.");
//     }
// }


// for (let i = 1; i <= 10; i++) {
//     let ingresarNombre = prompt("ingresar nombre");
    
//     alert ("turno Nº " + i + "nombre: " + ingresarNombre ) ;
// }



// function calculadora(primerNumero,segundoNumero,operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;

//         default:
//             return 0;           
//             break;
//     }
// }    

// console.log(calculadora(400, 5, "/"));

// let suma = (a,b) => a + b;

// let resta = (a,b) => a - b;

// const iva = x => x * 0.21

// let precioProducto = 500;

// let descuento = 50;

// let nuevoPrecio =suma(precioProducto,iva(precioProducto));

// console.log(nuevoPrecio);

// function persona(nombre,edad,domicilio) {
//     this.nombre =nombre;
//     this.edad =edad ;
//     this.domicilio =domicilio ;
//     this.saludar = function() {
//         console.log("hola, soy " + this.nombre + " vivo en " + this.domicilio + " y tengo " + this.edad);
//     }
// }
// let persona1 = new persona("fidel", 19, "lugones 306");
// let persona2 = new persona ("catalina", 19, "primeros pobladores 72")

//  persona1.saludar ();
//  persona2.saludar ();


// const miArray = ["fidel", "sofia", "natalia","ariel", "catalina",]

// miArray.splice(1,2);

// console.log(miArray);


// 
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