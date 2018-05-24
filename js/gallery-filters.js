console.log('sort-popular5');

// accordion sidebar 
$('.gallery__filter-card--header').on("click", function(e) {
	$(e.target).closest(".gallery__filter-card").find('.gallery__filter-card--body').slideToggle('400');
});

// init Isotope
var $grid = $('.gallery__img-grid').isotope ({
  itemSelector: '.gallery__img--card',
  layoutMode: 'fitRows',
  fitRows: {
  	gutter: 20
  },
  getSortData: {
  	popular: '[data-popular-sort]'
  },
  sortBy: 'popular',
  sortAscending: false
});


// sorting with select
var $select = $('#sort-by');

$select.change( function() {
	var sort = [];
	// get values of the select
	// Place values into filters array
	$select.filter(':selected').each( function() {
		sort.push(this.value);
		console.log(sort);
	});
	// Concatenate the values from the sort array into a single string
	var sortValue = sort.join();
	$('.gallery__img-grid').isotope({ sortBy: sortValue});
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
});

// Clear all 
$('#clear-filters').on('click', function() {
	$('.form-check input:checkbox:checked').removeAttr('checked');
	$('.gallery__img-grid').isotope({ filter: '*' });
});

