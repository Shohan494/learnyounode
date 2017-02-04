//Declaring necessary variables
var mymodule = require('./mymodule');
var dir = process.argv[2];
var filterExtension = process.argv[3];

//Declaring the callback function
var callback = function (err, list) {
    if (err) throw err;
    //this is the online solution process(stakeoverflow)
    //another way is the previous solution process
    list.forEach(function (file) {
        console.log(file);
    })
}

//the main function that takes the 3 arguments
mymodule(dir, filterExtension, callback);
