const assert = require('assert');
const ejercicio6 = require('../ejercicio06.js');

describe('Ejercicio 6', () => {
    it('debería retornar la conversión a Fahrenheit correctamente', () => {
        assert.strictEqual(ejercicio6.celsiusAFahrenheit(0), 32, 'La función "celsiusAFahrenheit" no retorna la conversión correctamente');
        assert.strictEqual(ejercicio6.celsiusAFahrenheit(100), 212, 'La función "celsiusAFahrenheit" no retorna la conversión correctamente');
        assert.strictEqual(ejercicio6.celsiusAFahrenheit(25), 77, 'La función "celsiusAFahrenheit" no retorna la conversión correctamente');
    });
});
