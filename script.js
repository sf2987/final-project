// Our labels along the x-axis
var years = [2013,2014,2015,2016,2017,2018];
// For drawing the lines
var timesSq = [63617614,65948730,66359208,64531511,64815739,65060656];
var grandCentral = [44893301,46074652,46737564,46121509,44928488,45207849];
var heraldSquare = [38213448,39285568,39541865,39000352,39672507,39111312];
var unionSquare = [35309414,35677468,35320623,34289822,34557551,33124407];
var pennStation = [25726374,26493571,26147434,25183869,24366500,24857456];

var n = 63617614
n.toLocaleString()
"63,617,614";

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: timesSq,
        label: "Times Sq-42 St",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: grandCentral,
        label: "Grand Central-42 St",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: heraldSquare,
        label: "34 St-Herald Square",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: unionSquare,
        label: "14 St-Union Square",
        borderColor: "#e8c3b9",
        fill: false
      },
      {
        data: pennStation,
        label: "34 St-Penn Station",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});
