//Basic Function
function greet(){
   console.log("Hello World");
}
greet();

//Function with parameters
function greet1(name){
   console.log("Hello " + name);
}
greet1("Ayaj");
greet1("Mulla");

//Function with return value
function add(a, b){
   return a + b;
}
const sum = add(5, 10);
console.log("Sum: " + sum);

//Arrow Function
const greet2 = (name) => {
   console.log("Hello " + name);
}
greet2("Ayaj");
greet2("Mulla");

//Anonymous Function
setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);

//callback Function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data);
    }
    , 3000);
}
fetchData((data) => {
    console.log(data);
});