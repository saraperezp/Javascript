num1 = 4;
num2 = 8;

function operarNumeros(a, b, op) {
    if (op == "*") { return (a * b); }

    else if (op == '+') { return (a + b); }

    else if (op == '-') { return (a - b); }

    else if (op == '/'){
        if (b == 0) { return 0; }
        else { return (a / b); }
    }
}


console.log(operarNumeros(4, 8, '-'));
console.log(operarNumeros(4, 8, '+'));
console.log(operarNumeros(4, 8, '*'));
console.log(operarNumeros(4, 8, '/'));
console.log(operarNumeros(343, 0, '/'));

