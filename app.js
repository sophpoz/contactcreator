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
		$('.bottomhalf').show();
		$('.tophalf').css("height", "80vh")
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
		contactHTML += '<td>' + '<button id="delete" type="button">x</button>' + '</td>';

		//clear fields
		$('#firstNameInput').val('');
		$('#lastNameInput').val('');
		$('#phoneInput').val('');
		$('#streetInput').val('');
		$('#cityInput').val('');
		$('#stateInput').val('');


		$('#contactRows').append(contactHTML);

	})
	
	$('table').click(function(e){
		if(e.target.tagName === 'TD'){	
			var thisTd = e.target;
			$(thisTd).attr('contenteditable', true)
		}
		$('#delete').on('click',function() {
			$(this).parent().parent('tr').remove();
		})
	})

	
})