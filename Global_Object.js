// console: Used for printing messages to the console.
    console.log("Hai, I am Pavan Kumar");

// require: Used to import modules or files into a Node.js application.
    const fs = require('fs');

// __dirname: Represents the directory name of the current module.
    console.log(__dirname); // Prints the directory name of the current module

// __filename: Represents the file name of the current module.
    console.log(__filename);      // Prints the file name of the current module

// module: Represents the current module and contains properties and methods for module-related operations.
    console.log(module.filename); // Prints the file name of the current module

// process: Provides information about the current Node.js process and allows interaction with it.
    console.log(process.pid); // Prints the process ID
    console.log(process.cwd()); // Prints the current working directory


let url2 = new URL("/foo", "http://google.com/")
console.log(url2);

const url = require('url');

// Parse a URL string
const urlString = 'https://www.example.com/path/to/resource?query=value';
const parsedUrl = new URL(urlString);

// Access different parts of the parsed URL
console.log('Protocol:', parsedUrl.protocol); // Prints: https:
console.log('Hostname:', parsedUrl.hostname); // Prints: www.example.com
console.log('Path:', parsedUrl.pathname); // Prints: /path/to/resource
console.log('Query:', parsedUrl.searchParams.get('query')); // Prints: value


// let data = new Buffer("Pavan Kumar")
// console.log(data);

// let data2 = new Buffer.from("Pavan Kumar")
// console.log(data2);

// let data5 = new Buffer.from([76543,"Pavan"])
// console.log(data5);

// let data3 = new Buffer.alloc(22)
// console.log(data3);

// let data4 = new Buffer.allocUnsafe(65432)
// console.log(data4);

// let data6= new Buffer.allocUnsafeSlow(65432)
// console.log(data6);



// Some commonly used timer functions in Node.js:

// setTimeout: Executes a function once after a specified delay (in milliseconds).
setTimeout(() => {
    console.log('Delayed message');
  }, 1000); // Executes after 1 second
  

// setInterval: Executes a function repeatedly, with a fixed time delay between each execution.
setInterval(() => {
    console.log('Repeated message');
  }, 2000); // Executes every 2 seconds
  
// setImmediate: Executes a function asynchronously, as soon as possible after the current event loop cycle.
  setImmediate(() => {
    console.log('Immediate message');
  });

// process.nextTick: Schedules a callback to be invoked in the next iteration of the event loop, after the current operation completes.
  process.nextTick(() => {
    console.log('Next tick message');
  });
  
  