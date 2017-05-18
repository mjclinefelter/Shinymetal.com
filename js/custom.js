// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// --------------------------------------------------------
$(document).ready(function() {
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
});

// --------------------------------------------------------
//	Navigation Bar
// --------------------------------------------------------
$(window).scroll(function(){
	"use strict";
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){
		$(".navbar").addClass("scroll-fixed-navbar");
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// --------------------------------------------------------
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 100
    }, 1000);
});


/* form id="contactForm"


window.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("contactForm");
    document.getElementById("formSubmit").addEventListener("click", function () {
      form.submit();
      });

  });
*/

// scroll effects
window.sr = ScrollReveal();
sr.reveal('#header-text');
sr.reveal('.headline');
sr.reveal('.features');
sr.reveal('.portfolio-scroll');
