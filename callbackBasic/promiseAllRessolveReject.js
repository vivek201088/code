//Case we have multiple promise if any one not fullfiled then allways go to catch error
const getData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve("Data fetched");
        },2000)
    })
}

const getError=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         reject("Data not available!!");
        },2000)
    })
}

Promise.all([getData(),getError()]).then(result=>{
    console.log("Rssult is::",result);
}).catch(err=>{
    console.log("Erro is::",err);
})