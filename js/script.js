// init Isotope
var Rsgrid = Rs('.collection-list').isotope({
  // options
});
// filter items on button click
Rs('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = Rs(this).attr('data-filter');
  resetFilterBtns();
  Rs(this).addClass('active-filter-btn');
  Rsgrid.isotope({ filter: filterValue });
});

var filterBtns = Rs('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    Rs(this).removeClass('active-filter-btn');
  });
}