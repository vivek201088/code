//basic callbck
function greet(name,callback){
    console.log(name);
    callback();
}

function welcome(){
    console.log("Welcome!!!");
}

greet("Naveen",welcome);

//callback with async function
function printInfo(name,callback){
    //Async function/task
     setTimeout(function(){
      console.log("printing info for",name );
      callback("plz call me back!!!");
     },3000);
}

function displayMessage(message){
    console.log(message);
}

printInfo("Lisa",displayMessage)