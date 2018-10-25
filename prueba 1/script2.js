var peso= 90;
var altura = 170;
var estar_cachas = false;


if(peso <=altura-100 - 20){
    estar_cachas =false;
    console.log('¡Alimentese!')}

else if(peso <=altura-100){
    estar_cachas =true;
    console.log('¡Qué fuertote eh!')}
else {
    estar_cachas =false;
    console.log ('¡Ponte a hacer ejercicio, te sobran',peso -(altura-100),'kilitos');
}
