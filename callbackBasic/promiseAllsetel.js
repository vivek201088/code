

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
};

const getError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data not available!!");
    }, 2000);
  });
};

Promise.allSettled([getData(), getError()]).then(results=>{
    results.forEach(result=>{
        if(result.status==='fulfilled'){
            console.log("Value   ",result.value);
        }else{
            console.log("reson of rejection  ",result.reason);
        }
    })
})
