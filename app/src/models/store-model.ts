
// User schema
export interface IStore {
    idstore: number;
    name: string;
    description: string;
    featured_image: string;
    logo_image: string;
    slug: string;
    address: string;
    open: Date;
    closed: Date;
}


/**
 * Get a new User object.
 * 
 * @returns 
 */
function getNew( idstore: number,  name: string, description: string, featured_image:string, logo_image:string, slug:string, address:string, open:Date, closed:Date ): IStore {
    return {
        idstore: idstore,
        name,
        description,
        featured_image,
        logo_image,
        slug,
        address,
        open,
        closed
    };
}


/**
 * Copy a user object.
 * 
 * @param store 
 * @returns 
 */
function copy(store: IStore): IStore {
    return {
        idstore: store.idstore,
        name: store.name,
        description: store.description,
        featured_image: store.featured_image,
        logo_image: store.logo_image,
        slug: store.slug,
        address: store.address,
        open: store.open,
        closed: store.closed
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
