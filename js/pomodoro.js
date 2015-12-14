$(document).ready(function(){
	/*var quotes = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8" , "q9", "q10"];

	$('#input').on('change', function(){
		// var val, span;
		// val = $('#input').val();
		// span = $('.box').children('span');
		// span.text(val);
		$("#contenido").text($('#input').val());
	});*/
	var valorSession = 25;
	var valorBreak = 5;
	$( "#session" ).html(valorSession);
	$( "#break" ).html(valorBreak);

    $( "#reduceSession" ).click(function( event ) {
    	if (valorSession > 0) {
    		valorSession--;
		    $( "#session" ).html(valorSession);
    	}
    });

    $( "#addSession" ).click(function( event ) {
		valorSession++;
		$( "#session" ).html(valorSession);
    });

    $( "#reduceBreak" ).click(function( event ) {
    	if (valorBreak > 0) {
    		valorBreak--;
			$( "#break" ).html(valorBreak);
    	}
    });

    $( "#addBreak" ).click(function( event ) {
		valorBreak++;
		$( "#break" ).html(valorBreak);
    });



   /* $( "#enviarTwitter" ).click(function( event ) {
       	$("#enviarT").children('a').html("<a href=\"https://twitter.com/share\" class=\"twitter-share-button"{count} data-text=\" " + quotes[indice] + "\" data-size="large" data-related="jhilmar_">Tweet</a>");
    });
*/
});