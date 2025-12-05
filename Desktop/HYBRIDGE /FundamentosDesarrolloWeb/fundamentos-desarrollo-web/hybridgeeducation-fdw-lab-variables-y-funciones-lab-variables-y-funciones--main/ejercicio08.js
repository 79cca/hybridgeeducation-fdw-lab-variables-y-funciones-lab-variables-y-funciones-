// Ejercicio 8: Concatenación de Cadenas
// Declara una función llamada "concatenarCadenas" que acepte dos parámetros, "cadena1" y "cadena2", y retorne la concatenación de ambas cadenas

//Ejemplos:
// concatenarCadenas("Hola", "Mundo") => "HolaMundo"
// concatenarCadenas("Frase", "de prueba") => "Frasede prueba"

//escribe aquí tu función. Recuerda que el nombre de la función debe ser exactamente "concatenarCadenas"
function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + " " + cadena2;
  }
  
// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    concatenarCadenas
};
