var numero_1 = 1;
var numero_2 = 300;
var numero_3 = 5;

if (numero_3 >= numero_2) {
    if (numero_3 >= numero_1) {
        console.log(numero_3);
    }
    else {
        console.log(numero_1);
    }
}
else if (numero_2 >= numero_1) {
        if (numero_2 >= numero_3) {
            console.log(numero_2);
        }
        else {
            console.log(numero_2);
        }
}       
else if (numero_1 >= numero_2) {
    if (numero_1 >= numero_3) {
        console.log(numero_1);
    }
        else {console.log(numero_3);
        }
}
