// d3.select("body").append("p").text("Hey Tom");

var circle = d3.selectAll("circle");
circle.data([32, 57, 112]);
circle.attr("r", function (d) { return Math.sqrt(d); });