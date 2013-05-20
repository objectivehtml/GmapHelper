GmapHelper
============

### Version 1.0.0 - 2013-05-20

#### By Justin Kimbrell / Objective HTML

Overview
--------

A simple helper class for making custom implementations with Google Maps for ExpressionEngine easier.

License
-------

https://objectivehtml.com/google-maps/license


Basic Usage
-----------

http://objectivehtml.dev/google-maps/examples/jquery

    // 'map' is the same as your id parameter in the exp:gmap:init tag
    var helper = new GmapHelper('map'); 
 
    helper.center();

Usage with jQuery Tabs
----------------------

	$(function() {			
		var helper = new GmapHelper('map');
	
		 $( "#tabs" ).tabs({
		 	// older versions of jQuery UI will use the show() method instead of activate()
			activate: function() { 
			   helper.center();
			}
		});
	});
	
	
Usage with Twitter Bootstrap
----------------------

	$(function() {				
		var helper = new GmapHelper('map');
	
		$('a[data-toggle="tab"]').on('shown', function (e) {
			helper.center();
		});
	});