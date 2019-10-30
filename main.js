var margin = {top: 60, right: 50, bottom: 50, left: 90};
var width = 1000 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var months = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]


var baseTemp = 0;


var colorScale = d3.scaleSequential(d3.interpolateInferno);


var xScale = d3.scaleBand()
    .range([0, width]);
var yScale = d3.scaleBand()
    .rangeRound([0, height]);


var div = d3.select('body').append('div')
    .attr('class', 'tooltip');

function showTip(d) {
  div.style('opacity', 0.9)
      .html('<h3><b>' + months[d.month] + ' ' + d.year + '</b></h3>' +
            '<p><b>Temp: ' + (baseTemp + d.variance).toFixed(3) + '℃</b></p>' +
            '<p><i>Variance: ' + d.variance + '℃</i></p>')
      .style('left', Math.min(d3.event.pageX - 75, 850) + 'px')
      .style('top', Math.max(d3.event.pageY - 100, margin.top) + 'px');
}
function hideTip() {
  div.style('opacity', 0);
}

var svg = d3.select('div.chart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform',
          'translate(' + margin.left +
          "," + margin.top + ')');

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json', function(error, result) {


  if (error) throw error;

  baseTemp = result.baseTemperature;
  var data = result.monthlyVariance;

  colorScale.domain([d3.min(data, d => baseTemp + d.variance),
                     d3.max(data, d => baseTemp + d.variance)]);
  xScale.domain(data.map(d => d.year));
  yScale.domain(data.map(d => d.month));
  var xValues = xScale.domain()
                .filter(d => !(d % 20));

  svg.append('text')
      .attr('class', 'title')
      .attr('transform', 'translate(' + (width / 2) + ', -20)')
      .text('Monthly Global Land-Surface Temperature');

  svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale)
            .tickValues(xValues)
            .tickSizeOuter(0));

  svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('transform', 'translate(' + (width / 2) + ', ' +
                           (height + margin.bottom - 10) + ')')
      .attr('font-weight', 'bold')
      .text('Year');

  svg.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale)
            .tickFormat(d => months[d]));

  svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -margin.left + 20)
      .attr('font-weight', 'bold')
      .text('Month');

  svg.selectAll('area')
    .data(data).enter().append('rect')
      .attr('width', Math.ceil(xScale.bandwidth()))
      .attr('x', d => xScale(d.year))
      .attr('height', Math.ceil(yScale.bandwidth()))
      .attr('y', d => yScale(d.month))
      .on('mouseover', showTip)
      .on('mouseout', hideTip)
      .style('fill', 'rgba(0,0,0,0)')
      .transition()
        .delay(d => xScale(d.year))
        .duration(1000)
        .style('fill', d => colorScale(baseTemp + d.variance))
      ;

});
