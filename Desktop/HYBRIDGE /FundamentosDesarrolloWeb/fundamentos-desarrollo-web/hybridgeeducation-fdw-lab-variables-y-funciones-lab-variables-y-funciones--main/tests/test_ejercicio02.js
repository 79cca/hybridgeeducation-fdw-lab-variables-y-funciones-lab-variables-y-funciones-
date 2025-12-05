const assert = require('assert');
const ejercicio2 = require('../ejercicio02.js');

describe('Ejercicio 2', () => {
    it('debería retornar el valor de PI correctamente', () => {
        assert.strictEqual(ejercicio2.obtenerPI(), 3.1416, 'La función "obtenerPI" no retorna el valor de PI correctamente');
    });
});
