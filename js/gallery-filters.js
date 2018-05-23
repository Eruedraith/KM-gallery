// accordion sidebar 
	$('.gallery__filter-card--header').on("click", function(e) {
		$(e.target).closest(".gallery__filter-card").find('.gallery__filter-card--body').slideToggle('400');
	});

// JOSH M. STUFF
// var $grid = $('.gallery__img-grid').isotope({
//   itemSelector: '.gallery__img--card',
//   layoutMode: 'fitRows'
// });
// console.log("Grid",$grid);

// (function(){
// 	console.log("Grid",$grid);
// })();

console.log('test10');
// JOSH T. STUFF 
// init Isotope
var $grid = $('.gallery__img-grid').isotope ({
  itemSelector: '.gallery__img--card',
  layoutMode: 'fitRows'
});

// filter items on checkbox
var $checkboxes = $('.form-check input');

$checkboxes.change( function() {
	var filters = [];
	// get values of the checked checkboxes
	// Place values into filters array
	$checkboxes.filter(':checked').each( function() {
		filters.push(this.value);
	});
	// Concatenate the values from the filters array into a single string
	var filterValue = filters.join();
	$('.gallery__img-grid').isotope({ filter: filterValue });
	console.log(filterValue);
	console.log(filters);
});

// Clear all 
$('#clear-all').on('click', function() {
	$('.form-check input:checkbox:checked').removeAttr('checked');
	$('.gallery__img-grid').isotope({ filter: '*' });
});
