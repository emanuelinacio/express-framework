// Product schema
export interface IProduct {
    idproduct : number;
    name: string;
    description: string;
    price: number;
    productType: number;
    store_idstore: number;
}


/**
 * Get a new Product object.
 * 
 * @returns 
 */
function getNew( idproduct: number,  name: string, description: string, price: number, productType: number, store_idstore:number ): IProduct {
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
function copy(productType: IProduct): IProduct {
    return {
        idproduct: productType.idproduct,
        name: productType.name,
        description: productType.description,
        price: productType.price,
        productType: productType.productType,
        store_idstore: productType.store_idstore
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
