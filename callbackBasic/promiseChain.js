function getEvenNumber(value,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(value%2==0){
        resolve(value)
      }else{
       reject("value is not even no")
      }
    },delay)
  })
}

getEvenNumber(4,2000)
            .then(result=>{
                console.log("Step1 value is:",result);
                return getEvenNumber(6,2000)
            })
            .then(result=>{
                console.log("Step2 value is:",result);
            })
            .catch(error=>{
              console.log("Error:",error);
            });
        
             