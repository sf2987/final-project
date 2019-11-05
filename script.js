// Our labels along the x-axis
var years = [2013,2014,2015,2016,2017,2018];
// For drawing the lines
var timesSq = [63617614,65948730,66359208,64531511,64815739,65060656];
var grandCentral = [44893301,46074652,46737564,46121509,44928488,45207849];
var heraldSquare = [38213448,39285568,39541865,39000352,39672507,39111312];
var unionSquare = [35309414,35677468,35320623,34289822,34557551,33124407];
var pennStationA = [25726374,26493571,26147434,25183869,24366500,24857456];
var pennStation1 = [27730331,28638643,28309160,27741367,26034238,25968950];
var columbusCircle = [22774421,23566961,23299666,23203443,22929203,22991014];
var lexAv = [20262110,20513370,20479923,19929405,18940774,18585755];
var fultonSt = [18721694,20102397,21671684,25162937,26838473,27719115];
var fiftyNinth = [21282767,21557198,21407792,21000635,17888188,16955204];



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
        data: pennStationA,
        label: "34 St-Penn Station (A, C, E)",
        borderColor: "#c45850",
        fill: false
      },
			{
        data: pennStation1,
        label: "34 St-Penn Station (1, 2, 3)",
        borderColor: "#6a5acd",
        fill: false
      },
			{
        data: columbusCircle,
        label: "59 St-Columbus Circle",
        borderColor: "#708090",
        fill: false
      },
			{
        data: lexAv,
        label: "Lexington Av-53 St",
        borderColor: "#008080",
        fill: false
      },
			{
				data: fultonSt,
				label: "Fulton St",
				borderColor: "#9acd32",
				fill: false
			},
			{
				data: fiftyNinth,
				label: "Lexington Av-59 St",
				borderColor: "#ee82ee",
				fill: false
			},
    ]
  }
});
