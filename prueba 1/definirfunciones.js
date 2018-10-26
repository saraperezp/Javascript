// distintas maneras de definir una funcion
//1. Funcion tradicional

function concatenar(str1,str2) {
    return str1+' '+str2;
}
console.log( concatenar ('Hola',' mundo'));

//let: variables
//const: constantes

//2. Funciones or medio de una constante. Las constantes pueden contener una funcion. es otra manera de definir una funcion. Esta es la más clara. La funcion se almacena en una variable. 

const concatenar= function (str1, str2) {
    return str1+' '+str2;}

console.log( concatenar ('hola2', 'mundo2'));

//funcion anonima://

//3. funciones anonimas autoinvocadas, se ejecuta conforme esta definida. Es la manera preferente. Las funciones pueden devolver valores simples u otras funciones. 

(function (texto) {
    console.log (texto);
    
}) ('Hola mundo')