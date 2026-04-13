
function run(){
    console.log("hello");
    settimeout(run,1000);
}
setTimeout(run,1000);