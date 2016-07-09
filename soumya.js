var fs = require("fs");

var data = fs.readFileSync('India2011.csv');
var data1 = fs.readFileSync('IndiaSC2011.csv');
var data2 = fs.readFileSync('IndiaST2011.csv');
function calc(data)
{
var stringData=data.toString();
var rows= stringData.split('\r\n');


var header=rows[0].split(',');

var cnt_age,cnt_code,cnt_lit,cnt_total;
cnt_area = header.indexOf('Area Name');
cnt_age = header.indexOf('Age');
cnt_lit = header.indexOf('Literate - Persons');
cnt_total = header.indexOf('Total/ Rural/ Urban');

var final_obj={};
for (var i = 1; i < rows.length - 1; i++) {

  var line=rows[i].split(',');
  if(final_obj[line[cnt_area]]==undefined )
  {
    final_obj[line[cnt_area]]=0;

  }
  if(line[cnt_age] !='0-6' && line[cnt_age] !='All ages' && line[cnt_total]=='Total')
  {
    final_obj[line[cnt_area]]+=parseInt(line[cnt_lit]);
// console.log("value of line[cnt_age ] is"+line[cnt_age]);
    //final_obj[line[cnt_age]]=parseInt(line[cnt_age]);


  }
};

return console.log(final_obj);
}//function
calc(data);
calc(data1);
calc(data2);
