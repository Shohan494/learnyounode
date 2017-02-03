var fs = require('fs')
fs.readdir(process.argv[2], function callback(err, list)
{
  //console.log(list)
  var tofilter = "." + process.argv[3]
  //console.log(tofilter);
  var result = filterItems(tofilter)
  for(i = 0; i < result.length; i++)
  {
    console.log(result[i])
  }
  //function help taken from js filter official
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Searching_in_array
  function filterItems(query) {
    return list.filter(function(el) {
     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })

}

})

/* official sollution

    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
    
*/
