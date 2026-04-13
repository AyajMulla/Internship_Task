
// basic promise example
let pm=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise resolved");
    },2000);
});
pm.then((message)=>{
    console.log(message);
})


// promise chaining
let pm1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(5);
    },2000);
});
pm1.then((result)=>{
    console.log("First promise resolved with value: " + result);
    return result * 2;
}
).then((result)=>{
    console.log("Second promise resolved with value: " + result);
    return result * 2;
}).then((result)=>{
    console.log("Third promise resolved with value: " + result);
});

// promise with error handling
let pm2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("An error occurred");
    },2000);
});
pm2.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.error("Error: " + error);
});

// api promise example
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://api.example.com/data") {
                resolve("Sample data from API");
            }
            else {
                reject("Invalid URL");
            }
        }, 2000);
    });
}
fetchData("https://api.example.com/data")
    .then((response) => {
        console.log("Data fetched: ");
    })
    .catch((error) => {
        console.error("Error: " + error);
    });

// promise.all example
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000);
}); 
Promise.all([promise1, promise2])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error("Error: " + error);
    });

// promise.allSettled example
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 2000);
});
const promise4 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Promise 4 rejected");
    }, 3000);
}); 
Promise.allSettled([promise3, promise4])
    .then((results) => {
        console.log(results);   
    })
    .catch((error) => {
        console.error("Error: " + error);
    });

    // promise.race example
const promise5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 5 resolved");
    }, 2000);
});
const promise6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 6 resolved");
    }, 3000);
});
Promise.race([promise5, promise6])
    .then((result) => {
        console.log("First promise resolved: " + result);       
    })
    .catch((error) => {
        console.error("Error: " + error);
    });

// promise.finally example
const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 7 resolved");
    }, 2000);
});
promise7.then((result) => {
    console.log(result);
}).finally(() => {
    console.log("Promise 7 has been settled");
});

//simple async example
async function demo() {
    return "Ayaj Mulla";
}
demo().then((value)=>{
    console.log(value);
})


// async with await example
async function weather(){
    console.log("ichalkaranji weather is fetching...");

    let ichalkaranjiweather=await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("24 degrees");
        },1000);
    });
    console.log("Ichalkaranji weather: " + ichalkaranjiweather);
    console.log("ichal weather is fetched");

    console.log("Sangli weather is fetching...");
    let sangliweather=await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("22 degrees");
        },2000);
    });
    console.log("Sangli weather: " + sangliweather);
    console.log("sangli weather is fetched");

    return [ichalkaranjiweather, sangliweather];
}

console.log("Fetching weather data...");
weather().then((value)=>{
    console.log(value)
});

