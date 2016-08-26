// person {
// 	firstName: '',
// 	lastName: '',
// 	phoneNumber: '',
// 	street: '',
// 	city: '',
// 	state: ''
// }

var contacts = []
$(document).ready(function(){

	$('#contactCreator').submit(function(e){
		e.preventDefault();
		console.log(e);
		var newPerson = {
			firstName: document.getElementById('firstNameInput').value,
			lastName: document.getElementById('lastNameInput').value,
			phone: document.getElementById('phoneInput').value,
			streetName: document.getElementById('streetInput').value,
			cityName: document.getElementById('cityInput').value,
			stateName: document.getElementById('stateInput').value
		}

		contacts.push(newPerson);
		console.log(contacts);
		//clear out rows loop through array, append each person to the body *for each contact, append*
		var contactHTML = '<tr>';
		contactHTML += '<td>' + newPerson.firstName + '</td>';
		contactHTML += '<td>' + newPerson.lastName + '</td>';
		contactHTML += '<td>' + newPerson.phone + '</td>';
		contactHTML += '<td>' + newPerson.streetName + '</td>';
		contactHTML += '<td>' + newPerson.cityName + '</td>';
		contactHTML += '<td>' + newPerson.stateName + '</td>';



		$('#contactRows').append(contactHTML);

	})
	
})