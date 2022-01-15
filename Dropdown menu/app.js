let selector = d3.select("#selDataset");
let selector2 = d3.select("#selDataset2");


d3.json("laps.json").then(function(data){ 
    
        console.log(data.Driver)
        console.log(data)
        var driverArray = []
        for (const aDriver in data.Driver) {
            driverArray.push(data.Driver[aDriver])
        }
        const uniqueNames = [...new Set(driverArray)]
        console.log(uniqueNames)


        for (const key in uniqueNames) {
            selector
                .append("option")
                .text(uniqueNames[key])
                .property("value", uniqueNames[key]);
            selector2
                .append("option")
                .text(uniqueNames[key])
                .property("value", uniqueNames[key]);
        }
    }
        
);