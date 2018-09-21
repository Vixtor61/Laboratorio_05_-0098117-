
var bisiesto = prompt("Escriba el año para ver si es biciesto");

var bi= (bisiesto) => {
    if(bisiesto%4==0 & (bisiesto%100 !=0 || bisiesto%400 == 0)){
        console.log("es bisiesto");
    }
    else{
        console.log("no es bisiesto");
    }
}
bi(bisiesto);