var SolarSystem = (function(oldSolarSystem) {
	var stars = ["Sun", "Alpha Centauri", "Wolf 359"];

	oldSolarSystem.getStars = function(){
		return stars
	};
	oldSolarSystem.setStars = function(){
		stars.push(newStar);
	};

	return oldSolarSystem;
})(SolarSystem || {});
