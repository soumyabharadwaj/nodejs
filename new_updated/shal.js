var json = [{
    "key": "Apples",
    "value": "4"
}, {
    "key": "Pears",
    "value": "7"
}, {
    "key": "Bananas",
    "value": "9"
}];

var processed_json = new Array();
$.map(json, function(obj, i) {
    processed_json.push([obj.key, parseInt(obj.value)]);
});
if (processed_json.length != 0) {
   loadJson();
}

function loadJson() {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        xAxis: {
            type: "category"
        },
        series: [{
            data: processed_json
        }]
    });
}
