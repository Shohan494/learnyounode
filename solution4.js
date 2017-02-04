//Stake Overflow

My makeitmodular.js file is:

var path = require('path');
var mymodule = require('./mymodule');
var dir = process.argv[2];
var filterExtension = process.argv[3];

//callback function that returnd the data otherwise throws error
var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

mymodule(dir, filterExtension, callback);

My module.js file is:

var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        else {
            list = list.filter(function (file) {
                if(path.extname(file) === '.' + extension) return true;
            })
            return callback(null, list);
        }
    })
}

//official
_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
on/solution.js_ :


   var filterFn = require('./solution_filter.js')
   var dir = process.argv[2]
   var filterStr = process.argv[3]

   filterFn(dir, filterStr, function (err, list) {
     if (err) {
       return console.error('There was an error:', err)
     }

     list.forEach(function (file) {
       console.log(file)
     })
   })

─────────────────────────────────────────────────────────────────────────────
_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
on/solution_filter.js_ :


   var fs = require('fs')
   var path = require('path')

   module.exports = function (dir, filterStr, callback) {
     fs.readdir(dir, function (err, list) {
       if (err) {
         return callback(err)
       }

       list = list.filter(function (file) {
         return path.extname(file) === '.' + filterStr
       })

       callback(null, list)
     })
   }
