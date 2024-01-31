function fetch(uId,callback){
   setTimeout(function (){
       const users={
        1:{name:"Naveen",age:21,email:"nveen@gmail.com"},
        2:{name:"Vivek",age:33,email:"vicky@gmail.com"},
        3:{name:"Archana Kumari",age:32,email:"archu@gmail.com"}
       }

      const user=users[uId];
      if(user){
        callback(null,user);
      }else{
        callback("User not found",null)
      }
   },3000)
}

function handleUser(error,user){
if(error){
    console.warn("Error",error)
}else{
    console.log("User:",user);
}
}

fetch(3,handleUser)