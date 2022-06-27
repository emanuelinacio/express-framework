import { PrismaClient } from '@models/prisma';
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
                userItem.password !== null ? userItem.password : '',
            )
        );
    } );

    return usersArray;
}

const getOneUser = async function ( id: number ) : Promise<IUser | null>
{
    const user = await prisma.users.findFirst({
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
            user.password !== null ? user.password : '',
        );
    }

    return null;
}

const getUserByEmail = async function ( emailSearch: string ) : Promise<IUser | null>
{
    const user = await prisma.users.findFirst({
        where: {
            email: emailSearch !== null ? emailSearch: '',
        },
    });

    if ( user !== null ) {
        return User.new(
            user.idusers !== null ? user.idusers : 0,
            user.name !== null ? user.name : '',
            user.email !== null ? user.email : '',
            user.last_name !== null ? user.last_name : '',
            user.login !== null ? user.login : '',
            user.password !== null ? user.password : '',
        );
    }

    return null;
}

export default {
    getAllUsers,
    getUserByEmail,
    getOneUser
} as const