import { PrismaClient } from '@models/prisma';
import productType, { IProductType } from '@models/productType-model ';

const prisma = new PrismaClient();

const getAllProductType = async function () : Promise<IProductType[] | null>
{
    const products = await prisma.productType.findMany();
    const usersArray = new Array();

    products.map( function( productItem ) {
        usersArray.push(
            productType.new( 
                productItem.idproduct_type !== null ? productItem.idproduct_type : 0,
                productItem.name !== null ? productItem.name : '',
            )
        );
    } );

    return usersArray;
}

const getOneProductType = async function ( id: number ) : Promise<IProductType | null>
{
    const productTypeQuery = await prisma.productType.findUnique({
        where: {
            idproduct_type: id,
        },
    });

    if ( productTypeQuery !== null ) {
        return productType.new(
            productTypeQuery.idproduct_type !== null ? productTypeQuery.idproduct_type : 0,
            productTypeQuery.name !== null ? productTypeQuery.name : '',
        );
    }

    return null;
}

export default {
    getAllProductType,
    getOneProductType
} as const