let str="vivek";

let revstr="";
for(let i=str.length-1;i>=0;i--){
   // revstr += str[i];
   revstr=revstr+str[i]
}
console.log(`Reverse of ${str} is:-`,revstr);