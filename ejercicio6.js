var ab= prompt("ingrese un numero");
var absolute = (ab) =>{
    if(ab>=0){
        return ab;
    }
    else{
        return ab * -1;
    }
}
console.log(absolute(ab));