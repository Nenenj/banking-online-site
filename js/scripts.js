
/*jslint browser: true*/
/*global $. jQuery*/
$(document).ready(function() {

    // Activate Carousel
    $('#mycarousel').carousel();

    //Enable Carousel
    $('#carouselButton').onclick(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }  
});

var modal=
document.getElementById('idol');

window.onclick= function(event)
{
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
    var username=document.forms["myForm"] ["username"].value;
    var password=document.forms["myForm"] ["password"].value;
    

    if (username == "Alice" && password == "Maxwell")
    {
        window.location.href="access.html";
    }
    else
    {
        alert("invalid Username and Password");
    }
}

  

$("#myModal").onclick(function() {
    $("#myModal").modal('toggle');
});  

});
   



function myFunction(){
	var un=document.forms["myForm"]
	["uname"].value;
	var pw=document.forms["myForm"]
	["pass"].value;

	if (un=="Alice" && pw== "903158881") {
		window.location.href="access.html";
	}
	else {
		alert("invalid username and password");
	}


}

