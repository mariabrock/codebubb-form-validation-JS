const validateForm = formSelector => {
	const formElement = document.querySelector(formSelector);

	// we will create validation rules that the group can loop through to see if ever ything validates
	const validationOptions = [
		{
			attribute: 'required',
			isValid: input => input.value.trim() !== '',
			errorMessage: (input, label) => `${label.textContent} is required`

		}
	];

	const validateSingleFormGroup = formGroup => {
		const label = formGroup.querySelector('label');
		const input = formGroup.querySelector('input');
		const errorContainer = formGroup.querySelector('.error');
		const errorIcon = formGroup.querySelector('.error-icon');

		let formGroupError = false;
		// loop through our validation options
		for(const option of validationOptions) {
			if(input.hasAttribute(option.attribute) && !option.isValid(input)) {
				errorContainer.textContent = option.errorMessage(input, label);
				input.classList.add('error-input');
				errorIcon.classList.remove('hidden');
				formGroupError = true;
			}
		}
		// another statement to set error containers to nothing
		if(!formGroupError) {
			errorContainer.textContent = '';
			input.classList.remove('error-input');
			errorIcon.classList.add('hidden');
		}
	};

// novalidate removes all html validation so that we can start with a clean slate
	formElement.setAttribute('novalidate', '');
// add an event listener so we can prevent automatic submission
// 	trigger the validation
	formElement.addEventListener('submit', (event) => {
		event.preventDefault();
		validateAllFormGroups(formElement);
	});
// function to validate each form group we created
	const validateAllFormGroups = formToValidate => {
		// grab form groups out of the form, store in an array
		const formGroups = Array.from (formToValidate.querySelectorAll('.form-group'));

		formGroups.forEach( formGroup => {
			validateSingleFormGroup(formGroup)
		});
	}

}

validateForm('#registrationForm')
