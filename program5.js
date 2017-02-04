  var http = require('http')

  http.get(process.argv[2], function (response)
  {
    var res = response.setEncoding('utf8')
    res.on('data', console.log)
    response.on('error', console.error)
  })

/*
  //getting the http in a variable
  var http = require('http')
  //using the variable to get the response
  http.get(process.argv[2], function (response) {
    //console.log("Got response: " + response.statusCode);
    //listening to the data
    //Where the response object is a Node Stream object. You can treat Node
    //Streams as objects that emit events. The three events that are of most
    //interest are: "data", "error" and "end". You listen to an event like so:
    response.on("data", function (data) {
      //console.log(data)
      var res= response.setEncoding('utf8')
      console.log(res)
   })
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
*/
