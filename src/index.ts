/**
 * Función para dividir dos números.
 * @param dividend - Dividendo.
 * @param divisor - Divisor.
 * @returns Resultado de la división.
 * @throws Error si el divisor es 0.
 */
export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error('El divisor no puede ser 0');
  }
  return dividend / divisor;
}