d3.select("p").style("color", "green");
d3.select("body").append("p").text("Third paragraph.");
// d3.select("body").append("p").text("Hey Tom");

var circle = d3.selectAll("circle");
circle.data([32, 57, 112]);
circle.attr("r", function (d) { return Math.sqrt(d); });


function plotBars(data, divId, width, height) {
    // https://datawanderings.com/2019/10/20/tutorial-advanced-bar-chart-in-d3-js-v-5/
    // Init SVG
    var margin = 5;
    var padding = 5;
    var adj = 20;
    var svg = d3.select(divId).append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-" + adj + " -" + adj + " " + (width + adj) + " " + (height + adj * 2))
        .style("padding", padding)
        .style("margin", margin)
        .classed("svg-content", true);
    // Scales
    var xScale = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.05);
    var yScale = d3.scaleLinear()
        .rangeRound([0, height]);
    xScale.domain(data.map(function (d) { return d.label }))
    yScale.domain([d3.max(data, function (d) { return d.val; }), 0]);
    // Axes
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));
    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));
    // Add data
    svg.selectAll("div")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return xScale(d.label);
        })
        .attr("y", function (d) {
            return yScale(d.val);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", function (d) {
            return height - yScale(d.val);
        });
}