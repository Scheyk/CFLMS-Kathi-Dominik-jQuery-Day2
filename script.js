

$(document).ready(function() {
  $('img').on("click", function () {
      var alt = $(this).attr("alt") // Attribut alt wird in der Variable gepseichert
      $("#result").text(alt) // ergebnis wird im result div ausgeben
      
    
  });

//$("img[alt = 'Santa-Claus']").on("click", (function() {
	$("img:nth-child(2)").on("click", (function() {
        $(this).fadeOut(2000).fadeIn(1000).delay(1000).slideUp(1000) // .fadeOut(2000) .slideUp(2000) slideToggle(2000)
    }));


});