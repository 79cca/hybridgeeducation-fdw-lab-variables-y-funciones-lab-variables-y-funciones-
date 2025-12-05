const assert = require('assert');
const ejercicio4 = require('../ejercicio04.js');

describe('Ejercicio 4', () => {
    it('debería retornar el saludo correctamente', () => {
        assert.strictEqual(ejercicio4.saludar('Juan'), 'Hola, Juan!', 'La función "saludar" no retorna el saludo correctamente');
        assert.strictEqual(ejercicio4.saludar('Ana'), 'Hola, Ana!', 'La función "saludar" no retorna el saludo correctamente');
    });
});
