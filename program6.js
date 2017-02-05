var http = require('http')

http.get(process.argv[2], function (response)
{
  //We have to take en empty array
  //because we have to push our output data into it
  //and then we have to convert it to normal string
  var arr = []
  //encoding
  response.setEncoding('utf8');
  //data will not be always smoothly distributed
  //it can have a break while fetching because of a "new line" for example
  response.on("data", function (data){
    arr.push(data)
  })

  //where the flow of data is ended, we can find it through the next line of code
  response.on("end",function(){
    ////THEN WE ARE JOINING THE WORDS OR THE PARTS WHICH WE PUSHED INTO OUR EMPTY array
    ////THROUGH THE JOIN METHOD
    //..AND ALSO WE ARE GETTING THE LENGTH
      console.log(arr.join("").length);
      var joined = (arr.join(""));
      console.log(joined);

  });

  response.on("error",console.error);
})


/* OFFICIAL, with help of third party

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

*/
