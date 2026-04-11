
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
