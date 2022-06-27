
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  idproduct: 'idproduct',
  description: 'description',
  image: 'image',
  name: 'name',
  price: 'price',
  store_idstore: 'store_idstore',
  productType_idproduct_type: 'productType_idproduct_type',
  productType_store_idstore: 'productType_store_idstore'
});

exports.Prisma.ProductTypeScalarFieldEnum = makeEnum({
  idproduct_type: 'idproduct_type',
  name: 'name',
  store_idstore: 'store_idstore'
});

exports.Prisma.PromotionScalarFieldEnum = makeEnum({
  idpromotion: 'idpromotion',
  name: 'name',
  description: 'description',
  active: 'active',
  price: 'price',
  store_idstore: 'store_idstore',
  product_idproduct: 'product_idproduct',
  product_store_idstore: 'product_store_idstore'
});

exports.Prisma.StoreScalarFieldEnum = makeEnum({
  idstore: 'idstore',
  name: 'name',
  description: 'description',
  open: 'open',
  closed: 'closed',
  featured_image: 'featured_image',
  logo_image: 'logo_image',
  slug: 'slug',
  address: 'address'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  idusers: 'idusers',
  name: 'name',
  last_name: 'last_name',
  login: 'login',
  password: 'password',
  email: 'email',
  store_idstore: 'store_idstore'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  product: 'product',
  productType: 'productType',
  promotion: 'promotion',
  store: 'store',
  users: 'users'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
