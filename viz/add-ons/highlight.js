////// GERAL //////

function cleanHighlights() {

  // Retorna tudo para a opacidade normal, escondendo os destaques
  d3.selectAll(".dot")
    .attr("opacity", .3)
    .attr("stroke", "white")


  d3.selectAll(".label")
    .attr("visibility", "hidden")
}

function beginHighlight(){
  // Seta a opacidade para .3
  var otherDots = d3.selectAll(".dot")
    .attr("opacity", .3)
    .attr("stroke", "white")
}

function clean(word){
  // Seleciona label e círculo da palavra e retorna para normal
  d3.select("#" + word)
    .attr("opacity", .3)
    .attr("stroke", "white")

  d3.select("#word-" + word)
    .attr("visibility", "hidden")
}

function highlight(word) {

  // Acende os círculos e ativa as labels
  var string =  '#' + word

  // var otherDots = d3.selectAll(".dot")
  //   .attr("opacity", .3)
  //   .attr("stroke", "white")

  var dots = d3.selectAll(string)
    .attr("opacity", 1)
    .attr("stroke", "#333")
    .attr("stroke-width", 3)
    .attr("stroke-opacity", 1)
  
  string = '#word-' + word

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")


}
////// TEMAS //////

function highlightSeguranca() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string =  `#polícia,
  #policial,
  #segurança,
  #insegurança,
  #terrorismo,
  #terrorista,
  #drogas,
  #tráfico,
  #traficante,
  #bandido,
  #bandidos,
  #criminoso,
  #criminosos,
  #crime,
  #intervenção,
  #militar, 
  #exército`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-polícia,
  #word-policial,
  #word-segurança,
  #word-insegurança,
  #word-terrorismo,
  #word-terrorista,
  #word-drogas,
  #word-tráfico,
  #word-traficante,
  #word-bandido,
  #word-bandidos,
  #word-criminoso,
  #word-criminosos,
  #word-crime,
  #word-intervenção,
  #word-militar, 
  #word-exército`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible");

}

function highlightMinorias() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string =  `#mulher,
  #mulheres,
  #feminismo,
  #machismo,
  #gênero,
  #gays,
  #lgbt,
  #lgbts,
  #homossexuais,
  #negros,
  #negras,
  #trans,
  #transgênero`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-mulher,
  #word-mulheres,
  #word-feminismo,
  #word-machismo,
  #word-gênero,
  #word-gays,
  #word-lgbt,
  #word-lgbts,
  #word-homossexuais,
  #word-negros,
  #word-negras,
  #word-trans,
  #word-transgênero`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible");



}

function highlightEconomia() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#mercado,
  #investimento,
  #capital,
  #importar,
  #exportar,
  #crescimento,
  #inflação,
  #juros,
  #dívida,
  #importação,
  #exportação,
  #privatizar,
  #privatização`

  var dots = d3.selectAll(string)
    .attr("opacity", 1);

  string = `#word-mercado,
  #word-investimento,
  #word-capital,
  #word-importar,
  #word-exportar,
  #word-crescimento,
  #word-inflação,
  #word-juros,
  #word-dívida,
  #word-importação,
  #word-exportação,
  #word-privatizar,
  #word-privatização`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible");



}

function higlightPolitica(){
  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#corrupto,
  #corrupção,
  #foro,
  #stf,
  #senado,
  #câmara,
  #deputados,
  #brasília,
  #ministro,
  #ministros,
  #justiça,
  #judiciário,
  #escândalo`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-corrupto,
  #word-corrupção,
  #word-foro,
  #word-stf,
  #word-senado,
  #word-câmara,
  #word-deputados,
  #word-brasília,
  #word-ministro,
  #word-ministros,
  #word-justiça,
  #word-judiciário,
  #word-escândalo`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible");



}

function highlightSocial() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#fome,
  #miséria,
  #pobre,
  #pobreza,
  #desigualdade,
  #renda,
  #social,
  #riqueza,
  #redistribuição,
  #direitos`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-fome,
  #word-miséria,
  #word-pobre,
  #word-pobreza,
  #word-desigualdade,
  #word-renda,
  #word-social,
  #word-riqueza,
  #word-redistribuição,
  #word-direitos`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible");



}

function highlightEducacao(){

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#analfabetismo,
  #educação,
  #ler,
  #escrever,
  #estudar,
  #estudante,
  #universidade,
  #fies,
  #prouni,
  #enem,
  #cotas,
  #aprendizado,
  #professor,
  #professores,
  #professora,
  #professoras,
  #aluno,
  #alunas,
  #alfabetização`
  

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-analfabetismo,
  #word-educação,
  #word-ler,
  #word-escrever,
  #word-estudar,
  #word-estudante,
  #word-universidade,
  #word-fies,
  #word-prouni,
  #word-enem,
  #word-cotas,
  #word-aprendizado,
  #word-professor,
  #word-professores,
  #word-professora,
  #word-professoras,
  #word-aluno,
  #word-alunas,
  #word-alfabetização`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible");



}

////// CANDIDATOS //////

function highlightBolsonaro() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string =  `#fakenews,
  #canalhas,
  #terrorista,
  #vagabundos,
  #terrorismo,
  #terrorista,
  #eletrônicas,
  #urnas,
  #smartmatic,
  #esquerda,
  #universidade,
  #pobres,
  #previdência,
  #reforma`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-fakenews,
  #word-canalhas,
  #word-terrorista,
  #word-vagabundos,
  #word-terrorismo,
  #word-terrorista,
  #word-eletrônicas,
  #word-urnas,
  #word-smartmatic,
  #word-esquerda,
  #word-universidade,
  #word-pobres,
  #word-previdência,
  #word-reforma`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightAlvaro() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string =  `#balcão,
  #antagonista,
  #plenário,
  #foro,
  #privilegiado,
  #escândalos,
  #corruptos,
  #famílias,
  #golpe,
  #jovens,
  #escola,
  #mercado,
  #bolsonaro`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-balcão,
  #word-antagonista,
  #word-plenário,
  #word-foro,
  #word-privilegiado,
  #word-escândalos,
  #word-corruptos,
  #word-famílias,
  #word-golpe,
  #word-jovens,
  #word-escola,
  #word-mercado,
  #word-bolsonaro`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightAlckmin() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string =  `#entregamos,
  #metrô,
  #liberamos,
  #rodovias,
  #infraestrutura,
  #concessão,
  #convênios,
  #temer,
  #lula,
  #dilma,
  #michel,
  #temer,
  #eleições`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-entregamos,
  #word-metrô,
  #word-liberamos,
  #word-rodovias,
  #word-infraestrutura,
  #word-concessão,
  #word-convênios,
  #word-temer,
  #word-lula,
  #word-dilma,
  #word-michel,
  #word-temer,
  #word-eleições`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightAmoedo() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string =  `#fgts,
  #indivíduo,
  #pagamos,
  #tributos,
  #financiados,
  #criptomoedas,
  #mulheres,
  #esquerda,
  #investimentos,
  #social,
  #luta`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-fgts,
  #word-indivíduo,
  #word-pagamos,
  #word-tributos,
  #word-financiados,
  #word-criptomoedas,
  #word-mulheres,
  #word-esquerda,
  #word-investimentos,
  #word-social,
  #word-luta`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightTemer() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#assinatura,
  #leilões,
  #cerimônia,
  #interventor,
  #avançamos,
  #curricular,
  #impostos,
  #imprensa,
  #trabalhador,
  #reforma,
  #trabalhista,
  #previdência`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  string = `#word-assinatura,
  #word-leilões,
  #word-cerimônia,
  #word-interventor,
  #word-avançamos,
  #word-curricular,
  #word-impostos,
  #word-imprensa,
  #word-trabalhador,
  #word-reforma,
  #word-trabalhista,
  #word-previdência`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightMaia() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#estado,
  #país,
  #brasil,
  #reforma,
  #resolução,
  #observatório,
  #urgência,
  #convenção,
  #legislativo`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  var string = `#word-estado,
  #word-país,
  #word-brasil,
  #word-reforma,
  #word-resolução,
  #word-observatório,
  #word-urgência,
  #word-convenção,
  #word-legislativo`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightCollor() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#alagoas,
  #exteriores,
  #relações,
  #esperança,
  #trabalho,
  #brasil,
  #governo,
  #estado,
  #povo`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  var string = `#word-alagoas,
  #word-exteriores,
  #word-relações,
  #word-esperança,
  #word-trabalho,
  #word-brasil,
  #word-governo,
  #word-estado,
  #word-povo`


  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightMarina() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#apagão,
  #polarização,
  #rouba,
  #floresta,
  #carbono,
  #salvadores,
  #índios,
  #sustentável,
  #reforma,
  #presidência,
  #previdência,
  #candidato,
  #lula`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  var string = `#word-apagão,
  #word-polarização,
  #word-rouba,
  #word-floresta,
  #word-carbono,
  #word-salvadores,
  #word-índios,
  #word-sustentável,
  #word-reforma,
  #word-presidência,
  #word-previdência,
  #word-candidato,
  #word-lula`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightCiro() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#discutirmos,
  #participarei,
  #publico,
  #debatemos,
  #convergência,
  #tática,
  #debate,
  #política,
  #partido,
  #crise,
  #país,
  #governo,
  #foro`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  var string = `#word-discutirmos,
  #word-participarei,
  #word-publico,
  #word-debatemos,
  #word-convergência,
  #word-tática,
  #word-debate,
  #word-política,
  #word-partido,
  #word-crise,
  #word-país,
  #word-governo,
  #word-foro`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightManuela() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#obrigada,
  #amiga,
  #mulher,
  #mulheres,
  #machismo,
  #machistas,
  #feminismo,
  #meninas,
  #querida,
  #miga,
  #galera,
  #face,
  #corrupção,
  #políticos,
  #globo,
  #gestão,
  #dinheiro`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  var string = `#word-obrigada,
  #word-amiga,
  #word-mulher,
  #word-mulheres,
  #word-machismo,
  #word-machistas,
  #word-feminismo,
  #word-meninas,
  #word-querida,
  #word-miga,
  #word-galera,
  #word-face,
  #word-corrupção,
  #word-políticos,
  #word-globo,
  #word-gestão,
  #word-dinheiro`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightLula() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#stuckert,
  #ricardo,
  #caravana,
  #inocência,
  #prouni,
  #pobre,
  #flamengo,
  #fluminense,
  #elite,
  #tranquilo,
  #fies,
  #impostos,
  #liberdade,
  #segurança,
  #privilégios`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  var string = `#word-stuckert,
  #word-ricardo,
  #word-caravana,
  #word-inocência,
  #word-prouni,
  #word-pobre,
  #word-flamengo,
  #word-fluminense,
  #word-elite,
  #word-tranquilo,
  #word-fies,
  #word-impostos,
  #word-liberdade,
  #word-segurança,
  #word-privilégios`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}

function highlightBoulos() {

  // Primeiro, limpa tudo que foi ativado na chamada anterior da função
  d3.selectAll(".dot")
    .attr("opacity", .3)

  d3.selectAll(".label")
    .attr("visibility", "hidden")

  // Depois, acende os círculos e ativa as labels

  var string = `#mtst,
  #guerreiros,
  #guerreiras,
  #despejo,
  #ocupação,
  #marielle,
  #terrenos,
  #educação,
  #segurança,
  #emprego,
  #governo,
  #investimento`

  var dots = d3.selectAll(string)
    .attr("opacity", 1)

  var string = `#word-mtst,
  #word-guerreiros,
  #word-guerreiras,
  #word-despejo,
  #word-ocupação,
  #word-marielle,
  #word-terrenos,
  #word-educação,
  #word-segurança,
  #word-emprego,
  #word-governo,
  #word-investimento`

  var labels = d3.selectAll(string)
    .attr("visibility", "visible")

}


const name_array = [
"seguranca",
"minorias",
"economia",
"politica",
"social",
"educacao"
];

const highlight_array = [
highlightSeguranca(),
highlightMinorias(),
highlightEconomia(),
higlightPolitica(),
highlightSocial(),
highlightEducacao(),
];