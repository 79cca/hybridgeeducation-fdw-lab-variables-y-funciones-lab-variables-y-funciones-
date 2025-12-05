const assert = require('assert');

const ejercicio9 = require('../ejercicio09.js');

describe('Ejercicio 9', () => {
    it('debería retornar el promedio de 5 números correctamente', () => {
        assert.strictEqual(ejercicio9.calcularPromedio(1, 2, 3, 4, 5), 3, 'La función "calcularPromedio" no retorna el promedio correctamente');
        assert.strictEqual(ejercicio9.calcularPromedio(5, 5, 5, 5, 5), 5, 'La función "calcularPromedio" no retorna el promedio correctamente');
        assert.strictEqual(ejercicio9.calcularPromedio(10,10,10,10,10), 10, 'La función "calcularCuadrado" no retorna el promedio correctamente');
        assert.strictEqual(ejercicio9.calcularPromedio(45,34,34,55,67), 47, 'La función "calcularCuadrado" no retorna el promedio correctamente');
        assert.strictEqual(ejercicio9.calcularPromedio(-3, 10, 3, 33, 5), 9.6, 'La función "calcularCuadrado" no retorna el promedio correctamente');
    });
});
