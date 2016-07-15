var file = require('fs');
var read = require('readline');
var csv2array=require('csv2array');
var files=['census.csv','census1.csv','census2.csv'];
var num = 0;
var jArray = [];

function readFile(fileName,callback) {
    var readl = read.createInterface({
      input : file.createReadStream(fileName)
    });
    readl.on('close', function() {
      if(callback==undefined)
        console.log(jArray);
      else
        callback();
    });
    readl.on("line", function(line) {
      num = num + 1;
      if(num == 1) {
        data = csv2array(line);
        header = data[0];
        for(var i = 0;i < header.length; i++) {
          if(header[i] == 'Area Name') {
            indexOfArea = i;
          }
          if(header[i] == 'Age-group') {
            indexOfAge = i;
          }
          if(header[i] == 'Literate - Persons') {
            indexOfPop = i;
          }
          if(header[i] == 'Total/ Rural/ Urban') {
            indexOfTotal = i;
          }
        }
      }
      else {
        data = csv2array(line);
        var line = data[0];
        if(line[indexOfAge]!='0-6' && line[indexOfAge]!='All ages' && line[indexOfTotal]=='Total') {
          var obj = {};
          obj[header[indexOfArea]] = line[indexOfArea];
          obj[header[indexOfAge]] = line[indexOfAge];
          obj[header[indexOfPop]]=line[indexOfPop];
          jArray.push(obj);
        }
      }
    });
};

readFile('census1.csv', function() {
  readFile('census2.csv', function() {
    readFile('census.csv');
  });
});

//
// for(var j = 0 ; j<files.length ; j++) {
//   var readl = read.createInterface({
//     input : file.createReadStream(files[j])
//   });
//   readl.on('close', function() {
//     console.log(jArray);
//   });
//   readl.on("line", function(line) {
//     num = num + 1;
//     if(num == 1) {
//       data = csv2array(line);
//       header = data[0];
//       for(var i = 0;i < header.length; i++) {
//         if(header[i] == 'Area Name') {
//           indexOfArea = i;
//         }
//         if(header[i] == 'Age-group') {
//           indexOfAge = i;
//         }
//         if(header[i] == 'Literate - Persons') {
//           indexOfPop = i;
//         }
//         if(header[i] == 'Total/ Rural/ Urban') {
//           indexOfTotal = i;
//         }
//       }
//     }
//     else {
//       data = csv2array(line);
//       var line = data[0];
//       if(line[indexOfAge]!='0-6' && line[indexOfAge]!='All ages' && line[indexOfTotal]=='Total') {
//         var obj = {};
//         obj[header[indexOfArea]] = line[indexOfArea];
//         obj[header[indexOfAge]] = line[indexOfAge];
//         obj[header[indexOfPop]]=line[indexOfPop];
//         jArray.push(obj);
//       }
//     }
//   });
// } //for
