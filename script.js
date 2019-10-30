// Our labels along the x-axis
var years = [2014,2015,2016,2017,2018];
// For drawing the lines
var timesSq = [86,114,106,106,107,111,133,221,783,2478];
var grandCentral = [282,350,411,502,635,809,947,1402,3700,5267];
var heraldSquare = [168,170,178,190,203,276,408,547,675,734];
var unionSquare = [40,20,10,16,24,38,74,167,508,784];
var pennStation = [6,3,2,2,7,26,82,172,312,433];

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
