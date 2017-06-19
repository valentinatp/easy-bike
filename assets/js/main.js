function initmap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat: -91191427, lng: -77.0349046},
		mapTypeControl:false;
		zoomControl: false,
		streetViewControl: false
	});
}