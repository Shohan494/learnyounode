
var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  //console.log('client connected');

  c.on('end', function() {
    //console.log('client disconnected');
  });
  var date = new Date()
  date.setMonth('02')
  //c.write();
  c.write( date.getFullYear()+"-0"+date.getMonth()+"-0"+date.getDate()+" "+date.getHours()+":"+date.getMinutes() )
  c.end('\n')
});

server.listen(process.argv[2], function() { //'listening' listener
  //console.log('server bound');

  //c.pipe(c);
});

/*official solution

var net = require('net')

 function zeroFill (i) {
   return (i < 10 ? '0' : '') + i
 }

 function now () {
   var d = new Date()
   return d.getFullYear() + '-' +
     zeroFill(d.getMonth() + 1) + '-' +
     zeroFill(d.getDate()) + ' ' +
     zeroFill(d.getHours()) + ':' +
     zeroFill(d.getMinutes())
 }

 var server = net.createServer(function (socket) {
   socket.end(now() + '\n')
 })

 server.listen(Number(process.argv[2]))


*/
