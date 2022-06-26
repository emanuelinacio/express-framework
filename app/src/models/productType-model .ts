
// ProductType schema
export interface IProductType {
    idproduct_type : number;
    name: string;
}


/**
 * Get a new ProductType object.
 * 
 * @returns 
 */
function getNew( idproduct_type: number,  name: string ): IProductType {
    return {
        idproduct_type: idproduct_type,
        name,
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
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
