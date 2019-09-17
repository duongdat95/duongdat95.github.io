$(document).ready(function() {
	$('.bacham').click(function() {
		$('ul').toggleClass('active');
	})
})

$(function(){
	khoimonan = $('.allanh').isotope({
	  itemSelector: '.motanh',
	  layoutMode: 'masonry'
	});

	khoimonan.imagesLoaded().progress( function() {
		khoimonan.isotope('layout');
	});

	$('.tieudect a').click(function() {
		dulieu = $(this).data('monan'); 
		khoimonan.isotope({ filter:  dulieu })
		 return false ; 
	});
})