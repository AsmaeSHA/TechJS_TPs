// 1. Print out "Program Started" at the start of your code
console.log("Program Started");
//2. Create a Promise that resolves after 3 seconds and rejects after 2 seconds
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Program complete");
    }, 2000);
     setTimeout(() => {
        reject("Program faild");
    }, 3000);
});

// 3. Log out the promise while it's pending
console.log(myPromise);

// 4. Print out "Program in progress..." as well
console.log("Program in progress...");

// 5. Print out "Program complete" when the promise completes after 3 seconds
// 6. Print out "Program failure" if the promise rejects
myPromise
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error); 
    });
