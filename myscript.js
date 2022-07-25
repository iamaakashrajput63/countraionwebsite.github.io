


var a = 0;

var path = new Array();

path[0] = "images/pconstarion.jpg";
path[1] = "images/pconstration1.jpg";
path[2] = "images/pconstrtion4.jpg";
path[3] = "images/pcontration3.jpg";
path[4] = "images/pcontration5.jpg";


function swapimage(){
	document.getElementById("slider").src = path[a];
	if(a < path.length -1) a++;
	else a = 0;
	setTimeout("swapimage()", 3000);
}


$(document).ready(function(){
	$(".plus-icon").click(function(){
		$(".duris").slideToggle(1000);
	});
});



$(document).ready(function(){
	$(".plus-icon1").click(function(){
		$(".duris1").slideToggle(1000);
	});
});



$(document).ready(function(){
	$(".plus-icon2").click(function(){
		$(".duris2").slideToggle(1000);
	});
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




$(document).ready(function(){
	$(".fro-icon").click(function(){
		$(".fro-icon i").toggleClass("fas fa-times");
		$("nav ul").toggleClass("active");
	});
});
