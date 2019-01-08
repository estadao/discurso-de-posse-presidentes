function draw(filepath_matrix, div, presidente, ano) {

  var margin = { top: 80, left: 50, right: 50, bottom: 80 },
    height = 500 - margin.top - margin.bottom,
    width = 1000 - margin.left - margin.right;

// Adiciona uma div com o id passado como argumento
  var container = d3.select("#container")
    .append('div')
    .attr('id', div)

// Seleciona a div e adiciona um svg
  var svg = d3.select("#" + div)
    .append("svg")
    .attr("height", height + margin.top + margin.bottom)
    .attr("width", width + margin.left + margin.right)
    .attr("class", "temp")
    .attr("id", div)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Escalas
  var xPositionScale = d3.scaleLog()
    .rangeRound( [ 0, width ] )

  var radiusScale = d3.scaleSqrt()
    // .domain vai ser definido depois
    .range( [ 3, 13 ] )

  var colorScaleHot = d3.scaleLog()
    // .domain vai ser definido depois
    .range(["#cccccc", "#ffa34a"])

  var colorScaleCold = d3.scaleLog()
    // .domain vai ser definido depois
    .range(["#65d5e1", "#cccccc"])

  // Tooltip
  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<span>" + d.PALAVRA + "</span>";
    })

  svg.call(tip)

  // Lê os dados
  d3.queue()
    .defer(d3.csv, filepath_matrix)
    .await(ready)


  function ready(error, datapoints) {

    // Define domínios
    colorMin = d3.min(datapoints.map(function(d){
      return +d.VEZES_MAIS_PROVAVEL_ESTE
    }))

    colorMedian = d3.median(datapoints.map(function(d){
      return +d.VEZES_MAIS_PROVAVEL_ESTE
    }))

    colorMax = d3.max(datapoints.map(function(d){
      return +d.VEZES_MAIS_PROVAVEL_ESTE
    }))

    xDomain = [ 0.01, 900.90323 ] // Valor máximo definido manualmente com base nos dados
    // xDomain = [colorMin, colorMax ] // Escala relativa
    
    radiusMin = d3.min(datapoints.map(function(d){
      return +d.RATIO_PALAVRA_ESTE
    }))

    radiusMax = d3.max(datapoints.map(function(d){
      return +d.RATIO_PALAVRA_ESTE
    }))


    colorScaleHot.domain( [ colorMedian, colorMax ] )
    colorScaleCold.domain( [ colorMin, colorMedian ] )

    xPositionScale.domain( xDomain )
    radiusScale.domain( [ radiusMin, radiusMax ] )

    // Define e roda uma simulação para posicionar os elementos
    var simulation = d3.forceSimulation(datapoints)
        .force("x", d3.forceX(function(d) { 
          return xPositionScale( +d.VEZES_MAIS_PROVAVEL_ESTE )
        })
        .strength( 6 ) )
        .force("y", d3.forceY( height / 2 ) )
        .force("collide", d3.forceCollide(function(d){
          return radiusScale(+d.RATIO_PALAVRA_ESTE + 1)
        }))
        .stop()

    for ( var i = 0; i < 1000; i++ ) {
      simulation.tick()
    }

    // Adiciona círculos
    svg.selectAll(".circle-word")
      .data(datapoints)
      .enter().append("circle")
      .attr("cy", function(d) { return (d.y).toFixed( 2 ) })
      .attr("cx", function(d) { return (d.x).toFixed( 2 ) })
      // .attr("class", "dot")
      .attr("fill", function(d) {
        value = d.VEZES_MAIS_PROVAVEL_ESTE
        if (value > colorMedian) {
          return d3.color( colorScaleHot( +d.VEZES_MAIS_PROVAVEL_ESTE ) ).hex()
        }
        else {
          return d3.color( colorScaleCold(+ d.VEZES_MAIS_PROVAVEL_ESTE ) ).hex()
        }
      })
      // .attr("id", function(d){ return d.PALAVRA })
      .attr("r", function(d){ 
        return radiusScale( +d.RATIO_PALAVRA_ESTE ).toFixed(2)
      })
      .attr("data-word", function(d){
        return d.PALAVRA
      })
      .on("mouseover", function(d){
        var element = d3.select(this)
        element.attr("stroke", "#333")
        element.attr("stroke-opacity", 1)
        tip.show(d)
        element.raise()
      })
      .on("mouseout", function(d){
        var element = d3.select(this)
        element.attr("stroke", "#fff")
        element.attr("stroke-opacity", 0.0001)
        tip.hide(d)
        element.lower()
      })

    Adiciona labels para cada um dos pontos
    svg.selectAll(".label-word")
      .data(datapoints)
      .enter().append("text")
      .attr("y", function(d) { return d.y })
      .attr("x", function(d) { return d.x })
      .text(function(d){ return d.PALAVRA})
      .attr("id", function(d) {
        return "word-" + d.PALAVRA
      })
      .attr("word", function(d){
        return d.word
      })
      .attr("class", "label")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .attr("visibility", "hidden")
      .attr("dy", function(d){
        var radius = radiusScale(d.RATIO_PALAVRA_ESTE)
        return -radius - 7
      })


    // Adiciona título
    svg.append("text")
    .text(presidente + " (" + ano + ") ")
    .attr("x", width/2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", 32)

   // Adiciona legendas de posição
   svg.append("text")
    .text("⟶ palavra mais característica")
    .attr("y", height)
    .attr("dy", -10)
    .attr("x", xPositionScale( 333 ) )
    .attr("dx", -150)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")

    svg.append("text")
      .text("⟵ palavra menos característica")
      .attr("x", 0)
      .attr("dx", 150)
      .attr("y", height )
      .attr("dy", -19)
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")

    // Adiciona legenda de tamanho do círculo
    svg.append("circle")
      .attr("cx", margin.left)
      .attr("cy", 25)
      .attr("r", radiusScale(radiusMin))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("class", "circle-legend")
      .attr("id", 'small-circle-legend')


    svg.append("circle")
      .attr("cy", 25)
      .attr("r", radiusScale(radiusMax))
      .attr("cx", function(d){
        var element = d3.select(this)
        return margin.left + parseInt(element.attr("r")) + 50
      })
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("class", "circle-legend")
      .attr("id", 'big-circle-legend')

    svg.append("text")
      .text("- comum")
      .attr("y", 60)
      .attr("x", function(d){
        return d3.select("#small-circle-legend").attr("cx")
      })
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .attr("font-size", 12)

    svg.append("text")
      .text("+ comum")
      .attr("y", 60)
      .attr("x", function(d){
        return d3.select("#big-circle-legend").attr("cx")
      })
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .attr("font-size", 12)

  }

}

