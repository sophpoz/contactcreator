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
		$('.tophalf').css("height", "80vh" );
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

		var contactHTML = '';
		//clear out rows loop through array, append each person to the body *for each contact, append*

	for(var personIndex in contacts) {
  		contactHTML += '<tr data-personindex="'+ personIndex +'">';
  		contactHTML += '<td>' + contacts[personIndex].firstName + '</td>';
  		contactHTML += '<td>' + contacts[personIndex].lastName + '</td>';
  		contactHTML += '<td>' + contacts[personIndex].phone + '</td>';
  		contactHTML += '<td>' + contacts[personIndex].streetName + '</td>';
  		contactHTML += '<td>' + contacts[personIndex].cityName + '</td>';
  		contactHTML += '<td>' + contacts[personIndex].stateName + '</td>';
  		contactHTML += '<td><button id="delete" type="button">x</button></td></tr>';
		}

		//clear fields
		$('#firstNameInput').val('');
		$('#lastNameInput').val('');
		$('#phoneInput').val('');
		$('#streetInput').val('');
		$('#cityInput').val('');
		$('#stateInput').val('');


		$('#contactRows').html(contactHTML);

	})
	
	$('table').click(function(e){
		if(e.target.tagName === 'TD'){	
			var thisTd = e.target;
			$(thisTd).attr('contenteditable', true)
		}else if(e.target.classList.includes('delete')){
			var $el = $(e.target).parent().parent('tr');
		    // console.log($el); // el.dataset.personindex
		    // Remove from array
		    contacts.splice( $el.dataset.personindex, 1);
		    // Remove from HTML
		    $($el).remove();
		}
		// $('.delete').on('click',function() {
		// 	$(this).parent().parent('tr').remove();
		// })
	})

	
})