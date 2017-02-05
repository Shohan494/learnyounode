var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){
  // The filename is simple the local directory and tacks on the requested url
  var filename = process.argv[3];
  // This line opens the file as a readable stream
  var readStream = fs.createReadStream(filename)
  readStream.pipe(res)
  });
server.listen(process.argv[2])

/*official solution
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
