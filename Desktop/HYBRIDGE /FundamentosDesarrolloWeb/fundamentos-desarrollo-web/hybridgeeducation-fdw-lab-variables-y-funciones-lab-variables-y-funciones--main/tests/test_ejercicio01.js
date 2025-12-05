const assert = require('assert');

const ejercicio1 = require('../ejercicio01.js');

describe('Ejercicio 1', () => {
    it('debería retornar el nombre correctamente', () => {
        assert.strictEqual(typeof ejercicio1.obtenerNombre(), 'string', 'La función "obtenerNombre" no retorna el nombre correctamente');
    });
});
