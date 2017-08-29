$(document).ready(function(){


		function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

		// randomIntFromInterval(50,700);

		function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };





		var static = function(){
			$("#staticImage").fadeIn(100);
			$("#staticImage").fadeIn(randomIntFromInterval(50,700)).fadeOut(randomIntFromInterval(50,700));
			$("#staticImage2").fadeIn(randomIntFromInterval(50,700)).fadeOut(randomIntFromInterval(50,700));
			$("#staticImage3").fadeIn(randomIntFromInterval(50,700)).fadeOut(randomIntFromInterval(50,700));
			$("#cover").fadeIn(200).fadeOut(100).fadeIn(40);
			$("h1").css("color", getRandomColor());
			
			$(".jumbotron").fadeIn(200).fadeOut(100).fadeIn(40);





			setTimeout(static, randomIntFromInterval(1200,19300));
		};


		setTimeout(static, randomIntFromInterval(1200,9300));

			// $( "#enterHome" )
 		// 	 .mouseover(function() {

 		// 	 	$("#cover").css({
			//    'filter'         : 'grayscale(50%)',
			//    '-webkit-filter' : 'grayscale(50%)',
			//    '-moz-filter'    : 'grayscale(50%)',
			//    '-o-filter'      : 'grayscale(50%)',
			//    '-ms-filter'     : 'grayscale(50%)'
			// });
 		// 	 });

			// $( "#enterHome" )
 		// 	 .mouseout(function() {

 		// 	 	$("#cover").css({
			//    'filter'         : 'blur(0px)',
			//    '-webkit-filter' : 'blur(0px)',
			//    '-moz-filter'    : 'blur(0px)',
			//    '-o-filter'      : 'blur(0px)',
			//    '-ms-filter'     : 'blur(0px)'
			// });
 		// 	 });


	

            $("#enterHome").click(function(e) {
            	e.preventDefault();
            	 $(this).hide();

            	var href = $('#enterHome').attr('href');

            	var color = '#abcdef';
				var rgbaCol = 'rgba(' + parseInt(color.slice(-6,-4),16)
				    + ',' + parseInt(color.slice(-4,-2),16)
				    + ',' + parseInt(color.slice(-2),16)
				    +',0)';
            	console.log(href);
            	$(".jumbotron").css({
				   'color' : 'magenta',
				   'background-color' : rgbaCol
				});

				$("button").css({
				   
				   'background-color' : rgbaCol
				});

 				$("h3").empty();
 				$("h2").empty();

				// $(".jumbotron").empty();

				$("#cover").css({
				   '-webkit-filter' : 'grayscale(100%)',
				   'filter'         : 'grayscale(100%)',
				   '-webkit-filter' : 'grayscale(100%)',
				   '-moz-filter'    : 'grayscale(100%)',
				   '-o-filter'      : 'grayscale(100%)',
				   '-ms-filter'     : 'grayscale(100%)'
				});

            	$("body").css("background-color","black");
$('body').css('background-image', 'url("https://media.giphy.com/media/V6l6pzPrJdfPy/giphy.gif")');
            	

				$( "body" ).fadeOut( 1300, 0, function(){
					window.location = href;
				
    });
				
				});


   $('body').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(200, 100, 200, 0.298039), '+rYP/8+'px '+rXP/60+'px rgba(255,0,51,.3), '+rXP/70+'px '+rYP/12+'px rgba(222,0,164,.3)');
   });




});

  
  




