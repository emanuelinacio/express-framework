"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get a new ProductType object.
 *
 * @returns
 */
function getNew(idproduct_type, name, store_idstore) {
    return {
        idproduct_type: idproduct_type,
        name,
        store_idstore
    };
}
/**
 * Copy a productType object.
 *
 * @param productType
 * @returns
 */
function copy(productType) {
    return {
        idproduct_type: productType.idproduct_type,
        name: productType.name,
        store_idstore: productType.store_idstore,
    };
}
// Export default
exports.default = {
    new: getNew,
    copy,
};
