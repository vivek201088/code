/*
    It's use to handling multiple promises and resolving with the value of first fullfiled/resolved promise,
    similar to promise .race(), However , unlike promise .race() , promise any()does not reject imideatly when the
    first promise rejects, Instead, it waits until at least one promise fulfills/ resolved.

*/

const getMessage=()=>{
return new Promise((resolve,reject)=>{
    setTimeout(() => {
      reject("get Message for api")
    }, 500);
});
}

const getUserData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          reject("User data could not fetched!!")
        }, 200);
    });
}

const getProducts=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          reject("product could notfeched!!")
        }, 1000);
    });
}


Promise.any([getMessage()
           ,getProducts()
           ,getUserData()
           ]).then(result=>{
            console.log("First sucessfull result is  ",result); //will log the first promise result
           }).catch(err=>{
            console.log("All promises rejected",err);// will log all rejection resons if all promis rejects
           })
           