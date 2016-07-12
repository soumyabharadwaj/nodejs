var fs = require("fs");

var data = fs.readFileSync('India2011.csv');
//var data1 = fs.readFileSync('IndiaSC2011.csv');
//var data2 = fs.readFileSync('IndiaST2011.csv');
function calc(data)
{
var stringData=data.toString();
var rows= stringData.split('\r\n');


var header=rows[0].split(',');

var cnt_area,cnt_age,cnt_lit,cnt_total,cnt_wo,cnt_below,cnt_pri,cnt_mid,cnt_sec,cnt_high,cnt_non,cnt_tech,cnt_unclas,cnt_grad ;
cnt_area = header.indexOf('Area Name');
cnt_age = header.indexOf('Age');
cnt_lit = header.indexOf('Literate - Persons');
cnt_total = header.indexOf('Total/ Rural/ Urban');
cnt_wo = header.indexOf('Educational level - Literate without educational level - Persons');
cnt_below = header.indexOf('Educational level - Below Primary - Persons');
cnt_pri = header.indexOf('Educational level - Primary - Persons');
cnt_mid = header.indexOf('Educational level - Middle - Persons');
cnt_sec = header.indexOf('Educational level - Matric/Secondary - Persons');
cnt_high = header.indexOf('Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons');
cnt_non = header.indexOf('Educational level - Non-technical diploma or certificate not equal to degree - Persons');
cnt_tech = header.indexOf('Educational level - Technical diploma or certificate not equal to degree - Persons');
cnt_grad = header.indexOf('Educational level - Graduate & above - Persons');
cnt_unclas = header.indexOf('Educational level - Unclassified - Persons');


var final_obj={};
var final_obj1={};
for (var i = 1; i < rows.length - 1; i++) {

  var line=rows[i].split(',');
  if(final_obj[line[cnt_area]]==undefined )
  {
    final_obj[line[cnt_area]]=0;

  }
  if(final_obj1[line[cnt_area]]==undefined )
  {
    final_obj1[line[cnt_area]]=0;

  }

  if(line[cnt_age] !='0-6' && line[cnt_age] !='All ages' && line[cnt_total]=='Total')
  {
    final_obj[line[cnt_area]]+=parseInt(line[cnt_lit]);
  }

  if(line[cnt_age] !='0-6' && line[cnt_age] !='All ages' && line[cnt_total]=='Total')
  {
    final_obj1[line[cnt_area]]+=parseInt(line[cnt_wo]);
  }
};
console.log(final_obj);
console.log(final_obj1);
}//function
calc(data);
//calc(data1);
//calc(data2);
