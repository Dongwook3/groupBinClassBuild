(function() {
	var selectedCar, saveButton = document.querySelector('.fa-download').parentNode; 
	// parentNode is the element's "wrapper" (wahtever it's nested in)
	// 
	// expanded AJAX example
	$('.thumbInfo img').on('click', function() {

		// do an AJAX call
		$.ajax({
			url: "includes/ajaxQuery.php", 
			data: { model: this.id }, //idx
			type: "GET"
		}) // don't put a semicolon here so we can chain methods together

		.done(function(data) {
			console.log(data);

			if (data && data != "nulll") {
				selectedCar = data;

				data = JSON.parse(data);
				renderCarInfo(data);
			} else {
				alert('your ajax call didn\'t work');
			}
			/*data = JSON.parse(data);
			renderCarInfo(data);*/
		}) // don't put a semicolon here either!

		.fail(function(ajaxCall, status, error) {
			console.log(status, ", ", error);
			console.dir(ajaxCall); // outputs the ajax call as an object
		}); // terminate the ajax function

		function renderCarInfo(car) {
			$('.thumbInfo img').addClass('nonActive'); // for collections, use jQuery (more than oneelement)
			$('#' + car.model).removeClass('nonActive');

			$('.subhead span').text(" mini Cooper " + car.model);
			$('.modelName').text(car.modelName);
			$('.priceInfo').text(car.pricing);
			$('.modelDetails').text(car.modelDetails);
		}
	});
	
	function saveData() {
		debugger;
	}

	saveButton.addEventListener('click', saveData, false);

})();