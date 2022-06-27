
// ProductType schema
export interface IProductType {
    idproduct_type : number;
    name: string;
    store_idstore: number;
}


/**
 * Get a new ProductType object.
 * 
 * @returns 
 */
function getNew( idproduct_type: number,  name: string, store_idstore:number ): IProductType {
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
function copy(productType: IProductType): IProductType {
    return {
        idproduct_type: productType.idproduct_type,
        name: productType.name,
        store_idstore: productType.store_idstore,
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
