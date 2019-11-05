// Our labels along the x-axis
var years = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
// For drawing the lines
var timesSq = [60880668,58099313,58422597,60604822,62069437,63617614,65948730,66359208,64531511,64815739,65060656];
var grandCentral = [44600738,42002971,41903210,42795505,42984249,44893301,46074652,46737564,46121509,44928488,45207849];
var heraldSquare = [39040943,36945680,37769752,37731386,37154138,38213448,39285568,39541865,39000352,39672507,39111312];
var unionSquare = [35545653,34245245,34730692,34927178,34639575,35309414,35677468,35320623,34289822,34557551,33124407];
var pennStationA = [26013432,24182097,24265016,24751771,24851746,25726374,26493571,26147434,25183869,24366500,24857456];
var pennStation1 = [28343889,27196195,26892243,26758623,27010176,27730331,28638643,28309160,27741367,26034238,25968950];
var columbusCircle = [20475053,20418815,20711058,21300892,21599586,22774421,23566961,23299666,23203443,22929203,22991014];
var lexAv = [20858197,19380036,19290036,20000382,19280036,20262110,20513370,20479923,19929405,18940774,18585755];
var fultonSt = [19813040,18845513,18945513,18645513,18711000,18721694,20102397,21671684,25162937,26838473,27719115];
var fiftyNinth = [20053574,18924005,19553597,20377141,20628942,21282767,21557198,21407792,21000635,17888188,16955204];




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
