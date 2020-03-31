const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
	let errors = {};

	data.text = !isEmpty(data.text) ? data.text : '';

	if (!validator.isLength(data.text, { min: 10, max: 300 })) {
		errors.text = 'text should be between 10 and 300';
	}

	if (validator.isEmpty(data.text)) {
		errors.text = 'text should be required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
