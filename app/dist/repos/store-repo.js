"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mock_orm_1 = __importDefault(require("./orm/mock-orm"));
const store_orm_1 = __importDefault(require("./orm/store-orm"));
/**
 * Get one user.
 *
 * @param id
 * @returns
 */
function getOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const getUsersQuery = yield store_orm_1.default.getOneStore(1);
        if (getUsersQuery) {
            return getUsersQuery;
        }
        return null;
    });
}
/**
 * See if a user with the given id exists.
 *
 * @param id
 */
function persists(idusers) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mock_orm_1.default.openDb();
        for (const user of db.users) {
            if (user.idusers === idusers) {
                return true;
            }
        }
        return false;
    });
}
/**
 * Get all users.
 *
 * @returns
 */
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const allUsers = yield store_orm_1.default.getAllStores();
        if (allUsers !== null) {
            return allUsers;
        }
        return null;
    });
}
/**
 * Add one store.
 *
 * @param store
 * @returns
 */
function add(store) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield store_orm_1.default.add(store);
    });
}
/**
 * Update a user.
 *
 * @param user
 * @returns
 */
function update(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mock_orm_1.default.openDb();
        for (let i = 0; i < db.users.length; i++) {
            if (db.users[i].idusers === user.idusers) {
                db.users[i] = user;
                return mock_orm_1.default.saveDb(db);
            }
        }
    });
}
/**
 * Delete one user.
 *
 * @param id
 * @returns
 */
function deleteOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield mock_orm_1.default.openDb();
        for (let i = 0; i < db.users.length; i++) {
            if (db.users[i].id === id) {
                db.users.splice(i, 1);
                return mock_orm_1.default.saveDb(db);
            }
        }
    });
}
// Export default
exports.default = {
    getOne,
    persists,
    getAll,
    add,
    update,
    delete: deleteOne,
};
