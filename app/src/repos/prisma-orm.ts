import { PrismaClient } from '@prisma/client'
import User, { IUser } from '@models/user-model';

const prisma = new PrismaClient();

const getAllUsers = async function () : Promise<IUser[] | null>
{
    const users = await prisma.users.findMany();
    const usersArray = new Array();

    users.map( function( userItem ) {
        usersArray.push(
            User.new( 
                userItem.idusers !== null ? userItem.idusers : 0,
                userItem.name !== null ? userItem.name : '',
                userItem.email !== null ? userItem.email : '',
                userItem.last_name !== null ? userItem.last_name : '',
                userItem.login !== null ? userItem.login : '',
                userItem.pass !== null ? userItem.pass : '',
            )
        );
    } );

    return usersArray;
}

const getOneUser = async function ( id: number ) : Promise<IUser | null>
{
    const user = await prisma.users.findUnique({
        where: {
            idusers: id,
        },
    });

    if ( user !== null ) {
        return User.new(
            user.idusers !== null ? user.idusers : 0,
            user.name !== null ? user.name : '',
            user.email !== null ? user.email : '',
            user.last_name !== null ? user.last_name : '',
            user.login !== null ? user.login : '',
            user.pass !== null ? user.pass : '',
        );
    }

    return null;
}

export default {
    getAllUsers,
    getOneUser
} as const