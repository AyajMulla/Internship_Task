// demo json
const data = {
    "name": "ayaj",
    "surname": "mulla",
    "description": "null",
    "age": 22,
    "gender": "male",
    "hobbies": [
        "coding",
        "gaming",
        "traveling"
    ],          
    "education": {
        "degree": "Bachelor's in Computer Science",
        "university": "Shivaji University",
        "graduation_year": 2023
    }
}


//convert to json string
const jsonString = JSON.stringify(data);
console.log(jsonString);

//convert json string back to object
const obj = JSON.parse(jsonString);
console.log(obj);