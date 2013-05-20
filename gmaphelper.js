/**
 * GmapHelper
 *
 * A simpler helper class for making custom implementations with
 * Google Maps for ExpressionEngine easier.
 *
 * @license	https://objectivehtml.com/google-maps/license
 * @version 1.0.0
 * @build	2013-05-20
 * 
 * Example
 * -------------------------------------------------------------------
 * 
 * // 'map' is the same as your id parameter in the exp:gmap:init tag
 * var helper = new GmapHelper('map'); 
 *
 * helper.center();
 */
function GmapHelper(id) {
	var t = this;
	
	t.id        = id;
	t.dom       = $('#'+t.id+'_map');
	t.map       = window[id+'_map'];
	t.markers   = window[id+'_markers'];
	t.options   = window[id+'_options'];
	t.mapCenter = t.map.getCenter();
	
	t.draw = function() {
		google.maps.event.trigger(t.map, 'resize');	
	}
	
	t.center = function() {
		this.reset();
		
		if(t.markers.length > 0) {
			var bounds = new google.maps.LatLngBounds();
		
			for(var x in t.markers) {
				var marker = t.markers[x];
				bounds.extend(marker.getPosition());
			}
			
			t.map.fitBounds(bounds);
		}
	}
	
	t.reset = function() {				
		t.draw();
		t.map.setCenter(t.mapCenter);
		t.map.setZoom(t.options.zoom);
	}
	
	return t;
}