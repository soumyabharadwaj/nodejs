var fs = require("fs");

var data = fs.readFileSync('India2011.csv');
var stringData=data.toString();

//console.log(stringData);
var arrayOne= stringData.split('\r\n');
//console.log(arrayOne);

var header=arrayOne[0].split(',');

var cnt,cnt1,cnt2;
for(var i=0;i<header.length;i++)
{
if(header[i]=='Age')
{
  cnt=i;
}
if(header[i]=='Literate - Persons')
{
  cnt1=i;
}
if(header[i]=='Area Name')
{
  cnt2=i;
}
}
//console.log(header[cnt]);

var noOfRow=arrayOne.length;
var noOfCol=header.length;

var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {

  for (j = 0; j< noOfCol; j++) {

      var myNewLine=arrayOne[i].split(',');

      //jArray.push( '{'+header[j]+':'+myNewLine[j]+'}');

  };
  final_obj[header[cnt]]=myNewLine[cnt];
  final_obj[header[cnt1]]=myNewLine[cnt1];
  final_obj[header[cnt2]]=myNewLine[cnt2];
  jArray.push(final_obj);
  final_obj={};
};

console.log( jArray);
