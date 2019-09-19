$(document).ready(function() {
	$('.bacham').click(function() {
		$('ul').toggleClass('active');
	})
})
$(".gallery").magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled: true
	}
});