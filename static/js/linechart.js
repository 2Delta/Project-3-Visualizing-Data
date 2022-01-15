
let xl = []
let yl = []
Plotly.d3.json("/data/laps").then(function(data){
  console.log(data)
  for (const item in data) {
    if (item.Driver == function optionChanged){
      xl.push(item.RaceLapNumber)
      yl.push(item.LapTime)
    }
  }
  console.log(xl)
  console.log(yl)
  let trace = {
  x: xl,
  y: yl 
  }
})

Plotly.plot(document.getElementById("chart"), [trace]);