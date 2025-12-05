const assert = require('assert');
const ejercicio5 = require('../ejercicio05.js');

describe('Ejercicio 5', () => {
    it('debería retornar el área del rectángulo correctamente', () => {
        assert.strictEqual(ejercicio5.calcularAreaRectangulo(5, 10), 50, 'La función "calcularAreaRectangulo" no retorna el área correctamente');
        assert.strictEqual(ejercicio5.calcularAreaRectangulo(7, 3), 21, 'La función "calcularAreaRectangulo" no retorna el área correctamente');
    });
});
