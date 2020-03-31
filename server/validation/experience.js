const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
	let errors = {};

	data.title = !isEmpty(data.title) ? data.title : '';
	data.company = !isEmpty(data.company) ? data.company : '';
	data.from = !isEmpty(data.from) ? data.from : '';
	data.description = !isEmpty(data.description) ? data.description : '';

	if (validator.isEmpty(data.description)) {
		errors.description = 'description should be required';
	}

	if (validator.isEmpty(data.title)) {
		errors.title = 'title should be required';
	}
	if (validator.isEmpty(data.company)) {
		errors.company = 'company should be required';
	}

	if (validator.isEmpty(data.from)) {
		errors.from = 'from should be required';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
