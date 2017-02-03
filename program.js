//1 console.log("HELLO WORLD")

//2 console.log(process.argv)

//2nd solution
/*
var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)
*/

// 3rd
//console.log(process.argv)

var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
//console.log(process.argv[2])

var str = buf.toString()

var result = str.split("\n")


//console.log(str)


console.log(result.length - 1)
//console.log(result.length + 1)

//3rd official
/*  
    var fs = require('fs')
    
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/
