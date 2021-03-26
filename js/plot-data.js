// var data = [30, 86, 168, 281, 303, 365];
// d3.select(".chart")
//     .selectAll("div")
//     .data(data)
//     .enter()
//     .append("div")
//     .style("width", function (d) { return d + "px"; })
//     .text(function (d) { return d; });

// d3.create("span")
//     .style("color", "white")
//     .style("background-color", "black")
//     .html("Hello, world!")
//     .node();
d3.select("p").style("color", "green");
d3.select("body").append("p").text("Third paragraph.");
