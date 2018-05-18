$(document).ready(function() {
	// accordion sidebar 
	$('.gallery__filter-card--header').on("click", function(e) {
		$(e.target).closest(".gallery__filter-card").find('.gallery__filter-card--body').slideToggle('400');
	});

	// filters
	$('.form-check > input').click(function() {
		var value = $(this).attr('data-filter');
		$('.gallery__img--card').not('.'+value).hide('3000');
		$('.gallery__img--card').filter('.'+value).show('3000');
	});

});
