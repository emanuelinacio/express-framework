"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get a new Product object.
 *
 * @returns
 */
function getNew(idproduct, name, description, price, productType, store_idstore) {
    return {
        idproduct: idproduct,
        name: name,
        description: description,
        price: price,
        productType: productType,
        store_idstore: store_idstore
    };
}
/**
 * Copy a Product object.
 *
 * @param productType
 * @returns
 */
function copy(productType) {
    return {
        idproduct: productType.idproduct,
        name: productType.name,
        description: productType.description,
        price: productType.price,
        productType: productType.productType,
        store_idstore: productType.store_idstore
    };
}
// Export default
exports.default = {
    new: getNew,
    copy,
};
