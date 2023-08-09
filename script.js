//funcion para calcular promedio en base a una suma de 3 numeros
function calcularPromedio(nota){
    return nota / 3;
}

//inicializo contadores
let contador = 1;
let suma = 0;


//Pregunto por 3 numeros, falla si se ingresa algo que no sea numero o este fuera del rango del 0 al 10.
while (contador < 4){
    const entrada = parseFloat(prompt(`Ingrese nota ${contador}:`));

    if (!isNaN(entrada) && entrada < 10.1) {
        suma += entrada;
        contador++;
    }
    else{
        alert("Por favor ingrese solo números y en el rango del 0 al 10")
    }
    
}

//se usa la funcion en base a los numeros ingresados y sumados
const promedio = calcularPromedio(suma).toFixed(1);
//se imprime en la consola el resultado
console.log("El promedio es: " + promedio);