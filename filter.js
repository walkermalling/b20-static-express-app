var fs = require('fs');

module.exports = function(filename){

  var file = filename.substr(1); // remove leading slash

  fs.readdir( __dirname + '/public', function(err,files){
    for (var i = 0; i < files.length; i++) {
      if( file == files[i]){
        return true;
      }
    }

    return false;
  });

};
