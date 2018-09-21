var decimal=prompt("ingrese un numero para convertir a binario");
var conver = (decimal) => {
    var binario = "";
    while(decimal >= 1){
        binario = decimal % 2 +  binario;
        console.log(decimal);
        decimal = decimal/2;
        decimal = parseInt(decimal);
    }
    console.log(binario);
    
}