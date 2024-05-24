// let nombre = "fidel"

// let apellido = "pizarro"

// console.log(nombre,apellido);

// function calcularIMC() {
//     const peso = parseFloat(prompt("Ingresa tu peso en kg:"));
//     const altura = parseFloat(prompt("Ingresa tu altura en metros:"));

//     if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
//         alert('Por favor, ingresa valores válidos para peso y altura.');
//         return;
//     }

//     const imc = peso / (altura * altura);
//     let categoria = '';

//     if (imc < 18.5) {
//         categoria = 'bajo peso';
//     } else if (imc >= 18.5 && imc < 24.9) {
//         categoria = 'normal';
//     } else if (imc >= 25 && imc < 29.9) {
//         categoria = 'sobrepeso';
//     } else {
//         categoria = 'obesidad';
//     }

//     alert(`Tu IMC es ${imc.toFixed(2)}, lo que indica que estás en la categoría de ${categoria}.`);
// }

// // Ejecutar la función para iniciar el simulador
// calcularIMC();

// let peso;

// let altura;

// let IndiceMasaCorporal = peso / altura * altura;



// let option;

// while (option != 0) {

//     option =prompt("ingrese una opcion: \n 1. ingresar su peso en kg \n 2. ingresar su altura en metros \n 3. calcular indice masa corporal \n 0. salir");

//     if (option == 1) {
//         Number (prompt ("ingresa tu peso en kg"));
//         alert ("su peso es:" + peso + "kg")
//     }
//     else if (option == 2) {
//         Number(prompt ("ingresa tu altura en metros"));
//         alert ("su altura es:" + altura + "metros")
//     }
//     else if (option == 3) {
//         alert ("su indice de masa corporal es:" + IndiceMasaCorporal);
//     }
//     else if (option == 0) {
//         alert("gracias por visitar esta pagina.\n Pizarro fidel  ")
//     }
// } 

// if (IndiceMasaCorporal < 18,5){
//     alert ("tu indice de masa corporal es de bajo peso")
// }

// else if (IndiceMasaCorporal >= 18,5 && IndiceMasaCorporal <= 24,9)
//     { alert ("tu indice de masa corporal es saludable")
// }

// else if (IndiceMasaCorporal >= 18,5 && IndiceMasaCorporal <= 24,9)
//     { alert ("tu indice de masa corporal es de sobrepeso")
// }

// else if (IndiceMasaCorporal > 30.0){
//     alert ("tu indice de masa corporal es de obesidad")
// }

let peso;
let altura;
let IndiceMasaCorporal;
let option;

while (option != 0) {
    option = Number(prompt("ingrese una opcion: \n 1. ingresar su peso en kg \n 2. ingresar su altura en metros \n 3. calcular indice masa corporal \n 0. salir"));

    if (option == 1) {
        peso = Number(prompt("ingresa tu peso en kg"));
        alert("su peso es: " + peso + " kg");
    } else if (option == 2) {
        altura = Number(prompt("ingresa tu altura en metros"));
        alert("su altura es: " + altura + " metros");
    } else if (option == 3) {
        if (peso && altura) {
            IndiceMasaCorporal = peso / (altura * altura);
            alert("su indice de masa corporal es: " + IndiceMasaCorporal);
            
            // Evaluar el IMC
            if (IndiceMasaCorporal < 18.5) {
                alert("tu indice de masa corporal es de bajo peso");
            } else if (IndiceMasaCorporal >= 18.5 && IndiceMasaCorporal <= 24.9) {
                alert("tu indice de masa corporal es saludable");
            } else if (IndiceMasaCorporal >= 25 && IndiceMasaCorporal <= 29.9) {
                alert("tu indice de masa corporal es de sobrepeso");
            } else if (IndiceMasaCorporal >= 30) {
                alert("tu indice de masa corporal es de obesidad");
            }
        } else {
            alert("Por favor, ingrese su peso y altura antes de calcular el IMC.");
        }
    } else if (option == 0) {
        alert("gracias por visitar esta pagina.\n Pizarro fidel");
    } else {
        alert("Opción no válida, por favor ingrese una opción válida.");
    }
}
