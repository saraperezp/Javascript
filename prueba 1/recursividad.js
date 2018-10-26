function factorial(N){

if (N==0) return 1;
else return N*factorial(N-1);

}
console.log(factorial(5));

const concatenar = function (str1, str2) {
    return str1+' '+str2;}

console.log( concatenar ('hola2', 'mundo2'));