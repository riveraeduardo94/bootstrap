const {suma} = require('../op-suma.js');

test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3); //1+2 to be = 3
});


test('adds -1 + -20 to equal -21', () => {
    expect(suma(-1, -20)).toBe(-21);
});


test('adds -1 + "hola" to equal -1hola', () => {
    expect(suma(-1, "hola")).toBe("-1hola"); 
});


test('adds 10.52 + 11.258 to equal 21.778', () => {
    expect(suma(10.52, 11.258)).toBe("21.778"); 
});