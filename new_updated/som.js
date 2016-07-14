var fs = require("fs");

var data = fs.readFileSync('census.csv');


var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var header=arrayOne[0].split(',');

var cnt_area,cnt_age,cnt_lit,cnt_total,cnt_wo,cnt_below,cnt_pri,cnt_mid,cnt_sec,cnt_high,cnt_non,cnt_tech,cnt_unclas,cnt_grad ;
cnt_area = header.indexOf('Area Name');
cnt_age = header.indexOf('Age-group');
cnt_lit = header.indexOf('Literate - Persons');
cnt_total = header.indexOf('Total/ Rural/ Urban');



var noOfRow = arrayOne.length;
var noOfCol = header.length;

var arr_age=[];
var final_obj={};
var final_obj1={};
var arr_edu=[];
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {

      var line=arrayOne[i].split(',');

        if((line[cnt_age] != '0-6') && (line[cnt_age] != 'All ages') && (line[cnt_total] == 'Total'))
        {
          final_obj[header[cnt_area]]=line[cnt_area];
          final_obj[header[cnt_age]]=line[cnt_age];
          final_obj[header[cnt_lit]]=line[cnt_lit];

          arr_age.push(final_obj);
        }
        final_obj={};

    };

console.log(arr_age);


var file1 = 'data_age.json';
var obj1 = JSON.stringify(arr_age);
fs.writeFileSync(file1, obj1);
