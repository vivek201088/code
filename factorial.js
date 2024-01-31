function fact(num){
   let factNum=1
    if(num==0){
        return 0;
    }else{
        for(let i=1;i<=num;i++){
           factNum *= i
        }
        return factNum
    }
    
}

console.log(fact(5));