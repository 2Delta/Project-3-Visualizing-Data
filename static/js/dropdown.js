let selector = d3.select("#selDriver1");
let selector2 = d3.select("#selDriver2");


d3.json("/data/laps").then(function(data){ 
    
        console.log(data[60].Driver)
        console.log(data)

        let uniqueNames = new Set(data.map(item => item.Driver));

        console.log(uniqueNames)

        for (const key of uniqueNames.keys()) {
            selector
                .append("option")
                .text(key)
                .property("value", key);
            selector2
                .append("option")
                .text(key)
                .property("value", key);
        }
    }
        
);

function optionChanged(value){console.log(value)}