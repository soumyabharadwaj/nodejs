var dataset = require('./file1.json');
var fs = require('fs');

var literatePopulationByAge = [];

dataset.forEach(function(data) {
  for(property in data) {
    if(property!="age-group") {
      var literateRate = {};
      literateRate["AreaName"] = property;
      literateRate["AgeGroup"] = data["age-group"];
      literateRate["LiteratePopulation"] = data[property];
      literatePopulationByAge.push(literateRate);
    }
  }
});

fs.writeFileSync('dataset.json',JSON.stringify(literatePopulationByAge,null,2));
