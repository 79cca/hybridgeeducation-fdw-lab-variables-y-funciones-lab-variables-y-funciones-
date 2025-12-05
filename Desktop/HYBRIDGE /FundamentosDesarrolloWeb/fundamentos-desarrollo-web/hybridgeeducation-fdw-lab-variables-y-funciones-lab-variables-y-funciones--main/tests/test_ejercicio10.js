const assert = require('assert');
const ejercicio10 = require('../ejercicio10.js');

describe('Ejercicio 10', () => {
    it('debería retornar la cadena invertida correctamente', () => {
        assert.strictEqual(ejercicio10.invertirCadena('Javascript'), 'tpircsavaJ', 'La función "invertirCadena" no retorna la cadena invertida correctamente');
        assert.strictEqual(ejercicio10.invertirCadena('Hola'), 'aloH', 'La función "invertirCadena" no retorna la cadena invertida correctamente');
        assert.strictEqual(ejercicio10.invertirCadena('Hola Mundo'), 'odnuM aloH', 'La función "invertirCadena" no retorna la cadena invertida correctamente');
        assert.strictEqual(ejercicio10.invertirCadena('anita lava la tina'), 'anit al aval atina', 'La función "invertirCadena" no retorna la cadena invertida correctamente');
    });
});
