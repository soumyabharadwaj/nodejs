var fs = require("fs");
var data = fs.readFileSync('census.csv');
//var data1 = fs.readFileSync('IndiaSC2011.csv');
//var data2 = fs.readFileSync('IndiaST2011.csv');
var cnt_area,cnt_age,cnt_lit,cnt_total,cnt_wo,cnt_below,cnt_pri,cnt_mid,cnt_sec,cnt_high,cnt_non,cnt_tech,cnt_unclas,cnt_grad ;

var final_obj={};
var final_obj1={};
var arr_age=[];
var arr_edu=[];
var i=0,j=0;
  var jArray = [];
var state=[];
var age=[];

function calc(data){


  var stringData=data.toString();
  var arrayOne= stringData.split('\r\n');
  var header=arrayOne[0].split(',');
  cnt_area = header.indexOf('Area Name');
  cnt_age = header.indexOf('Age-group');
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

for (i = 1; i < arrayOne.length-1; i++) {

    var line=arrayOne[i].split(',');
    if((line[cnt_age] != '0-6') && (line[cnt_age] != 'All ages') && (line[cnt_total] == 'Total'))
    {
      if(final_obj[line[cnt_age]][line[cnt_area]]==undefined)
      {
        final_obj[line[cnt_age]][line[cnt_area]]=line[cnt_lit];
      }
      else
      {
          final_obj[line[cnt_age]][line[cnt_area]]+=parseInt(line[cnt_lit]);
      }

    }

      if(final_obj1[header[cnt_wo]]==undefined && final_obj1[header[cnt_below]]==undefined && final_obj1[header[cnt_pri]]==undefined && final_obj1[header[cnt_mid]]==undefined &&final_obj1[header[cnt_sec]]==undefined && final_obj1[header[cnt_high]]==undefined
             && final_obj1[header[cnt_non]]==undefined && final_obj1[header[cnt_tech]]==undefined && final_obj1[header[cnt_grad]]==undefined && final_obj1[header[cnt_unclas]]==undefined)
           {
             final_obj1[header[cnt_wo]]=0;
             final_obj1[header[cnt_below]]=0;
             final_obj1[header[cnt_pri]]=0;
             final_obj1[header[cnt_mid]]=0;
             final_obj1[header[cnt_sec]]=0;
             final_obj1[header[cnt_high]]=0;
             final_obj1[header[cnt_non]]=0;
             final_obj1[header[cnt_tech]]=0;
             final_obj1[header[cnt_grad]]=0;
             final_obj1[header[cnt_unclas]]=0;
           }



           if(line[cnt_age] =='All ages' && line[cnt_total]=='Total')
           {

               final_obj1[header[cnt_wo]]+=parseInt(line[cnt_wo]);
               final_obj1[header[cnt_below]]+=parseInt(line[cnt_below]);
               final_obj1[header[cnt_pri]]+=parseInt(line[cnt_pri]);
               final_obj1[header[cnt_mid]]+=parseInt(line[cnt_mid]);
               final_obj1[header[cnt_sec]]+=parseInt(line[cnt_sec]);
               final_obj1[header[cnt_high]]+=parseInt(line[cnt_high]);
               final_obj1[header[cnt_non]]+=parseInt(line[cnt_non]);
               final_obj1[header[cnt_tech]]+=parseInt(line[cnt_tech]);
               final_obj1[header[cnt_grad]]+=parseInt(line[cnt_grad]);
               final_obj1[header[cnt_unclas]]+=parseInt(line[cnt_unclas]);

           }
           final_obj={};

};
// console.log(jArray);
}//function data

calc(data);
calc(data1);
calc(data2);
console.log(final_obj);
console.log(final_obj1);
