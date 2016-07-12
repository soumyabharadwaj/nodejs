var fs = require("fs");
var csv2array=require('csv2array');

var data = fs.readFileSync('FoodFacts.csv');
var stringData=data.toString();

var arrayOne= stringData.split('\r\n');
var sugar=0;
var salt=0;

var header=arrayOne[0].split(',');
var sugarIndex,saltIndex,countriesIndex;
sugarIndex=header.indexOf('sugars_100g');
saltIndex=header.indexOf('salt_100g');
countriesIndex=header.indexOf('countries');
//console.log(header[cnt]);

var noOfRow = arrayOne.length;
var noOfCol = header.length;

var jArray=[];
var obj1={};
var i,j;
var arr=["Netherlands", "Canada","Australia", "France", "Germany", "Spain","South Africa","USA","United Kingdom"]
for (i = 1; i < noOfRow-1; i++) {
 var myNewLine=csv2array(arrayOne[i])[0];
 obj1[header[countriesIndex]]=myNewLine[countriesIndex];
 obj1[header[sugarIndex]]=myNewLine[sugarIndex];
 obj1[header[saltIndex]]=myNewLine[saltIndex];
 for(j=0;j<arr.length;j++)
  {
   if(obj1.countries==arr[j])
   {
   jArray.push(obj1);
    }
  }
 obj1={};
}

jArray1=[];
for(i=0;i<arr.length;i++)
 add(arr[i]);


function add(country){
 var obj2={};
 for(var i=0;i<jArray.length;i++){
   if(jArray[i].countries===country &&jArray[i].sugars_100g!=''&&jArray[i].salt_100g!=''){
     sugar+=parseFloat(jArray[i].sugars_100g);
     salt+=parseFloat(jArray[i].salt_100g);
   }
 }
 obj2["countries"]=country;
 obj2["sugars_100g"]=sugar;
 obj2["salt_100g"]=salt;
 jArray1.push(obj2);
 sugar=0;
 salt=0;
}

var file = 'data1.json';
var obj=JSON.stringify(jArray1);
fs.writeFileSync(file, obj);
