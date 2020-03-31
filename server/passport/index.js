const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;

module.exports = () => {
	var strategy = new jwtStrategy(
		require('./jwtOptions'),
		(jwt_payload, next) => {
			require('../models/User')
				.findById(jwt_payload.id)
				.then(user => {
					if (user) {
						next(null, user);
					} else {
						next(null, false);
					}
				});
		}
	);

	passport.use(strategy);
};
