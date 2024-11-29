/*Node JS Questions: (Complete any one question)

1. Write a simple Node.js HTTP server that listens on port 3000 and responds with a JSON Object when accessed using api call.
2. Explain what middleware is in Express and write an example middleware function that logs the HTTP method and URL of incoming requests.
3. Write a function that fetches user data from the DB using API call. Use both Promises and async/await approaches.
4. Create a REST API using Express with one endpoint, /users, which responds with a JSON array of user objects.
5. write a SQl query to fetch data from multiple tables using joins.
------------

JavaScript Questions.  (Complete all the Questions)

1.create mathematical operation using let, var and const methods using javascript and print the values in console accordingly.
2.write a function to implement map, reduce, filter, and flatmap using javascript.
3.Give an example of creating a callback function in javascript.
4.write a program to reverse a string using arrays in javascript.*/



//1. Write a simple Node.js HTTP server that listens on port 3000 and responds with a JSON Object when accessed using api call.



const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        const responseData = {
            message: "Hello, World!",
            success: true
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseData));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

// Listen on port 3000
server.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
// this port is already running my divece so I used below pront as 3006

/*const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        const responseData = {
            message: "Hello, World!",
            success: true
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseData));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

// Listen on port 3006
server.listen(3006, () => {
    console.log("Server is listening on port 3006...");
});*/


//1.create mathematical operation using let, var and const methods using javascript and print the values in console accordingly.

let num1 = 10;
var num2 = 20;
const num3 = 5;

let addition = num1 + num2;
console.log("Addition:", addition);

var multiplication = num1 * num3;
console.log("Multiplication:", multiplication);

const division = num2 / num3;
console.log("Division:", division);

//2.write a function to implement map, reduce, filter, and flatmap using javascript.

function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

function customFlatMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let mappedValue = callback(arr[i], i, arr);
        result = result.concat(mappedValue);
    }
    return result;
}

const nums = [1, 2, 3, 4];
console.log("Map:", customMap(nums, x => x * 2));
console.log("Filter:", customFilter(nums, x => x > 2));
console.log("Reduce:", customReduce(nums, (acc, x) => acc + x, 0));
console.log("FlatMap:", customFlatMap(nums, x => [x, x * 2]));

// 3.Give an example of creating a callback function in javascript.
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// 4.write a program to reverse a string using arrays in javascript.
function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = "Hello, World!";
console.log("Original String:", originalString);
console.log("Reversed String:", reverseString(originalString));
