console.log('api4');

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
  	popular: '[data-popular-sort]',
  	arrival: '[data-arrival-sort]'
  },
  sortBy: 'popular',
  sortAscending: true,
  // search
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});


//sorting popular & newest
var $select = $('#sort-by');
$select.change( function() {
	var selectValue = $('#sort-by option:selected').val();
	$('.gallery__img-grid').isotope({ sortBy: selectValue});
});

// filter by solution (select form)
$('#solution-filter').change( function() {
	var selectSolutionValue = $('#solution-filter option:selected').val();
	console.log(selectSolutionValue);
	$('.gallery__img-grid').isotope({ filter: selectSolutionValue});
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

// search bar
var qsRegex;
// use value of search field to filter
var $quicksearch = $('#gallery-filter-search').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}


// try swipebox instead!

// Lightbox - Chocolat -- REMOVE ME
$('.gallery__img--card').Chocolat();


// fetch kitchen ID --> call api --> build gallery
var $kitchenNumber = $('.kitchen-number');

$.ajax({
  type: 'GET',
  url: 'https://api.hubapi.com/hubdb/api/v2/tables/697229/rows?portalId=126868',
  success: function(kitchenData) {
    $.each(kitchenData, function(i, kitchenNumber) {
      $kitchenNumber.append('Kitchen Number: "kitchenNumber.kitchen_number"');
    console.log('successful api call!');
    });
  }
});

