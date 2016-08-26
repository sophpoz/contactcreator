
$(document).ready(function(){

	$('#submit').click(function(e){
		e.preventDefault();
		$('#contactCreator').submit();
		var firstName = document.getElementById('firstNameInput');
		var lastName = document.getElementById('lastNameInput');
		var phone = document.getElementById('phoneInput');
		var streetName = document.getElementById('streetInput');
		var cityName = document.getElementById('cityInput');
		var stateName = document.getElementById('stateInput');

		var fName = firstName.value;
		var lName = lastName.value;
		var phoneNum = phone.value;
		var street = streetName.value;
		var city = cityName.value;
		var state = stateName.value;
		//is there a way to reference *all* inputs?
		if(fName === '' || lName === ''){
			$('#false').text('Please complete all fields');
			return false;
		}else { 
			$('#firstNameDiv').append(fName);
			$('#lastNameDiv').append(lName);
			$('#phoneDiv').append(phoneNum);
			$('#streetDiv').append(street);
			$('#cityDiv').append(city);
			$('#stateDiv').append(state);
		}
	})
	
})