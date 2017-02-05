var http = require('http')

http.get(process.argv[2], function (response)
{


  var arr1 = []

  response.setEncoding('utf8');
  response.on("data", function (data){
    arr1.push(data)
  })

  response.on("end",function(){
      //console.log(arr1.join("").length);
      var joined = (arr1.join(""));
      console.log(joined);

  });

  response.on("error",console.error);

})

http.get(process.argv[3], function (response)
{


  var arr2 = []

  response.setEncoding('utf8');
  response.on("data", function (data){
    arr2.push(data)
  })

  response.on("end",function(){
      //console.log(arr2.join("").length);
      var joined2 = (arr2.join(""));
      console.log(joined2);

  });

  response.on("error",console.error);

})

http.get(process.argv[4], function (response)
{


  var arr3 = []

  response.setEncoding('utf8');
  response.on("data", function (data){
    arr3.push(data)
  })

  response.on("end",function(){
      //console.log(arr3.join("").length);
      var joined3 = (arr3.join(""));
      console.log(joined3);

  });

  response.on("error",console.error);

})

/*

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

*/
