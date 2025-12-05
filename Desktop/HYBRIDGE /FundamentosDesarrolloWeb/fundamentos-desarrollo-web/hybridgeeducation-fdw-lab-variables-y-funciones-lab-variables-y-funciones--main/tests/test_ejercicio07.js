const assert = require('assert');
const ejercicio7 = require('../ejercicio07.js');

describe('Ejercicio 7', () => {
    it('debería retornar verdadero para un número par y falso para un número impar', () => {
        assert.strictEqual(ejercicio7.esPar(4), true, 'La función "esPar" no retorna verdadero para un número par');
        assert.strictEqual(ejercicio7.esPar(3), false, 'La función "esPar" no retorna falso para un número impar');
    });
});
