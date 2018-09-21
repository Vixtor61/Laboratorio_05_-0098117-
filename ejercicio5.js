conver(decimal);
r = prompt("ingrese el radio para calcular el area");
var cir  = (r)  =>{
    if(r<=0){
        return -1;
    }
    var a = 3.141516*(r*r);
    return a;

}
console.log(cir(r));