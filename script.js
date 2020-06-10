

$(document).ready(function() {
  $('img').on("click", function () {
      var alt = $(this).attr("alt") // Attribut alt wird in der Variable gepseichert
      $("#result").text(alt) // ergebnis wird im result div ausgeben
      
    
  });

//$("img[alt = 'Santa-Claus']").on("click", (function() {
	$("img:nth-child(2)").on("click", (function() {
        $(this).hide()
    }));


});