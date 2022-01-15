Plotly.d3.json(/data/laps, function(figure){} );

let xl = []
let yl = []
Plotly.d3.json(url, function(figure){
let data = figure.data
for (var i=0; i< data.length; i++){
xl.push(data[i][4])
yl.push(data[i][5]) }
let trace = {
x: xl,
y: yl }})

Plotly.plot(document.getElementById(‘graph’), [trace]); })

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// //Read the data
// d3.json("/data/laps", function(data) {

//   // group the data: I want to draw one line per group
//   var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
//     .key(function(d) { return d.Driver;})
//     .entries(data);

//   // Add X axis
//   var x = d3.scaleLinear()
//     .domain(d3.extent(data, function(d) { return d.RaceLapNumber; }))
//     .range([ 0, width ]);
//   svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x).ticks(1));

//   // Add Y axis
//   var y = d3.scaleLinear()
//     .domain([0, d3.max(data, function(d) { return +d.LapTime; })])
//     .range([ height, 0 ]);
//   svg.append("g")
//     .call(d3.axisLeft(y));

//   // color palette
//   var res = sumstat.map(function(d){ return d.Driver }) // list of group names
//   var color = d3.scaleOrdinal()
//     .domain(res)
//     .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999','#999999','#999999','#999999','#999999','#999999','#999999','#999999','#999999','#999999','#999999','#999999'])

//   // Draw the line
//   svg.selectAll(".line")
//       .data(sumstat)
//       .enter()
//       .append("path")
//         .attr("fill", "none")
//         .attr("stroke", function(d){ return color(d.Driver) })
//         .attr("stroke-width", 1.5)
//         .attr("d", function(d){
//           return d3.line()
//             .x(function(d) { return x(d.RaceLapNumber); })
//             .y(function(d) { return y(+d.LapTime); })
//             (d.values)
//         })

// })