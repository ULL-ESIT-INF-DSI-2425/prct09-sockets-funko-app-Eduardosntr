import { describe, test, expect } from 'vitest';
import { divide } from '../src/index.js';

describe('Función divide', () => {
  test('Debe dividir correctamente dos números positivos', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('Debe dividir correctamente un número positivo y uno negativo', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test('Debe devolver un número negativo al dividir dos números negativos', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('Debe lanzar un error si el divisor es 0', () => {
    expect(() => divide(10, 0)).toThrow('El divisor no puede ser 0');
  });

  test('Debe manejar divisiones con decimales', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });
});