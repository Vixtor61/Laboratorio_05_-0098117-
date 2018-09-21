var num = 5;
var fibo = (num) =>{
    if(num == 0){
        return 0;
    }
    else if(num == 1){
        return 1;
    }
    
    return fibo(num-1)+fibo(num-2);
}
console.log(fibo(num));