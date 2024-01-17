/*
JavaScript interview questions that are relevant for a backend developer role:
------------------------------------------------------------------------------

1.  Explain the event loop in JavaScript. How does it work, and why is it important for asynchronous programming?

Ans:-  The event loop is a fundamental concept in JavaScript that allows it to handle asynchronous operations.
       JavaScript is a single-threaded language, meaning it can only execute one operation at a time. However,
       it often needs to deal with tasks that take time, such as fetching data from a server, reading a file,
       or handling user input. To handle these asynchronous operations without blocking the execution of the program,
       JavaScript employs the event loop.

    Here's a high-level explanation of how the event loop works:

Call Stack:

The JavaScript engine has a call stack, which is a data structure that keeps track of the functions that are currently 
being executed. When a function is called, it is added to the top of the call stack.

Callback Queue:

JavaScript uses the callback queue to store tasks that are ready to be executed once the call stack is empty. 
These tasks typically include callbacks from asynchronous operations.

Event Loop:

The event loop constantly monitors the call stack and the callback queue.
If the call stack is empty, the event loop checks the callback queue.
If there are callbacks in the queue, it moves the first callback to the call stack for execution.

Execution:

The callback is executed, and if it contains asynchronous code (e.g., a setTimeout function or a Promise), the associated
callbacks are placed in the callback queue.

Repeat:

The event loop continues this process, ensuring that the call stack is never blocked and that asynchronous tasks are 
handled when they are ready.

2.  What is the difference between var, let, and const in JavaScript? When would you use each one?
Ans:- var, let, and const are used for variable declaration in JavaScript, but they have some differences in terms of
     scope, hoisting, and mutability.

var:

Scope: Variables declared with var are function-scoped, meaning they are only visible within the function in which they
       are declared. If declared outside any function, they have global scope. 

Hoisting: Variables declared with var are hoisted to the top of their scope, which means they are moved to the top of
          the function or global context during the compilation phase.

Reassignment: Variables declared with var can be redeclared and reassigned. */

function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10, var is function-scoped
}

/*
let:

Scope: Variables declared with let are block-scoped, meaning they are only visible within the block (statement or 
       compound statement) in which they are declared.
Hoisting: Variables declared with let are hoisted to the top of their block, but the variable is not initialized
       until the declaration statement is executed.
Reassignment: Variables declared with let can be reassigned, but not redeclared in the same scope.
*/
function example() {
    if (true) {
      let y = 20;
    }
    // console.log(y); // Error, y is not defined outside the block
  }
  /*
const:
Scope: Variables declared with const are also block-scoped.
Hoisting: Like let, const is hoisted to the top of its block, but it is not initialized until the declaration statement
          is executed.
Reassignment: Variables declared with const cannot be reassigned after initialization. They must be assigned a value
            when declared, and that value cannot be changed.
  
  */

            const z = 30;
// z = 40; // Error, cannot reassign const variable


/*
3.  How does prototypal inheritance work in JavaScript?

4.  Explain the concept of closures in JavaScript. Can you provide an example of when you might use a closure in 
    a backend application?

5.  What is the purpose of the this keyword in JavaScript? How does it behave in different contexts?

6.  How does error handling work in JavaScript? Can you explain the difference between try...catch and the 
    onerror event handler?

7.  Describe the difference between undefined and null in JavaScript.

8.  Explain the concept of promises and how they are used in asynchronous programming. What advantages do promises
    have over callbacks?

09. Compare and contrast the == and === operators in JavaScript. When would you use one over the other?

10. What are arrow functions in JavaScript? How do they differ from regular functions, and in what scenarios
    would you prefer using arrow functions?

13. Explain the concept of middleware in the context of Node.js. Why is it commonly used in building web applications?

14. What is the purpose of the package.json file in a Node.js project? Can you explain the significance of dependencies 
    and devDependencies?

15. How can you handle authentication in a Node.js application? Discuss different authentication strategies.
*/
