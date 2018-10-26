
var arr = [];

var op = ['+', '-', '*', '/'];

function opNumArr(arr, op) {
    let resultado;

    if (op == '+') {
        resultado = 0; // bias es un valor inicial por defecto. si no definimos lo que vale el resultado, no estará definido

        for (let index = 0; index < arr.length; index++) {
            resultado = resultado + arr[index];
            // resultado += arr[index];
        }
    } else if (op == '*') {
        resultado = 1;

        for (let index = 0; index < arr.length; index++) {
            resultado = resultado * arr[index];
        }
    } else if (op == '/') {
        resultado = 1;

        for (let index = 0; index < arr.length; index++) {
            resultado = resultado * arr[index];
        }
    }
    else if (op == '-') {
        if (arr.length <= 0) {return resultado = 0 }
         resultado = arr[0];
            for (let index = 1; index < arr.length; index++) {
                resultado = resultado - arr[index];
            }
            return resultado;
        }

    }

console.log(opNumArr([], '-')); //24

// }
//  for (let index = 0; index < (arr.length-1); index++) {
// console.log( + index + " se llama " + mis_mascotas[index]);
// }


// console.log(operarNumeros(arr, '-')); //-8
// console.log(operarNumeros(arr, '+')); //10
// console.log(operarNumeros(arr, '*'));//24
// console.log(operarNumeros(arr, '/'));//0.41


    // // if(op=='+'){return (for (let index = 0; index < 1000; index++) {
    //     mis_mascotas[index] = 'perrito ' + (index + 1);
    // })}
    // }


//     if (op == "*") { return (a * b); }

//     else if (op == '+') { return (a + b); }

//     else if (op == '-') { return (a - b); }

//     else if (op == '/'){
//         if (b == 0) { return 0; }
//         else { return (a / b); }
//     }
// }



