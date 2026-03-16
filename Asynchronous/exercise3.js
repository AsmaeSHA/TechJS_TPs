//1. Print out "Program started" at the start of your code
  console.log("Program Started");
//2. Create a Promise that resolves after 3 seconds 
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Step 1 complete");
    }, 3000);
});
//3. Log out the promise while it's pending
  console.log(firstPromise);
//4. Print out "Program in progress..." as well
  console.log("Program in progress...");
//5. Print out "Step 1 complete" when the first promise fulfills
//6. Have the first promise return another new Promise that will fulfill after 3 seconds with the message "Step 2 complete"
//7. Print out the message from the second promise after it fulfills ("step 2 complete")
// 5, 6, 7 Promise chaining

firstPromise.then((message)=>{
    console.log (message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Step 2 complete");},3000);
        });
    }).then((message2)=>{
        console.log(message2);
    });
