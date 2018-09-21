var cadena = prompt("Escriba una palabra para averiguar si es palindroma");
console.log(cadena);
var isPalindroma = (cadena) =>{
    var cont = cadena.length-1;
    var is=true;

    for(i=0;i<cadena.length;i++){
        console.log(cadena[i] + cadena[cont]);
        if(cadena[i] != cadena[cont]){
            
            is=false;
        }
        cont--;
    }
    if(is){
        console.log("Es palindromo");
    }
    else{
        console.log("no es ppalindromo");
    }
    return 0;
}
isPalindroma(cadena);











