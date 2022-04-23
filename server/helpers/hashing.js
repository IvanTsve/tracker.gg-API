const config = require('../config/config');
const bcrypt = require('bcrypt');


module.exports = async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 3);
    return hash;
}
