// Importar las funciones de los módulos
const { sumarNumeros } = require('../Operaciones/fehv-suma/suma.js');
const { restarNumeros } = require('../Operaciones/fehv-resta/resta.js');

describe('Pruebas de Operaciones Matemáticas', () => {
    describe('sumarNumeros', () => {
        test('debe sumar dos números positivos correctamente', () => {
            expect(sumarNumeros(5, 3)).toBe(8);
        });

        test('debe sumar números negativos correctamente', () => {
            expect(sumarNumeros(-5, -3)).toBe(-8);
        });

        test('debe sumar un número positivo y uno negativo', () => {
            expect(sumarNumeros(10, -3)).toBe(7);
        });

        test('debe sumar cero correctamente', () => {
            expect(sumarNumeros(5, 0)).toBe(5);
            expect(sumarNumeros(0, 0)).toBe(0);
        });

        test('debe sumar números decimales', () => {
            expect(sumarNumeros(1.5, 2.5)).toBe(4);
        });
    });

    describe('restarNumeros', () => {
        test('debe restar dos números positivos correctamente', () => {
            expect(restarNumeros(10, 3)).toBe(7);
        });

        test('debe restar números negativos correctamente', () => {
            expect(restarNumeros(-5, -3)).toBe(-2);
        });

        test('debe restar un número positivo y uno negativo', () => {
            expect(restarNumeros(10, -3)).toBe(13);
        });

        test('debe restar cero correctamente', () => {
            expect(restarNumeros(5, 0)).toBe(5);
            expect(restarNumeros(0, 5)).toBe(-5);
        });

        test('debe restar números decimales', () => {
            expect(restarNumeros(5.5, 2.2)).toBeCloseTo(3.3);
        });
    });
});
