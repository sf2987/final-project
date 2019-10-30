var width = 1300;
var height = 800;

var dataset = [];
var nameset = [];


var data = [{"station":"Times Sq-42 St","riders":261},
{"province":"SD","museum":351},
{"province":"HA","museum":274},
{"province":"SC","museum":223},
{"province":"JS","museum":284},
{"province":"HE","museum":100},
{"province":"HN","museum":134},
{"province":"AH","museum":189},
{"province":"ZJ","museum":286},
{"province":"HB","museum":204},
{"province":"GX","museum":102},
{"province":"YN","museum":105},
{"province":"JX","museum":141},
{"province":"LN","museum":97},
{"province":"HL","museum":200},
{"province":"SN","museum":244},
{"province":"FJ","museum":115},
{"province":"SX","museum":126},
{"province":"GZ","museum":84},
{"province":"CQ","museum":72},
{"province":"JL","museum":107},
{"province":"GS","museum":190},
{"province":"IM","museum":198},
{"province":"SH","museum":119},
{"province":"XJ","museum":105},
{"province":"BJ","museum":151},
{"province":"TJ","museum":58},
{"province":"NX","museum":40},
{"province":"QH","museum":33},
{"province":"Tibet","museum":8},
{"province":"HI","museum":25}

];



data.forEach(function(d){
    dataset.push(d.museum);
    nameset.push(d.province);
  });


var svg = d3.select("body").append("svg")
   .attr("width",width)
   .attr("height",height);

/*
d3.json("data.json",function(error,data){

data.forEach(function(d){
    dataset.push(d.museum);
    nameset.push(d.province);
  });

*/


var xAxisScale = d3.scale.ordinal()
   .domain(d3.range(dataset.length))
   .rangeRoundBands([0,1200]);

var yAxisScale = d3.scale.linear()
   .domain([0,d3.max(dataset)])
   .range([500,0]);

var xAxis = d3.svg.axis()
   .scale(xAxisScale)
   .orient("bottom");

var yAxis = d3.svg.axis()
   .scale(yAxisScale)
   .orient("left");



var xScale = d3.scale.ordinal()
   .domain(d3.range(dataset.length))
   .rangeRoundBands([0,1200],0.02);

var yScale = d3.scale.linear()
  .domain([0,d3.max(dataset)])
  .range([0,500]);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("y",function(d,i){return 50 + 500 ;})
   .attr("height",0)
   .attr("fill","yellow")
   .transition()
   .duration(3000)
   .ease("sin")
   .delay(function(d,i){return 200*i;})
   .attr("x", function(d,i){return 30 + xScale(i);})
   .attr("y",function(d,i){return 50 + 500 - yScale(d) ;})
   .attr("width", function(d,i){return xScale.rangeBand();})
   .attr("height",yScale)
   .attr("fill","#8CD3DD");



svg.selectAll("text")
            .data(dataset)
            .enter().append("text")
            .attr("x", function(d,i){return 30 + xScale(i);} )
            .attr("y",function(d,i){return 50 + 500 - yScale(d) ;})
            .attr("dx", function(d,i){return xScale.rangeBand()/3;})
            .attr("dy", 15)
            .attr("text-anchor", "begin")
            .attr("font-size", 14)
            .attr("fill","white")
            .text(function(d,i){return d;});

xAxisScale.domain(nameset);

svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(30,550)")
  .call(xAxis);


svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(30,50)")
  .call(yAxis);

//grid

function make_y_axis(){
  return d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .tickValues([35,85,135,185,235,285,335])
}


svg.append("g")
  .attr("class","grid")
  .call(make_y_axis()
      .tickSize(-1200,50,0)
      .tickFormat("")
    )



//})
