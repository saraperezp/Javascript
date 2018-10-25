u1_name="Ricardo";
u1_surname= "Ahumada";

u2_name= "chemita";
u2_surname ='parroco';

u3_name = "Pepe";
u3_surname = "Perez";

console.log(u1_name+' '+u1_name);
console.log(u2_name +' '+u2_surname);
console.log(u3_name +' '+u3_surname);


// palabra reservada para las funciones: function. tienen un nombre, designan parametros y tienen cuerpos.

function generarNombrecompleto(unNombre, unApellido) {
    var nombre_mod = "*"+ unNombre+"*";
    var app_mod = "//"+unApellido+"//";
    return nombre_mod+" "+app_mod;

}
console.log (generarNombrecompleto (u1_name, u1_surname) );
console.log (generarNombrecompleto (u2_name, u2_surname) );
console.log (generarNombrecompleto (u3_name, u3_surname) );
