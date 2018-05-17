$(document).ready(function() {
	$('.gallery__filter-card--header').on("click", function(event) {
		$(event.target).closest(".gallery__filter-card").find('.gallery__filter-card--body').toggle('fast');
	});
});
