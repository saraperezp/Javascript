var ciertos_datos = [8, 9, "a", 11, "coche", "gato", 25];
console.log(ciertos_datos)
ciertos_datos [3]=34;
ciertos_datos[11]='XX';
console.log(ciertos_datos);

for (let index = 0; index < ciertos_datos.length; index=index+2) {
    console.log('el valor del índice', index, 'es',
    ciertos_datos[index]);
    
}
for (let index = 0; index < 10; index++) {
    console.log ('repetir');
    
}