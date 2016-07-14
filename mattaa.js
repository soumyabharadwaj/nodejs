var fs = require("fs");
var data = fs.readFileSync('India2011.csv');
var data1 = fs.readFileSync('IndiaSC2011.csv');
var data2 = fs.readFileSync('IndiaST2011.csv');


var cnt_area,cnt_age,cnt_lit,cnt_total,cnt_wo,cnt_below,cnt_pri,cnt_mid,cnt_sec,cnt_high,cnt_non,cnt_tech,cnt_unclas,cnt_grad ;
var final_obj={};
var final_obj1={};
var jArray = [];
var jArray1=[];

var i=0,j=0;

function calc (data) {
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
line[cnt_area]=line[cnt_area].substring(7,40);
header[cnt_wo]=header[cnt_wo].substring(0,53);
header[cnt_below]=header[cnt_below].substring(0,32);
header[cnt_pri]=header[cnt_pri].substring(0,26);
header[cnt_mid]=header[cnt_mid].substring(0,25);
header[cnt_sec]=header[cnt_sec].substring(0,35);
header[cnt_high]=header[cnt_high].substring(0,81);
header[cnt_non]=header[cnt_non].substring(0,75);
header[cnt_tech]=header[cnt_tech].substring(0,70);
header[cnt_grad]=header[cnt_grad].substring(0,35);
header[cnt_unclas]=header[cnt_unclas].substring(0,32);

  if((line[cnt_age] != '0-6') && (line[cnt_age] != 'All ages') && (line[cnt_total] == 'Total'))
  {
    if(final_obj[line[cnt_age]]==undefined)
    {
      final_obj[line[cnt_age]]={};
    }
  if(final_obj[line[cnt_age]][line[cnt_area]]==undefined )
  {
  final_obj[line[cnt_age]][line[cnt_area]]=0;

  }

  else {

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

};
}//function data
calc(data);
calc(data1);
calc(data2);
var jArray3=[];
for(property in final_obj1)
{
  var obj3={};
  obj3.category=property;
  obj3.value=final_obj1[property];
  jArray3.push(obj3);

}

jArray1.push(final_obj);
console.log(jArray1);


console.log(jArray3);

//Write the data into JSON file
var dataset = jArray1[0];
var jArray4 = [];
for(property in dataset) {
  dataset[property]["age-group"] = property;
  jArray4.push(dataset[property]);
}

console.log(jArray4);

var file = 'file1.json';

var obj = JSON.stringify(jArray4);

fs.writeFileSync(file, obj);

var file = 'file2.json';

var obj = JSON.stringify(jArray3);

fs.writeFileSync(file, obj);
