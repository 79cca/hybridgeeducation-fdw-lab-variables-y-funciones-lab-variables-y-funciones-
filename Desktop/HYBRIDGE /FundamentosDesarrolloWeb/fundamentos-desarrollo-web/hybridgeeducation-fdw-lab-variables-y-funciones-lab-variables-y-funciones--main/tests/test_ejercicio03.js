const assert = require('assert');
const ejercicio3 = require('../ejercicio03.js');

describe('Ejercicio 3', () => {
    it('debería retornar la suma correctamente', () => {
        assert.strictEqual(ejercicio3.sumar(5, 10), 15, 'La función "sumar" no retorna la suma correctamente');
        assert.strictEqual(ejercicio3.sumar(-5, 5), 0, 'La función "sumar" no retorna la suma correctamente');
    });
});
