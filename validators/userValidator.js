const jwt = require("jsonwebtoken");

class UserValidator {
    async validateToken(token) {
        try {
            return {
                status: true,
                user: await jwt.verify(token),
            };
        } catch (error) {
            return {
                status: false,
            };
        }
    }
}

module.exports = new UserValidator();
