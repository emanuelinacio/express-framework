"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get a new User object.
 *
 * @returns
 */
function getNew(idusers, name, email, last_name, login, pass, store_idstore) {
    return {
        idusers: idusers,
        email,
        name,
        last_name,
        login,
        pass,
        store_idstore
    };
}
/**
 * Copy a user object.
 *
 * @param user
 * @returns
 */
function copy(user) {
    return {
        idusers: user.idusers,
        email: user.email,
        name: user.name,
        last_name: user.last_name,
        login: user.login,
        pass: user.pass,
        store_idstore: user.store_idstore
    };
}
// Export default
exports.default = {
    new: getNew,
    copy,
};
