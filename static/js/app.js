// Get the Roadster endpoint
const roadster = "http://ergast.com/api/f1/2021/22/laps.json";

// Fetch the JSON data and console log it
d3.json(roadster).then(function(data) {
  console.log(data);
});

// Get the capsules endpoint
const capsules = "http://ergast.com/api/f1/2021/22/qualifying.json";

// Fetch the JSON data and console log it
d3.json(capsules).then(function(data) {
  console.log(data);
});


// // select divs
// var dropDown = d3.select("#selDataset");
// var demoInfo = d3.select("#sample-metadata");
// var barPlot = d3.select("#bar");
// var bubblePlot = d3.select("bubble");
// var gaugePlot = d3.select("gauge");

// // function initializes dropdown box and charts
// function init() {

//     // // reset data
//     // resetData();

//     // read samples.json
//     d3.json("data/samples.json").then((data => {

//         //  populate dropdown with IDs by looping each name in data.names
//         data.names.forEach((name => {
//             dropDown.append("option").text(name);
//         }));

//         // get the first ID from the list for initial charts as a default
//         var initId = dropDown.property("value")

//         // plot charts with initial ID
//         plotCharts(initId);

//     }));
// };

// // function resets divs
// function resetData() {

//     demoInfo.html("");
//     barPlot.html("");
//     bubblePlot.html("");
//     gaugePlot.html("");

// };

// // create a function to read JSON and plot charts
// function plotCharts(id) {

//     // read in the JSON data
//     d3.json("data/samples.json").then((data => {

//         // POPULATE DEMOGRAPHICS TABLE

//         // filter the metadata for the ID chosen
//         var individualMetadata = data.metadata.filter(participant => participant.id == id)[0];

//         // get the wash frequency for gauge chart later
//         var wfreq = individualMetadata.wfreq;

//         // Iterate through each key and value in the metadata
//         Object.entries(individualMetadata).forEach(([key, value]) => {

//             var newList = demoInfo.append("ul");
//             newList.attr("class", "list-group list-group-flush");

//             // append a li item to the unordered list tag
//             var listItem = newList.append("li");

//             // change the class attributes of the list item for styling
//             listItem.attr("class", "list-group-item p-1 demo-text bg-transparent");

//             // add the key value pair from the metadata to the demographics list
//             listItem.text(`${key}: ${value}`);

//         }); // close forEach

//         // RETRIEVE DATA FOR PLOTTING CHARTS

//         // filter the samples for the ID chosen
//         var individualSample = data.samples.filter(sample => sample.id == id)[0];

//         // create empty arrays to store sample data
//         var otuIds = [];
//         var otuLabels = [];
//         var sampleValues = [];

//         // Iterate through each key and value in the sample to retrieve data for plotting
//         Object.entries(individualSample).forEach(([key, value]) => {

//             switch (key) {
//                 case "otu_ids":
//                     otuIds.push(value);
//                     break;
//                 case "sample_values":
//                     sampleValues.push(value);
//                     break;
//                 case "otu_labels":
//                     otuLabels.push(value);
//                     break;
//                     // case
//                 default:
//                     break;
//             } // close switch statement

//         }); // close forEach

//         // slice and reverse the arrays to get the top 10 values, labels and IDs
//         var topOtuIds = otuIds[0].slice(0, 10).reverse();
//         var topOtuLabels = otuLabels[0].slice(0, 10).reverse();
//         var topSampleValues = sampleValues[0].slice(0, 10).reverse();

//         // use the map function to store the IDs with "OTU" for labelling y-axis
//         var topOtuIdsFormatted = topOtuIds.map(otuID => "OTU " + otuID);

//         // PLOT BAR CHART

//         // create a trace
//         var traceBar = {
//             x: topSampleValues,
//             y: topOtuIdsFormatted,
//             text: topOtuLabels,
//             type: 'bar',
//             orientation: 'h',
//             marker: {
//                 color: 'rgb(29,145,192)'
//             }
//         };

//         // create the data array for plotting
//         var dataBar = [traceBar];

//         // define the plot layout
//         var layoutBar = {
//             height: 500,
//             width: 600,
//             font: {
//                 family: 'Quicksand'
//             },
//             hoverlabel: {
//                 font: {
//                     family: 'Quicksand'
//                 }
//             },
//             title: {
//                 text: `<b>Top OTUs for Test Subject ${id}</b>`,
//                 font: {
//                     size: 18,
//                     color: 'rgb(34,94,168)'
//                 }
//             },
//             xaxis: {
//                 title: "<b>Sample values<b>",
//                 color: 'rgb(34,94,168)'
//             },
//             yaxis: {
//                 tickfont: { size: 14 }
//             }
//         }


//         // plot the bar chart to the "bar" div
//         Plotly.newPlot("bar", dataBar, layoutBar);

//         // PLOT BUBBLE CHART

//         // create trace
//         var traceBub = {
//             x: otuIds[0],
//             y: sampleValues[0],
//             text: otuLabels[0],
//             mode: 'markers',
//             marker: {
//                 size: sampleValues[0],
//                 color: otuIds[0],
//                 colorscale: 'YlGnBu'
//             }
//         };

//         // create the data array for the plot
//         var dataBub = [traceBub];

//         // define the plot layout
//         var layoutBub = {
//             font: {
//                 family: 'Quicksand'
//             },
//             hoverlabel: {
//                 font: {
//                     family: 'Quicksand'
//                 }
//             },
//             xaxis: {
//                 title: "<b>OTU Id</b>",
//                 color: 'rgb(34,94,168)'
//             },
//             yaxis: {
//                 title: "<b>Sample Values</b>",
//                 color: 'rgb(34,94,168)'
//             },
//             showlegend: false,
//         };

//         // plot the bubble chat to the appropriate div
//         Plotly.newPlot('bubble', dataBub, layoutBub);

//         // PLOT GAUGE CHART (OPTIONAL)

//         // if wfreq has a null value, make it zero for calculating pointer later
//         if (wfreq == null) {
//             wfreq = 0;
//         }

//         // create an indicator trace for the gauge chart
//         var traceGauge = {
//             domain: { x: [0, 1], y: [0, 1] },
//             value: wfreq,
//             type: "indicator",
//             mode: "gauge",
//             gauge: {
//                 axis: {
//                     range: [0, 9],
//                     tickmode: 'linear',
//                     tickfont: {
//                         size: 15
//                     }
//                 },
//                 bar: { color: 'rgba(8,29,88,0)' }, // making gauge bar transparent since a pointer is being used instead
//                 steps: [
//                     { range: [0, 1], color: 'rgb(255,255,217)' },
//                     { range: [1, 2], color: 'rgb(237,248,217)' },
//                     { range: [2, 3], color: 'rgb(199,233,180)' },
//                     { range: [3, 4], color: 'rgb(127,205,187)' },
//                     { range: [4, 5], color: 'rgb(65,182,196)' },
//                     { range: [5, 6], color: 'rgb(29,145,192)' },
//                     { range: [6, 7], color: 'rgb(34,94,168)' },
//                     { range: [7, 8], color: 'rgb(37,52,148)' },
//                     { range: [8, 9], color: 'rgb(8,29,88)' }
//                 ]
//             }
//         };

//         // determine angle for each wfreq segment on the chart
//         var angle = (wfreq / 9) * 180;

//         // calculate end points for triangle pointer path
//         var degrees = 180 - angle,
//             radius = .8;
//         var radians = degrees * Math.PI / 180;
//         var x = radius * Math.cos(radians);
//         var y = radius * Math.sin(radians);

//         // Path: to create needle shape (triangle). Initial coordinates of two of the triangle corners plus the third calculated end tip that points to the appropriate segment on the gauge 
//         // M aX aY L bX bY L cX cY Z
//         var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
//             cX = String(x),
//             cY = String(y),
//             pathEnd = ' Z';
//         var path = mainPath + cX + " " + cY + pathEnd;

//         gaugeColors = ['rgb(8,29,88)', 'rgb(37,52,148)', 'rgb(34,94,168)', 'rgb(29,145,192)', 'rgb(65,182,196)', 'rgb(127,205,187)', 'rgb(199,233,180)', 'rgb(237,248,217)', 'rgb(255,255,217)', 'white']

//         // create a trace to draw the circle where the needle is centered
//         var traceNeedleCenter = {
//             type: 'scatter',
//             showlegend: false,
//             x: [0],
//             y: [0],
//             marker: { size: 35, color: '850000' },
//             name: wfreq,
//             hoverinfo: 'name'
//         };

//         // create a data array from the two traces
//         var dataGauge = [traceGauge, traceNeedleCenter];

//         // define a layout for the chart
//         var layoutGauge = {

//             // draw the needle pointer shape using path defined above
//             shapes: [{
//                 type: 'path',
//                 path: path,
//                 fillcolor: '850000',
//                 line: {
//                     color: '850000'
//                 }
//             }],
//             font: {
//                 family: 'Quicksand'
//             },
//             hoverlabel: {
//                 font: {
//                     family: 'Quicksand',
//                     size: 16
//                 }
//             },
//             title: {
//                 text: `<b>Test Subject ${id}</b><br><b>Belly Button Washing Frequency</b><br><br>Scrubs per Week`,
//                 font: {
//                     size: 18,
//                     color: 'rgb(34,94,168)'
//                 },
//             },
//             height: 500,
//             width: 500,
//             xaxis: {
//                 zeroline: false,
//                 showticklabels: false,
//                 showgrid: false,
//                 range: [-1, 1],
//                 fixedrange: true // disable zoom
//             },
//             yaxis: {
//                 zeroline: false,
//                 showticklabels: false,
//                 showgrid: false,
//                 range: [-0.5, 1.5],
//                 fixedrange: true // disable zoom
//             }
//         };

//         // plot the gauge chart
//         Plotly.newPlot('gauge', dataGauge, layoutGauge);


//     })); // close .then function

// }; // close plotCharts() function

// // when there is a change in the dropdown select menu, this function is called with the ID as a parameter
// function optionChanged(id) {

//     // reset the data
//     resetData();

//     // plot the charts for this id
//     plotCharts(id);


// } // close optionChanged function

// // call the init() function for default data
// init();