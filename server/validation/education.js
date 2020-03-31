const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
	let errors = {};

	data.school = !isEmpty(data.school) ? data.school : '';
	data.degree = !isEmpty(data.degree) ? data.degree : '';
	data.from = !isEmpty(data.from) ? data.from : '';
	data.description = !isEmpty(data.description) ? data.description : '';

	if (validator.isEmpty(data.description)) {
		errors.description = 'description should be required';
	}

	if (validator.isEmpty(data.school)) {
		errors.school = 'school should be required';
	}
	if (validator.isEmpty(data.degree)) {
		errors.degree = 'degree should be required';
	}

	if (validator.isEmpty(data.from)) {
		errors.from = 'from should be required';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
