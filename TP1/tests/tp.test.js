// /* eslint-disable no-undef */
const {
  contarVocales,
  urlRepo,
  crearClase
} = require('../tp');

describe('contador de vocales', () => {
 it('debería retornar un número', () => {
   expect(typeof contarVocales()).toBe('number');
 });
 
 it('debería retornar un -1 cuando no recibe un string', () => {
   expect(contarVocales(true)).toBe(-1);
 });

 it('debería retornar la cantidad de vocales', () => {
   expect(contarVocales('Hola como están')).toBe(5);
   expect(contarVocales('HOla como Están')).toBe(5);
   expect(contarVocales('')).toBe(0);
   expect(contarVocales('Hl cm stn')).toBe(0);
 });
});

describe('url repo github', function() {
 it('debería retornar un string', function() {
   expect(typeof urlRepo()).toEqual('string');
 });

 it('debería devolver un repo válido de github', function() {
  expect(urlRepo().includes('https://github.com/')).toBe(true);
  expect(urlRepo().includes('.git')).toBe(true);
 });
});

describe('clase en ES6', function() {
  it('debería retornar una clase', function() {
    expect(typeof crearClase()).toEqual('function');
  });

  it('debería devolver la cantidad de instancias adecuada', function() {
   const Clase = crearClase()
   new Clase()
   new Clase()
   new Clase()
   expect(Clase.contadorInstancias).toEqual(3);
  });

  it('Los métodos deberían devolver -1 para un texto no válido', function() {
    const Clase = crearClase()
    const objeto = new Clase()
    expect(objeto.contadorPalabras()).toEqual(-1);
    expect(objeto.hayNumeros()).toEqual(-1);
   });

   it('El método contadorPalabras debe devolver un valor adecuado', function() {
    const Clase = crearClase()

    let objeto = new Clase('Hola mundo como están')
    expect(objeto.contadorPalabras()).toEqual(4);
    
    objeto = new Clase('')
    expect(objeto.contadorPalabras()).toEqual(0);
    
    objeto = new Clase('Hola')
    expect(objeto.contadorPalabras()).toEqual(1);
   });

   it('El método hayNumeros debe devolver un valor adecuado', function() {
    const Clase = crearClase()

    let objeto = new Clase('Hola mundo como están')
    expect(objeto.hayNumeros()).toBe(false);
    
    objeto = new Clase('')
    expect(objeto.hayNumeros()).toBe(false);
    
    objeto = new Clase('Hola mundo como están 1')
    expect(objeto.hayNumeros()).toBe(true);
    
    objeto = new Clase('123')
    expect(objeto.hayNumeros()).toBe(true);
   });
});
