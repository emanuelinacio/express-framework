import { PrismaClient } from '@models/prisma';
import store, { IStore } from '@models/store-model';

const prisma = new PrismaClient();

const add = async function (storeAdd:IStore) 
{
    const insert = await prisma.store.create({ 
        data: storeAdd
    });

    return insert;
}

const getAllStores = async function () : Promise<IStore[] | null>
{
    const stores = await prisma.store.findMany();
    const storesArray = new Array();

    stores.map( function( storeItem ) {
        storesArray.push(
            store.new( 
                storeItem.idstore !== null ? storeItem.idstore : 0,
                storeItem.name !== null ? storeItem.name : '',
                storeItem.description !== null ? storeItem.description : '',
                storeItem.featured_image !== null ? storeItem.featured_image : '',
                storeItem.logo_image !== null ? storeItem.logo_image : '',
                storeItem.slug !== null ? storeItem.slug : '',
                storeItem.address !== null ? storeItem.address : '',
                storeItem.open !== null ? storeItem.open : new Date("2000-00-00T00:00:00"),
                storeItem.closed !== null ? storeItem.closed : new Date("2000-00-00T00:00:00"),
            )
        );
    } );

    return storesArray;
}

const getOneStore = async function ( id: number ) : Promise<IStore | null>
{
    const storeQuery = await prisma.store.findFirst({
        where: {
            idstore: id,
        },
    });

    if ( storeQuery !== null ) {
        return store.new(
            storeQuery.idstore !== null ? storeQuery.idstore : 0,
            storeQuery.name !== null ? storeQuery.name : '',
            storeQuery.description !== null ? storeQuery.description : '',
            storeQuery.featured_image !== null ? storeQuery.featured_image : '',
            storeQuery.logo_image !== null ? storeQuery.logo_image : '',
            storeQuery.slug !== null ? storeQuery.slug : '',
            storeQuery.address !== null ? storeQuery.address : '',
            storeQuery.open !== null ? storeQuery.open : new Date("2000-00-00T00:00:00"),
            storeQuery.closed !== null ? storeQuery.closed : new Date("2000-00-00T00:00:00"),
        );
    }

    return null;
}

export default {
    add,
    getAllStores,
    getOneStore
} as const