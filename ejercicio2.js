var ordenar = [4,5,6,7,2,0,11,485,46852,78];
var ord = (ordenar) => {
    for(i=2;i<ordenar.length;i++){
        key = ordenar[i];
        J=i-1;
        while(J>0 && key < ordenar[J]){
            ordenar[J+1] = ordenar[J];
            J = J-1;
            ordenar[J+1] = key;
        }
        console.log(ordenar);
    }
    

    }
ord(ordenar); 
