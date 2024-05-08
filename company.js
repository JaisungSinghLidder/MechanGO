/* 
    Author: Jaisung Singh Lidder
    ID: T00710750
*/

function validateForm() {
    // Validate name
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameInput.validity.valueMissing) {  /*this fulfills 5.6(b) */
      nameError.textContent = 'Please enter a name.';
	  alert("Name must be filled out"); /*this fulfills 5.6(c) */
    } 
    else {
      nameError.textContent = '';
    }

    // Validate email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (emailInput.validity.valueMissing) {
      emailError.textContent = 'Please enter an email address.';
    } 
    else if (!emailInput.value.includes('@') || !/\S+@\S+\.\S+/.test(emailInput.value)) { /*This fulfills 5.3 (c) */
      emailError.textContent = 'Please enter a valid email address.';
    } 
    else {
      emailError.textContent = '';
    }
  }

var col = document.getElementsByClassName('collapsible');

var i; 

for (i=0; i < col.length; i++)
{
	col[i].addEventListener('click', function() {
		this.classList.toggle('active');
		var content = this.nextElementSibling;
		if (content.style.display === 'block') {
			content.style.display = 'none';
		} else {
			content.style.display = 'block';
		}
});
}

