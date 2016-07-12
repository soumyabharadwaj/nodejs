var fs = require("fs");
var cnt_area,cnt_age,cnt_total,cnt_cat1,cnt_cat2,cnt_cat3;
var data = fs.readFileSync('India2011.csv');
var stringData=data.toString();
var rows= stringData.split('\r\n');
var header=rows[0].split(',');


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


var final_obj={};

for (var i = 1; i < rows.length - 1; i++) {

  var line=rows[i].split(',');
  if(final_obj[header[cnt_wo]]==undefined && final_obj[header[cnt_below]]==undefined && final_obj[header[cnt_pri]]==undefined && final_obj[header[cnt_mid]]==undefined &&final_obj[header[cnt_sec]]==undefined && final_obj[header[cnt_high]]==undefined
    && final_obj[header[cnt_non]]==undefined && final_obj[header[cnt_tech]]==undefined && final_obj[header[cnt_grad]]==undefined && final_obj[header[cnt_unclas]]==undefined)
  {
    final_obj[header[cnt_wo]]=0;
    final_obj[header[cnt_below]]=0;
    final_obj[header[cnt_pri]]=0;
    final_obj[header[cnt_mid]]=0;
    final_obj[header[cnt_sec]]=0;
    final_obj[header[cnt_high]]=0;
    final_obj[header[cnt_non]]=0;
    final_obj[header[cnt_tech]]=0;
    final_obj[header[cnt_grad]]=0;
    final_obj[header[cnt_unclas]]=0;
  }
  if(line[cnt_age] =='All ages' && line[cnt_total]=='Total')
  {

      final_obj[header[cnt_wo]]+=parseInt(line[cnt_wo]);
      final_obj[header[cnt_below]]+=parseInt(line[cnt_below]);
      final_obj[header[cnt_pri]]+=parseInt(line[cnt_pri]);
      final_obj[header[cnt_mid]]+=parseInt(line[cnt_mid]);
      final_obj[header[cnt_sec]]+=parseInt(line[cnt_sec]);
      final_obj[header[cnt_high]]+=parseInt(line[cnt_high]);
      final_obj[header[cnt_non]]+=parseInt(line[cnt_non]);
      final_obj[header[cnt_tech]]+=parseInt(line[cnt_tech]);
      final_obj[header[cnt_grad]]+=parseInt(line[cnt_grad]);
      final_obj[header[cnt_unclas]]+=parseInt(line[cnt_unclas]);

  }

};
console.log(final_obj);
