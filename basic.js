// // var bar=null;
// // console.log("object");

// const outer = (function(){
//     console.log("Hello")
// })()

// //console.log(outer());


// function outer(){
//     var name="mazila"

//     function displayName(){
//         console.log(name);
//     }

//     displayName();
// }

// outer();
function outer(){
    var name="mazila"

    function displayName(){
        console.log(name);
    }

    return displayName
}

const myfun=outer()
myfun()