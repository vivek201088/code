//case where always allpromise fullfilled 
const function1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve("Data from fnction1");
        },2000)
    })
}

const function2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve("Data from fnction2");
        },2000)
    })
}

const function3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve("Data from fnction3");
        },2000)
    })
}

Promise.all([
            function1(),
            function2(),
            function3()]).then(dataArray=>{
                console.log("All data",dataArray);
            }).catch(err=>{
                console.log("error in promise::",err);
            })