const { ExtractJwt } = require("passport-jwt");

const jwtOtions = {};

jwtOtions.secretOrKey = require("../config/keys").secretOrKey;
jwtOtions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = jwtOtions;
