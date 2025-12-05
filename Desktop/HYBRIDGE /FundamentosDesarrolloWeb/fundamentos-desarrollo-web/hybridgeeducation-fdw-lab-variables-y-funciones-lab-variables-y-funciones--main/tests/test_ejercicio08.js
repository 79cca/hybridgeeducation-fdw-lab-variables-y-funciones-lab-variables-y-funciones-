const assert = require('assert');
const ejercicio8 = require('../ejercicio08.js');

describe('Ejercicio 8', () => {
    it('debería retornar la concatenación correctamente', () => {
        assert.strictEqual(ejercicio8.concatenarCadenas('Hola', 'mundo'), 'Holamundo', 'La función "concatenarCadenas" no retorna la concatenación correctamente');
        assert.strictEqual(ejercicio8.concatenarCadenas('Buenos', 'días'), 'Buenosdías', 'La función "concatenarCadenas" no retorna la concatenación correctamente');
    });
});
