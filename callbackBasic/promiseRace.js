//case where no matter resolve or reject only who return first

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
        },1000)
    })
}

Promise.race([getData(),getError()]).then(result=>{
    console.log("Rssult is::",result);
}).catch(err=>{
    console.log("Erro is::",err);
})