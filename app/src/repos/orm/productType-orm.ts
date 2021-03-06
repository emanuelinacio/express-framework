import { PrismaClient } from '@models/prisma';
import productType, { IProductType } from '@models/productType-model ';

const prisma = new PrismaClient();

const add = async function (productTypeAdd:IProductType) 
{
    const insert = await prisma.productType.create({ 
        data: productTypeAdd
    });

    return insert;
}

const deleteProductType = async function( id: number )
{
    const deleteProductTypeID = await prisma.productType.delete({
        where: {
            idproduct_type: id,
        }
    })

    return deleteProductTypeID.idproduct_type;
}

const getAllProductType = async function () : Promise<IProductType[] | null>
{
    const products = await prisma.productType.findMany();
    const usersArray = new Array();

    products.map( function( productItem ) {
        usersArray.push(
            productType.new( 
                productItem.idproduct_type !== null ? productItem.idproduct_type : 0,
                productItem.name !== null ? productItem.name : '',
                productItem.store_idstore !== null ? productItem.store_idstore : 0,
            )
        );
    } );

    return usersArray;
}

const getOneProductType = async function ( id: number ) : Promise<IProductType | null>
{
    const productTypeQuery = await prisma.productType.findFirst({
        where: {
            idproduct_type: id,
        },
    });

    if ( productTypeQuery !== null ) {
        return productType.new(
            productTypeQuery.idproduct_type !== null ? productTypeQuery.idproduct_type : 0,
            productTypeQuery.name !== null ? productTypeQuery.name : '',
            productTypeQuery.store_idstore !== null ? productTypeQuery.store_idstore : 0,
        );
    }

    return null;
}

export default {
    add,
    deleteProductType,
    getAllProductType,
    getOneProductType
} as const