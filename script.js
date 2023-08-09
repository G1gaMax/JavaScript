function calcularPromedio(nota){
    return nota / 3;
}

let contador = 0;
let suma = 0;

while (contador < 3){
    const entrada = parseFloat(prompt('Ingrese nota ${contador}:'));

    if (!isNaN(entrada)) {
        suma += entrada;
        contador++;
    }
    else{
        alert("Por favor ingrese solo números")
    }
    
}

const promedio = calcularPromedio(suma);
console.log("El promedio es: " + promedio);