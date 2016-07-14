var fs = require("fs");
var data = fs.readFileSync('IndiaST2011.csv');
var data1 = fs.readFileSync('India2011.csv');
var data2 = fs.readFileSync('IndiaSC2011.csv');
var indexOfArea,indexOfAge,indexOfLit,indexOfTotal;
var cnt_wo,cnt_below,cnt_pri,cnt_mid,cnt_sec,cnt_high,cnt_non,cnt_tech,cnt_unclas,cnt_grad ;
var obj={};
var obj1={};
var write1='age_lit.json';
var write2='edu_cat.json'
var i=0,j=0;

function calc(data,write1,write2) {
  var stringData=data.toString();
  var arrayOne= stringData.split('\r\n');
  var header=arrayOne[0].split(',');
  indexOfArea = header.indexOf('Area Name');
  indexOfAge = header.indexOf('Age-group');
  indexOfLit = header.indexOf('Literate - Persons');
  indexOfTotal = header.indexOf('Total/ Rural/ Urban');
  cnt_area = header.indexOf('state');
  cnt_age = header.indexOf('Age-group');
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
    if((line[indexOfAge] != '0-6') && (line[indexOfAge] != 'All ages') && (line[indexOfTotal] == 'Total')) {
      if(obj[line[indexOfAge]]==undefined) {
        obj[line[indexOfAge]] = {}
      }
      if(obj[line[indexOfAge]][line[indexOfArea]] == undefined) {
        obj[line[indexOfAge]][line[indexOfArea]] = 0;
      }
      obj[line[indexOfAge]][line[indexOfArea]]+=parseInt(line[indexOfLit]);
    }
    if(obj1[header[cnt_wo]]==undefined && obj1[header[cnt_below]]==undefined && obj1[header[cnt_pri]]==undefined
      && obj1[header[cnt_mid]]==undefined && obj1[header[cnt_sec]]==undefined && obj1[header[cnt_high]]==undefined
      && obj1[header[cnt_non]]==undefined && obj1[header[cnt_tech]]==undefined && obj1[header[cnt_grad]]==undefined
      && obj1[header[cnt_unclas]]==undefined)
      {
      obj1[header[cnt_wo]]=0;
      obj1[header[cnt_below]]=0;
      obj1[header[cnt_pri]]=0;
      obj1[header[cnt_mid]]=0;
      obj1[header[cnt_sec]]=0;
      obj1[header[cnt_high]]=0;
      obj1[header[cnt_non]]=0;
      obj1[header[cnt_tech]]=0;
      obj1[header[cnt_grad]]=0;
      obj1[header[cnt_unclas]]=0;
    }
    if(line[cnt_age] =='All ages' && line[cnt_total]=='Total')
    {

        obj1[header[cnt_wo]]+=parseInt(line[cnt_wo]);
        obj1[header[cnt_below]]+=parseInt(line[cnt_below]);
        obj1[header[cnt_pri]]+=parseInt(line[cnt_pri]);
        obj1[header[cnt_mid]]+=parseInt(line[cnt_mid]);
        obj1[header[cnt_sec]]+=parseInt(line[cnt_sec]);
        obj1[header[cnt_high]]+=parseInt(line[cnt_high]);
        obj1[header[cnt_non]]+=parseInt(line[cnt_non]);
        obj1[header[cnt_tech]]+=parseInt(line[cnt_tech]);
        obj1[header[cnt_grad]]+=parseInt(line[cnt_grad]);
        obj1[header[cnt_unclas]]+=parseInt(line[cnt_unclas]);

    }
  } //for

  var file1 = write1;
  var obj_age = JSON.stringify(obj);
  fs.writeFileSync(file1, obj_age);

  var file2 = write2;
  var obj_edu = JSON.stringify(obj1);
  fs.writeFileSync(file2, obj_edu);
} //finction

calc(data,write1,write2);
calc(data1,write1,write2);
calc(data2,write1,write2);
console.log(obj);
console.log(obj1);
