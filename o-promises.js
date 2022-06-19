//there are different ways to handle asynchronous code in node js
//1.Callbacks, 2.promises, 3.async/await
//states of a promise:
// 1.pending:initial state before the event has happened
// 2.Resolved/Fulfilled:After the operation completed successfully
// 3.Rejected:if the operation had error during an execution, the promise fails
//more about in   javascript.info/promises
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("done")
    }, 1000);
});
console.log(promise);

promise.then(
    function (result) { console.log(result)/*handle the successful result*/},
    function (error) {/*handle an error*/
    }
)

//the first argument of .then() is a function that runs when promise is resolved, and receives the result
//the second argument of .then() is a function that runs when error is rejected, and receives the error

//an instance of a successfully resolved promise
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("fuck you i can do it")
    }, 1000)
}).then((result) => {
    console.log(result);
});
setTimeout(() => {
    console.log(promise1)
}, 1500);

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error("whoops something went wrong"))
    }, 3000);
}).then(result => {
    console.log(result)
}, error => {
    console.log(error)
});
setTimeout(() => {
    console.log(promise2)
}, 4000);

promise.catch() //same as promise.then(null, f=>{})


//      ASYNC/Await
async function f(){return 1} //async always returns promise
f().then(result=>{console.log(result)});
