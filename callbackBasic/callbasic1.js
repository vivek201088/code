//basic callbck

function greet(name,callback){
    console.log(name);
    callback();
}

function welcome(){
    console.log("Welcome!!!");
}


greet("Naveen",welcome);