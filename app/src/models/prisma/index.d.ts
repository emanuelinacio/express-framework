
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model product
 * 
 */
export type product = {
  idproduct: number
  description: string | null
  image: string | null
  name: string | null
  price: number | null
  store_idstore: number
}

/**
 * Model productType
 * 
 */
export type productType = {
  idproduct_type: number
  name: string | null
  store_idstore: number
}

/**
 * Model users
 * 
 */
export type users = {
  idusers: number
  name: string | null
  last_name: string | null
  login: string | null
  password: string | null
  email: string | null
  store_idstore: number
}

/**
 * Model promotion
 * 
 */
export type promotion = {
  idpromotion: number
  name: string | null
  description: string | null
  active: string | null
  price: number | null
  store_idstore: number
  product_idproduct: number
  product_store_idstore: number
}

/**
 * Model store
 * 
 */
export type store = {
  idstore: number
  name: string | null
  description: string | null
  open: Date | null
  closed: Date | null
  featured_image: string | null
  logo_image: string | null
  slug: string | null
  address: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<GlobalReject>;

  /**
   * `prisma.productType`: Exposes CRUD operations for the **productType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTypes
    * const productTypes = await prisma.productType.findMany()
    * ```
    */
  get productType(): Prisma.productTypeDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.promotionDelegate<GlobalReject>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.storeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    product: 'product',
    productType: 'productType',
    users: 'users',
    promotion: 'promotion',
    store: 'store'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    promotion: number
  }

  export type ProductCountOutputTypeSelect = {
    promotion?: boolean
  }

  export type ProductCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductCountOutputType
    : S extends undefined
    ? never
    : S extends ProductCountOutputTypeArgs
    ?'include' extends U
    ? ProductCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
    : ProductCountOutputType
  : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     * 
    **/
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type StoreCountOutputType
   */


  export type StoreCountOutputType = {
    product: number
    productType: number
    promotion: number
    users: number
  }

  export type StoreCountOutputTypeSelect = {
    product?: boolean
    productType?: boolean
    promotion?: boolean
    users?: boolean
  }

  export type StoreCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StoreCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StoreCountOutputType
    : S extends undefined
    ? never
    : S extends StoreCountOutputTypeArgs
    ?'include' extends U
    ? StoreCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof StoreCountOutputType ? StoreCountOutputType[P] : never
  } 
    : StoreCountOutputType
  : StoreCountOutputType




  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     * 
    **/
    select?: StoreCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    idproduct: number | null
    price: number | null
    store_idstore: number | null
  }

  export type ProductSumAggregateOutputType = {
    idproduct: number | null
    price: number | null
    store_idstore: number | null
  }

  export type ProductMinAggregateOutputType = {
    idproduct: number | null
    description: string | null
    image: string | null
    name: string | null
    price: number | null
    store_idstore: number | null
  }

  export type ProductMaxAggregateOutputType = {
    idproduct: number | null
    description: string | null
    image: string | null
    name: string | null
    price: number | null
    store_idstore: number | null
  }

  export type ProductCountAggregateOutputType = {
    idproduct: number
    description: number
    image: number
    name: number
    price: number
    store_idstore: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    idproduct?: true
    price?: true
    store_idstore?: true
  }

  export type ProductSumAggregateInputType = {
    idproduct?: true
    price?: true
    store_idstore?: true
  }

  export type ProductMinAggregateInputType = {
    idproduct?: true
    description?: true
    image?: true
    name?: true
    price?: true
    store_idstore?: true
  }

  export type ProductMaxAggregateInputType = {
    idproduct?: true
    description?: true
    image?: true
    name?: true
    price?: true
    store_idstore?: true
  }

  export type ProductCountAggregateInputType = {
    idproduct?: true
    description?: true
    image?: true
    name?: true
    price?: true
    store_idstore?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which product to aggregate.
     * 
    **/
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: productWhereInput
    orderBy?: Enumerable<productOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    idproduct: number
    description: string | null
    image: string | null
    name: string | null
    price: number | null
    store_idstore: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect = {
    idproduct?: boolean
    description?: boolean
    image?: boolean
    name?: boolean
    price?: boolean
    store_idstore?: boolean
    store?: boolean | storeArgs
    promotion?: boolean | promotionFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type productInclude = {
    store?: boolean | storeArgs
    promotion?: boolean | promotionFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type productGetPayload<
    S extends boolean | null | undefined | productArgs,
    U = keyof S
      > = S extends true
        ? product
    : S extends undefined
    ? never
    : S extends productArgs | productFindManyArgs
    ?'include' extends U
    ? product  & {
    [P in TrueKeys<S['include']>]:
        P extends 'store' ? storeGetPayload<S['include'][P]> :
        P extends 'promotion' ? Array < promotionGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'store' ? storeGetPayload<S['select'][P]> :
        P extends 'promotion' ? Array < promotionGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof product ? product[P] : never
  } 
    : product
  : product


  type productCountArgs = Merge<
    Omit<productFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface productDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'product'> extends True ? CheckSelect<T, Prisma__productClient<product>, Prisma__productClient<productGetPayload<T>>> : CheckSelect<T, Prisma__productClient<product | null >, Prisma__productClient<productGetPayload<T> | null >>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'product'> extends True ? CheckSelect<T, Prisma__productClient<product>, Prisma__productClient<productGetPayload<T>>> : CheckSelect<T, Prisma__productClient<product | null >, Prisma__productClient<productGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `idproduct`
     * const productWithIdproductOnly = await prisma.product.findMany({ select: { idproduct: true } })
     * 
    **/
    findMany<T extends productFindManyArgs>(
      args?: SelectSubset<T, productFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<product>>, PrismaPromise<Array<productGetPayload<T>>>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends productCreateArgs>(
      args: SelectSubset<T, productCreateArgs>
    ): CheckSelect<T, Prisma__productClient<product>, Prisma__productClient<productGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {productCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productCreateManyArgs>(
      args?: SelectSubset<T, productCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends productDeleteArgs>(
      args: SelectSubset<T, productDeleteArgs>
    ): CheckSelect<T, Prisma__productClient<product>, Prisma__productClient<productGetPayload<T>>>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productUpdateArgs>(
      args: SelectSubset<T, productUpdateArgs>
    ): CheckSelect<T, Prisma__productClient<product>, Prisma__productClient<productGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productDeleteManyArgs>(
      args?: SelectSubset<T, productDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productUpdateManyArgs>(
      args: SelectSubset<T, productUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends productUpsertArgs>(
      args: SelectSubset<T, productUpsertArgs>
    ): CheckSelect<T, Prisma__productClient<product>, Prisma__productClient<productGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    store<T extends storeArgs = {}>(args?: Subset<T, storeArgs>): CheckSelect<T, Prisma__storeClient<store | null >, Prisma__storeClient<storeGetPayload<T> | null >>;

    promotion<T extends promotionFindManyArgs = {}>(args?: Subset<T, promotionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<promotion>>, PrismaPromise<Array<promotionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * product findUnique
   */
  export type productFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
    /**
     * Throw an Error if a product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product to fetch.
     * 
    **/
    where: productWhereUniqueInput
  }


  /**
   * product findFirst
   */
  export type productFindFirstArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
    /**
     * Throw an Error if a product can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which product to fetch.
     * 
    **/
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     * 
    **/
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * product findMany
   */
  export type productFindManyArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
    /**
     * Filter, which products to fetch.
     * 
    **/
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     * 
    **/
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * product create
   */
  export type productCreateArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
    /**
     * The data needed to create a product.
     * 
    **/
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }


  /**
   * product createMany
   */
  export type productCreateManyArgs = {
    /**
     * The data used to create many products.
     * 
    **/
    data: Enumerable<productCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * product update
   */
  export type productUpdateArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
    /**
     * The data needed to update a product.
     * 
    **/
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     * 
    **/
    where: productWhereUniqueInput
  }


  /**
   * product updateMany
   */
  export type productUpdateManyArgs = {
    /**
     * The data used to update products.
     * 
    **/
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     * 
    **/
    where?: productWhereInput
  }


  /**
   * product upsert
   */
  export type productUpsertArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
    /**
     * The filter to search for the product to update in case it exists.
     * 
    **/
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     * 
    **/
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }


  /**
   * product delete
   */
  export type productDeleteArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
    /**
     * Filter which product to delete.
     * 
    **/
    where: productWhereUniqueInput
  }


  /**
   * product deleteMany
   */
  export type productDeleteManyArgs = {
    /**
     * Filter which products to delete
     * 
    **/
    where?: productWhereInput
  }


  /**
   * product without action
   */
  export type productArgs = {
    /**
     * Select specific fields to fetch from the product
     * 
    **/
    select?: productSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productInclude | null
  }



  /**
   * Model productType
   */


  export type AggregateProductType = {
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  export type ProductTypeAvgAggregateOutputType = {
    idproduct_type: number | null
    store_idstore: number | null
  }

  export type ProductTypeSumAggregateOutputType = {
    idproduct_type: number | null
    store_idstore: number | null
  }

  export type ProductTypeMinAggregateOutputType = {
    idproduct_type: number | null
    name: string | null
    store_idstore: number | null
  }

  export type ProductTypeMaxAggregateOutputType = {
    idproduct_type: number | null
    name: string | null
    store_idstore: number | null
  }

  export type ProductTypeCountAggregateOutputType = {
    idproduct_type: number
    name: number
    store_idstore: number
    _all: number
  }


  export type ProductTypeAvgAggregateInputType = {
    idproduct_type?: true
    store_idstore?: true
  }

  export type ProductTypeSumAggregateInputType = {
    idproduct_type?: true
    store_idstore?: true
  }

  export type ProductTypeMinAggregateInputType = {
    idproduct_type?: true
    name?: true
    store_idstore?: true
  }

  export type ProductTypeMaxAggregateInputType = {
    idproduct_type?: true
    name?: true
    store_idstore?: true
  }

  export type ProductTypeCountAggregateInputType = {
    idproduct_type?: true
    name?: true
    store_idstore?: true
    _all?: true
  }

  export type ProductTypeAggregateArgs = {
    /**
     * Filter which productType to aggregate.
     * 
    **/
    where?: productTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<productTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: productTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productTypes
    **/
    _count?: true | ProductTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTypeMaxAggregateInputType
  }

  export type GetProductTypeAggregateType<T extends ProductTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductType[P]>
      : GetScalarType<T[P], AggregateProductType[P]>
  }




  export type ProductTypeGroupByArgs = {
    where?: productTypeWhereInput
    orderBy?: Enumerable<productTypeOrderByWithAggregationInput>
    by: Array<ProductTypeScalarFieldEnum>
    having?: productTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTypeCountAggregateInputType | true
    _avg?: ProductTypeAvgAggregateInputType
    _sum?: ProductTypeSumAggregateInputType
    _min?: ProductTypeMinAggregateInputType
    _max?: ProductTypeMaxAggregateInputType
  }


  export type ProductTypeGroupByOutputType = {
    idproduct_type: number
    name: string | null
    store_idstore: number
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  type GetProductTypeGroupByPayload<T extends ProductTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
        }
      >
    >


  export type productTypeSelect = {
    idproduct_type?: boolean
    name?: boolean
    store_idstore?: boolean
    store?: boolean | storeArgs
  }

  export type productTypeInclude = {
    store?: boolean | storeArgs
  }

  export type productTypeGetPayload<
    S extends boolean | null | undefined | productTypeArgs,
    U = keyof S
      > = S extends true
        ? productType
    : S extends undefined
    ? never
    : S extends productTypeArgs | productTypeFindManyArgs
    ?'include' extends U
    ? productType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'store' ? storeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'store' ? storeGetPayload<S['select'][P]> :  P extends keyof productType ? productType[P] : never
  } 
    : productType
  : productType


  type productTypeCountArgs = Merge<
    Omit<productTypeFindManyArgs, 'select' | 'include'> & {
      select?: ProductTypeCountAggregateInputType | true
    }
  >

  export interface productTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProductType that matches the filter.
     * @param {productTypeFindUniqueArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'productType'> extends True ? CheckSelect<T, Prisma__productTypeClient<productType>, Prisma__productTypeClient<productTypeGetPayload<T>>> : CheckSelect<T, Prisma__productTypeClient<productType | null >, Prisma__productTypeClient<productTypeGetPayload<T> | null >>

    /**
     * Find the first ProductType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productTypeFindFirstArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'productType'> extends True ? CheckSelect<T, Prisma__productTypeClient<productType>, Prisma__productTypeClient<productTypeGetPayload<T>>> : CheckSelect<T, Prisma__productTypeClient<productType | null >, Prisma__productTypeClient<productTypeGetPayload<T> | null >>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTypes
     * const productTypes = await prisma.productType.findMany()
     * 
     * // Get first 10 ProductTypes
     * const productTypes = await prisma.productType.findMany({ take: 10 })
     * 
     * // Only select the `idproduct_type`
     * const productTypeWithIdproduct_typeOnly = await prisma.productType.findMany({ select: { idproduct_type: true } })
     * 
    **/
    findMany<T extends productTypeFindManyArgs>(
      args?: SelectSubset<T, productTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<productType>>, PrismaPromise<Array<productTypeGetPayload<T>>>>

    /**
     * Create a ProductType.
     * @param {productTypeCreateArgs} args - Arguments to create a ProductType.
     * @example
     * // Create one ProductType
     * const ProductType = await prisma.productType.create({
     *   data: {
     *     // ... data to create a ProductType
     *   }
     * })
     * 
    **/
    create<T extends productTypeCreateArgs>(
      args: SelectSubset<T, productTypeCreateArgs>
    ): CheckSelect<T, Prisma__productTypeClient<productType>, Prisma__productTypeClient<productTypeGetPayload<T>>>

    /**
     * Create many ProductTypes.
     *     @param {productTypeCreateManyArgs} args - Arguments to create many ProductTypes.
     *     @example
     *     // Create many ProductTypes
     *     const productType = await prisma.productType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productTypeCreateManyArgs>(
      args?: SelectSubset<T, productTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductType.
     * @param {productTypeDeleteArgs} args - Arguments to delete one ProductType.
     * @example
     * // Delete one ProductType
     * const ProductType = await prisma.productType.delete({
     *   where: {
     *     // ... filter to delete one ProductType
     *   }
     * })
     * 
    **/
    delete<T extends productTypeDeleteArgs>(
      args: SelectSubset<T, productTypeDeleteArgs>
    ): CheckSelect<T, Prisma__productTypeClient<productType>, Prisma__productTypeClient<productTypeGetPayload<T>>>

    /**
     * Update one ProductType.
     * @param {productTypeUpdateArgs} args - Arguments to update one ProductType.
     * @example
     * // Update one ProductType
     * const productType = await prisma.productType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productTypeUpdateArgs>(
      args: SelectSubset<T, productTypeUpdateArgs>
    ): CheckSelect<T, Prisma__productTypeClient<productType>, Prisma__productTypeClient<productTypeGetPayload<T>>>

    /**
     * Delete zero or more ProductTypes.
     * @param {productTypeDeleteManyArgs} args - Arguments to filter ProductTypes to delete.
     * @example
     * // Delete a few ProductTypes
     * const { count } = await prisma.productType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productTypeDeleteManyArgs>(
      args?: SelectSubset<T, productTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTypes
     * const productType = await prisma.productType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productTypeUpdateManyArgs>(
      args: SelectSubset<T, productTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductType.
     * @param {productTypeUpsertArgs} args - Arguments to update or create a ProductType.
     * @example
     * // Update or create a ProductType
     * const productType = await prisma.productType.upsert({
     *   create: {
     *     // ... data to create a ProductType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductType we want to update
     *   }
     * })
    **/
    upsert<T extends productTypeUpsertArgs>(
      args: SelectSubset<T, productTypeUpsertArgs>
    ): CheckSelect<T, Prisma__productTypeClient<productType>, Prisma__productTypeClient<productTypeGetPayload<T>>>

    /**
     * Count the number of ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productTypeCountArgs} args - Arguments to filter ProductTypes to count.
     * @example
     * // Count the number of ProductTypes
     * const count = await prisma.productType.count({
     *   where: {
     *     // ... the filter for the ProductTypes we want to count
     *   }
     * })
    **/
    count<T extends productTypeCountArgs>(
      args?: Subset<T, productTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTypeAggregateArgs>(args: Subset<T, ProductTypeAggregateArgs>): PrismaPromise<GetProductTypeAggregateType<T>>

    /**
     * Group by ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProductTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTypeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for productType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    store<T extends storeArgs = {}>(args?: Subset<T, storeArgs>): CheckSelect<T, Prisma__storeClient<store | null >, Prisma__storeClient<storeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * productType findUnique
   */
  export type productTypeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
    /**
     * Throw an Error if a productType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which productType to fetch.
     * 
    **/
    where: productTypeWhereUniqueInput
  }


  /**
   * productType findFirst
   */
  export type productTypeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
    /**
     * Throw an Error if a productType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which productType to fetch.
     * 
    **/
    where?: productTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<productTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productTypes.
     * 
    **/
    cursor?: productTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productTypes.
     * 
    **/
    distinct?: Enumerable<ProductTypeScalarFieldEnum>
  }


  /**
   * productType findMany
   */
  export type productTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
    /**
     * Filter, which productTypes to fetch.
     * 
    **/
    where?: productTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<productTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productTypes.
     * 
    **/
    cursor?: productTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductTypeScalarFieldEnum>
  }


  /**
   * productType create
   */
  export type productTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
    /**
     * The data needed to create a productType.
     * 
    **/
    data: XOR<productTypeCreateInput, productTypeUncheckedCreateInput>
  }


  /**
   * productType createMany
   */
  export type productTypeCreateManyArgs = {
    /**
     * The data used to create many productTypes.
     * 
    **/
    data: Enumerable<productTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * productType update
   */
  export type productTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
    /**
     * The data needed to update a productType.
     * 
    **/
    data: XOR<productTypeUpdateInput, productTypeUncheckedUpdateInput>
    /**
     * Choose, which productType to update.
     * 
    **/
    where: productTypeWhereUniqueInput
  }


  /**
   * productType updateMany
   */
  export type productTypeUpdateManyArgs = {
    /**
     * The data used to update productTypes.
     * 
    **/
    data: XOR<productTypeUpdateManyMutationInput, productTypeUncheckedUpdateManyInput>
    /**
     * Filter which productTypes to update
     * 
    **/
    where?: productTypeWhereInput
  }


  /**
   * productType upsert
   */
  export type productTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
    /**
     * The filter to search for the productType to update in case it exists.
     * 
    **/
    where: productTypeWhereUniqueInput
    /**
     * In case the productType found by the `where` argument doesn't exist, create a new productType with this data.
     * 
    **/
    create: XOR<productTypeCreateInput, productTypeUncheckedCreateInput>
    /**
     * In case the productType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<productTypeUpdateInput, productTypeUncheckedUpdateInput>
  }


  /**
   * productType delete
   */
  export type productTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
    /**
     * Filter which productType to delete.
     * 
    **/
    where: productTypeWhereUniqueInput
  }


  /**
   * productType deleteMany
   */
  export type productTypeDeleteManyArgs = {
    /**
     * Filter which productTypes to delete
     * 
    **/
    where?: productTypeWhereInput
  }


  /**
   * productType without action
   */
  export type productTypeArgs = {
    /**
     * Select specific fields to fetch from the productType
     * 
    **/
    select?: productTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productTypeInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    idusers: number | null
    store_idstore: number | null
  }

  export type UsersSumAggregateOutputType = {
    idusers: number | null
    store_idstore: number | null
  }

  export type UsersMinAggregateOutputType = {
    idusers: number | null
    name: string | null
    last_name: string | null
    login: string | null
    password: string | null
    email: string | null
    store_idstore: number | null
  }

  export type UsersMaxAggregateOutputType = {
    idusers: number | null
    name: string | null
    last_name: string | null
    login: string | null
    password: string | null
    email: string | null
    store_idstore: number | null
  }

  export type UsersCountAggregateOutputType = {
    idusers: number
    name: number
    last_name: number
    login: number
    password: number
    email: number
    store_idstore: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    idusers?: true
    store_idstore?: true
  }

  export type UsersSumAggregateInputType = {
    idusers?: true
    store_idstore?: true
  }

  export type UsersMinAggregateInputType = {
    idusers?: true
    name?: true
    last_name?: true
    login?: true
    password?: true
    email?: true
    store_idstore?: true
  }

  export type UsersMaxAggregateInputType = {
    idusers?: true
    name?: true
    last_name?: true
    login?: true
    password?: true
    email?: true
    store_idstore?: true
  }

  export type UsersCountAggregateInputType = {
    idusers?: true
    name?: true
    last_name?: true
    login?: true
    password?: true
    email?: true
    store_idstore?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    idusers: number
    name: string | null
    last_name: string | null
    login: string | null
    password: string | null
    email: string | null
    store_idstore: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    idusers?: boolean
    name?: boolean
    last_name?: boolean
    login?: boolean
    password?: boolean
    email?: boolean
    store_idstore?: boolean
    store?: boolean | storeArgs
  }

  export type usersInclude = {
    store?: boolean | storeArgs
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users  & {
    [P in TrueKeys<S['include']>]:
        P extends 'store' ? storeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'store' ? storeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `idusers`
     * const usersWithIdusersOnly = await prisma.users.findMany({ select: { idusers: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    store<T extends storeArgs = {}>(args?: Subset<T, storeArgs>): CheckSelect<T, Prisma__storeClient<store | null >, Prisma__storeClient<storeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
  }



  /**
   * Model promotion
   */


  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    idpromotion: number | null
    price: number | null
    store_idstore: number | null
    product_idproduct: number | null
    product_store_idstore: number | null
  }

  export type PromotionSumAggregateOutputType = {
    idpromotion: number | null
    price: number | null
    store_idstore: number | null
    product_idproduct: number | null
    product_store_idstore: number | null
  }

  export type PromotionMinAggregateOutputType = {
    idpromotion: number | null
    name: string | null
    description: string | null
    active: string | null
    price: number | null
    store_idstore: number | null
    product_idproduct: number | null
    product_store_idstore: number | null
  }

  export type PromotionMaxAggregateOutputType = {
    idpromotion: number | null
    name: string | null
    description: string | null
    active: string | null
    price: number | null
    store_idstore: number | null
    product_idproduct: number | null
    product_store_idstore: number | null
  }

  export type PromotionCountAggregateOutputType = {
    idpromotion: number
    name: number
    description: number
    active: number
    price: number
    store_idstore: number
    product_idproduct: number
    product_store_idstore: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    idpromotion?: true
    price?: true
    store_idstore?: true
    product_idproduct?: true
    product_store_idstore?: true
  }

  export type PromotionSumAggregateInputType = {
    idpromotion?: true
    price?: true
    store_idstore?: true
    product_idproduct?: true
    product_store_idstore?: true
  }

  export type PromotionMinAggregateInputType = {
    idpromotion?: true
    name?: true
    description?: true
    active?: true
    price?: true
    store_idstore?: true
    product_idproduct?: true
    product_store_idstore?: true
  }

  export type PromotionMaxAggregateInputType = {
    idpromotion?: true
    name?: true
    description?: true
    active?: true
    price?: true
    store_idstore?: true
    product_idproduct?: true
    product_store_idstore?: true
  }

  export type PromotionCountAggregateInputType = {
    idpromotion?: true
    name?: true
    description?: true
    active?: true
    price?: true
    store_idstore?: true
    product_idproduct?: true
    product_store_idstore?: true
    _all?: true
  }

  export type PromotionAggregateArgs = {
    /**
     * Filter which promotion to aggregate.
     * 
    **/
    where?: promotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     * 
    **/
    orderBy?: Enumerable<promotionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: promotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs = {
    where?: promotionWhereInput
    orderBy?: Enumerable<promotionOrderByWithAggregationInput>
    by: Array<PromotionScalarFieldEnum>
    having?: promotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }


  export type PromotionGroupByOutputType = {
    idpromotion: number
    name: string | null
    description: string | null
    active: string | null
    price: number | null
    store_idstore: number
    product_idproduct: number
    product_store_idstore: number
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type promotionSelect = {
    idpromotion?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    price?: boolean
    store_idstore?: boolean
    product_idproduct?: boolean
    product_store_idstore?: boolean
    product?: boolean | productArgs
    store?: boolean | storeArgs
  }

  export type promotionInclude = {
    product?: boolean | productArgs
    store?: boolean | storeArgs
  }

  export type promotionGetPayload<
    S extends boolean | null | undefined | promotionArgs,
    U = keyof S
      > = S extends true
        ? promotion
    : S extends undefined
    ? never
    : S extends promotionArgs | promotionFindManyArgs
    ?'include' extends U
    ? promotion  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? productGetPayload<S['include'][P]> :
        P extends 'store' ? storeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? productGetPayload<S['select'][P]> :
        P extends 'store' ? storeGetPayload<S['select'][P]> :  P extends keyof promotion ? promotion[P] : never
  } 
    : promotion
  : promotion


  type promotionCountArgs = Merge<
    Omit<promotionFindManyArgs, 'select' | 'include'> & {
      select?: PromotionCountAggregateInputType | true
    }
  >

  export interface promotionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {promotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends promotionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, promotionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'promotion'> extends True ? CheckSelect<T, Prisma__promotionClient<promotion>, Prisma__promotionClient<promotionGetPayload<T>>> : CheckSelect<T, Prisma__promotionClient<promotion | null >, Prisma__promotionClient<promotionGetPayload<T> | null >>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends promotionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, promotionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'promotion'> extends True ? CheckSelect<T, Prisma__promotionClient<promotion>, Prisma__promotionClient<promotionGetPayload<T>>> : CheckSelect<T, Prisma__promotionClient<promotion | null >, Prisma__promotionClient<promotionGetPayload<T> | null >>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `idpromotion`
     * const promotionWithIdpromotionOnly = await prisma.promotion.findMany({ select: { idpromotion: true } })
     * 
    **/
    findMany<T extends promotionFindManyArgs>(
      args?: SelectSubset<T, promotionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<promotion>>, PrismaPromise<Array<promotionGetPayload<T>>>>

    /**
     * Create a Promotion.
     * @param {promotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
    **/
    create<T extends promotionCreateArgs>(
      args: SelectSubset<T, promotionCreateArgs>
    ): CheckSelect<T, Prisma__promotionClient<promotion>, Prisma__promotionClient<promotionGetPayload<T>>>

    /**
     * Create many Promotions.
     *     @param {promotionCreateManyArgs} args - Arguments to create many Promotions.
     *     @example
     *     // Create many Promotions
     *     const promotion = await prisma.promotion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends promotionCreateManyArgs>(
      args?: SelectSubset<T, promotionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Promotion.
     * @param {promotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
    **/
    delete<T extends promotionDeleteArgs>(
      args: SelectSubset<T, promotionDeleteArgs>
    ): CheckSelect<T, Prisma__promotionClient<promotion>, Prisma__promotionClient<promotionGetPayload<T>>>

    /**
     * Update one Promotion.
     * @param {promotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends promotionUpdateArgs>(
      args: SelectSubset<T, promotionUpdateArgs>
    ): CheckSelect<T, Prisma__promotionClient<promotion>, Prisma__promotionClient<promotionGetPayload<T>>>

    /**
     * Delete zero or more Promotions.
     * @param {promotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends promotionDeleteManyArgs>(
      args?: SelectSubset<T, promotionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends promotionUpdateManyArgs>(
      args: SelectSubset<T, promotionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {promotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
    **/
    upsert<T extends promotionUpsertArgs>(
      args: SelectSubset<T, promotionUpsertArgs>
    ): CheckSelect<T, Prisma__promotionClient<promotion>, Prisma__promotionClient<promotionGetPayload<T>>>

    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends promotionCountArgs>(
      args?: Subset<T, promotionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__promotionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends productArgs = {}>(args?: Subset<T, productArgs>): CheckSelect<T, Prisma__productClient<product | null >, Prisma__productClient<productGetPayload<T> | null >>;

    store<T extends storeArgs = {}>(args?: Subset<T, storeArgs>): CheckSelect<T, Prisma__storeClient<store | null >, Prisma__storeClient<storeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * promotion findUnique
   */
  export type promotionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
    /**
     * Throw an Error if a promotion can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which promotion to fetch.
     * 
    **/
    where: promotionWhereUniqueInput
  }


  /**
   * promotion findFirst
   */
  export type promotionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
    /**
     * Throw an Error if a promotion can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which promotion to fetch.
     * 
    **/
    where?: promotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     * 
    **/
    orderBy?: Enumerable<promotionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promotions.
     * 
    **/
    cursor?: promotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promotions.
     * 
    **/
    distinct?: Enumerable<PromotionScalarFieldEnum>
  }


  /**
   * promotion findMany
   */
  export type promotionFindManyArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
    /**
     * Filter, which promotions to fetch.
     * 
    **/
    where?: promotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     * 
    **/
    orderBy?: Enumerable<promotionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing promotions.
     * 
    **/
    cursor?: promotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PromotionScalarFieldEnum>
  }


  /**
   * promotion create
   */
  export type promotionCreateArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
    /**
     * The data needed to create a promotion.
     * 
    **/
    data: XOR<promotionCreateInput, promotionUncheckedCreateInput>
  }


  /**
   * promotion createMany
   */
  export type promotionCreateManyArgs = {
    /**
     * The data used to create many promotions.
     * 
    **/
    data: Enumerable<promotionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * promotion update
   */
  export type promotionUpdateArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
    /**
     * The data needed to update a promotion.
     * 
    **/
    data: XOR<promotionUpdateInput, promotionUncheckedUpdateInput>
    /**
     * Choose, which promotion to update.
     * 
    **/
    where: promotionWhereUniqueInput
  }


  /**
   * promotion updateMany
   */
  export type promotionUpdateManyArgs = {
    /**
     * The data used to update promotions.
     * 
    **/
    data: XOR<promotionUpdateManyMutationInput, promotionUncheckedUpdateManyInput>
    /**
     * Filter which promotions to update
     * 
    **/
    where?: promotionWhereInput
  }


  /**
   * promotion upsert
   */
  export type promotionUpsertArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
    /**
     * The filter to search for the promotion to update in case it exists.
     * 
    **/
    where: promotionWhereUniqueInput
    /**
     * In case the promotion found by the `where` argument doesn't exist, create a new promotion with this data.
     * 
    **/
    create: XOR<promotionCreateInput, promotionUncheckedCreateInput>
    /**
     * In case the promotion was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<promotionUpdateInput, promotionUncheckedUpdateInput>
  }


  /**
   * promotion delete
   */
  export type promotionDeleteArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
    /**
     * Filter which promotion to delete.
     * 
    **/
    where: promotionWhereUniqueInput
  }


  /**
   * promotion deleteMany
   */
  export type promotionDeleteManyArgs = {
    /**
     * Filter which promotions to delete
     * 
    **/
    where?: promotionWhereInput
  }


  /**
   * promotion without action
   */
  export type promotionArgs = {
    /**
     * Select specific fields to fetch from the promotion
     * 
    **/
    select?: promotionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: promotionInclude | null
  }



  /**
   * Model store
   */


  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    idstore: number | null
  }

  export type StoreSumAggregateOutputType = {
    idstore: number | null
  }

  export type StoreMinAggregateOutputType = {
    idstore: number | null
    name: string | null
    description: string | null
    open: Date | null
    closed: Date | null
    featured_image: string | null
    logo_image: string | null
    slug: string | null
    address: string | null
  }

  export type StoreMaxAggregateOutputType = {
    idstore: number | null
    name: string | null
    description: string | null
    open: Date | null
    closed: Date | null
    featured_image: string | null
    logo_image: string | null
    slug: string | null
    address: string | null
  }

  export type StoreCountAggregateOutputType = {
    idstore: number
    name: number
    description: number
    open: number
    closed: number
    featured_image: number
    logo_image: number
    slug: number
    address: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    idstore?: true
  }

  export type StoreSumAggregateInputType = {
    idstore?: true
  }

  export type StoreMinAggregateInputType = {
    idstore?: true
    name?: true
    description?: true
    open?: true
    closed?: true
    featured_image?: true
    logo_image?: true
    slug?: true
    address?: true
  }

  export type StoreMaxAggregateInputType = {
    idstore?: true
    name?: true
    description?: true
    open?: true
    closed?: true
    featured_image?: true
    logo_image?: true
    slug?: true
    address?: true
  }

  export type StoreCountAggregateInputType = {
    idstore?: true
    name?: true
    description?: true
    open?: true
    closed?: true
    featured_image?: true
    logo_image?: true
    slug?: true
    address?: true
    _all?: true
  }

  export type StoreAggregateArgs = {
    /**
     * Filter which store to aggregate.
     * 
    **/
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     * 
    **/
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs = {
    where?: storeWhereInput
    orderBy?: Enumerable<storeOrderByWithAggregationInput>
    by: Array<StoreScalarFieldEnum>
    having?: storeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }


  export type StoreGroupByOutputType = {
    idstore: number
    name: string | null
    description: string | null
    open: Date | null
    closed: Date | null
    featured_image: string | null
    logo_image: string | null
    slug: string | null
    address: string | null
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type storeSelect = {
    idstore?: boolean
    name?: boolean
    description?: boolean
    open?: boolean
    closed?: boolean
    featured_image?: boolean
    logo_image?: boolean
    slug?: boolean
    address?: boolean
    product?: boolean | productFindManyArgs
    productType?: boolean | productTypeFindManyArgs
    promotion?: boolean | promotionFindManyArgs
    users?: boolean | usersFindManyArgs
    _count?: boolean | StoreCountOutputTypeArgs
  }

  export type storeInclude = {
    product?: boolean | productFindManyArgs
    productType?: boolean | productTypeFindManyArgs
    promotion?: boolean | promotionFindManyArgs
    users?: boolean | usersFindManyArgs
    _count?: boolean | StoreCountOutputTypeArgs
  }

  export type storeGetPayload<
    S extends boolean | null | undefined | storeArgs,
    U = keyof S
      > = S extends true
        ? store
    : S extends undefined
    ? never
    : S extends storeArgs | storeFindManyArgs
    ?'include' extends U
    ? store  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? Array < productGetPayload<S['include'][P]>>  :
        P extends 'productType' ? Array < productTypeGetPayload<S['include'][P]>>  :
        P extends 'promotion' ? Array < promotionGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? StoreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? Array < productGetPayload<S['select'][P]>>  :
        P extends 'productType' ? Array < productTypeGetPayload<S['select'][P]>>  :
        P extends 'promotion' ? Array < promotionGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? StoreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof store ? store[P] : never
  } 
    : store
  : store


  type storeCountArgs = Merge<
    Omit<storeFindManyArgs, 'select' | 'include'> & {
      select?: StoreCountAggregateInputType | true
    }
  >

  export interface storeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends storeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, storeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'store'> extends True ? CheckSelect<T, Prisma__storeClient<store>, Prisma__storeClient<storeGetPayload<T>>> : CheckSelect<T, Prisma__storeClient<store | null >, Prisma__storeClient<storeGetPayload<T> | null >>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends storeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, storeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'store'> extends True ? CheckSelect<T, Prisma__storeClient<store>, Prisma__storeClient<storeGetPayload<T>>> : CheckSelect<T, Prisma__storeClient<store | null >, Prisma__storeClient<storeGetPayload<T> | null >>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `idstore`
     * const storeWithIdstoreOnly = await prisma.store.findMany({ select: { idstore: true } })
     * 
    **/
    findMany<T extends storeFindManyArgs>(
      args?: SelectSubset<T, storeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<store>>, PrismaPromise<Array<storeGetPayload<T>>>>

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends storeCreateArgs>(
      args: SelectSubset<T, storeCreateArgs>
    ): CheckSelect<T, Prisma__storeClient<store>, Prisma__storeClient<storeGetPayload<T>>>

    /**
     * Create many Stores.
     *     @param {storeCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends storeCreateManyArgs>(
      args?: SelectSubset<T, storeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends storeDeleteArgs>(
      args: SelectSubset<T, storeDeleteArgs>
    ): CheckSelect<T, Prisma__storeClient<store>, Prisma__storeClient<storeGetPayload<T>>>

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends storeUpdateArgs>(
      args: SelectSubset<T, storeUpdateArgs>
    ): CheckSelect<T, Prisma__storeClient<store>, Prisma__storeClient<storeGetPayload<T>>>

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends storeDeleteManyArgs>(
      args?: SelectSubset<T, storeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends storeUpdateManyArgs>(
      args: SelectSubset<T, storeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends storeUpsertArgs>(
      args: SelectSubset<T, storeUpsertArgs>
    ): CheckSelect<T, Prisma__storeClient<store>, Prisma__storeClient<storeGetPayload<T>>>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__storeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends productFindManyArgs = {}>(args?: Subset<T, productFindManyArgs>): CheckSelect<T, PrismaPromise<Array<product>>, PrismaPromise<Array<productGetPayload<T>>>>;

    productType<T extends productTypeFindManyArgs = {}>(args?: Subset<T, productTypeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<productType>>, PrismaPromise<Array<productTypeGetPayload<T>>>>;

    promotion<T extends promotionFindManyArgs = {}>(args?: Subset<T, promotionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<promotion>>, PrismaPromise<Array<promotionGetPayload<T>>>>;

    users<T extends usersFindManyArgs = {}>(args?: Subset<T, usersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * store findUnique
   */
  export type storeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
    /**
     * Throw an Error if a store can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which store to fetch.
     * 
    **/
    where: storeWhereUniqueInput
  }


  /**
   * store findFirst
   */
  export type storeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
    /**
     * Throw an Error if a store can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which store to fetch.
     * 
    **/
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     * 
    **/
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     * 
    **/
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     * 
    **/
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * store findMany
   */
  export type storeFindManyArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
    /**
     * Filter, which stores to fetch.
     * 
    **/
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     * 
    **/
    orderBy?: Enumerable<storeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     * 
    **/
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * store create
   */
  export type storeCreateArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
    /**
     * The data needed to create a store.
     * 
    **/
    data: XOR<storeCreateInput, storeUncheckedCreateInput>
  }


  /**
   * store createMany
   */
  export type storeCreateManyArgs = {
    /**
     * The data used to create many stores.
     * 
    **/
    data: Enumerable<storeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * store update
   */
  export type storeUpdateArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
    /**
     * The data needed to update a store.
     * 
    **/
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>
    /**
     * Choose, which store to update.
     * 
    **/
    where: storeWhereUniqueInput
  }


  /**
   * store updateMany
   */
  export type storeUpdateManyArgs = {
    /**
     * The data used to update stores.
     * 
    **/
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     * 
    **/
    where?: storeWhereInput
  }


  /**
   * store upsert
   */
  export type storeUpsertArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
    /**
     * The filter to search for the store to update in case it exists.
     * 
    **/
    where: storeWhereUniqueInput
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     * 
    **/
    create: XOR<storeCreateInput, storeUncheckedCreateInput>
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>
  }


  /**
   * store delete
   */
  export type storeDeleteArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
    /**
     * Filter which store to delete.
     * 
    **/
    where: storeWhereUniqueInput
  }


  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs = {
    /**
     * Filter which stores to delete
     * 
    **/
    where?: storeWhereInput
  }


  /**
   * store without action
   */
  export type storeArgs = {
    /**
     * Select specific fields to fetch from the store
     * 
    **/
    select?: storeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: storeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProductScalarFieldEnum: {
    idproduct: 'idproduct',
    description: 'description',
    image: 'image',
    name: 'name',
    price: 'price',
    store_idstore: 'store_idstore'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductTypeScalarFieldEnum: {
    idproduct_type: 'idproduct_type',
    name: 'name',
    store_idstore: 'store_idstore'
  };

  export type ProductTypeScalarFieldEnum = (typeof ProductTypeScalarFieldEnum)[keyof typeof ProductTypeScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    idusers: 'idusers',
    name: 'name',
    last_name: 'last_name',
    login: 'login',
    password: 'password',
    email: 'email',
    store_idstore: 'store_idstore'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    idpromotion: 'idpromotion',
    name: 'name',
    description: 'description',
    active: 'active',
    price: 'price',
    store_idstore: 'store_idstore',
    product_idproduct: 'product_idproduct',
    product_store_idstore: 'product_store_idstore'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    idstore: 'idstore',
    name: 'name',
    description: 'description',
    open: 'open',
    closed: 'closed',
    featured_image: 'featured_image',
    logo_image: 'logo_image',
    slug: 'slug',
    address: 'address'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type productWhereInput = {
    AND?: Enumerable<productWhereInput>
    OR?: Enumerable<productWhereInput>
    NOT?: Enumerable<productWhereInput>
    idproduct?: IntFilter | number
    description?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    price?: FloatNullableFilter | number | null
    store_idstore?: IntFilter | number
    store?: XOR<StoreRelationFilter, storeWhereInput>
    promotion?: PromotionListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    idproduct?: SortOrder
    description?: SortOrder
    image?: SortOrder
    name?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    store?: storeOrderByWithRelationInput
    promotion?: promotionOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = {
    idproduct_store_idstore?: productIdproductStore_idstoreCompoundUniqueInput
  }

  export type productOrderByWithAggregationInput = {
    idproduct?: SortOrder
    description?: SortOrder
    image?: SortOrder
    name?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productScalarWhereWithAggregatesInput>
    OR?: Enumerable<productScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productScalarWhereWithAggregatesInput>
    idproduct?: IntWithAggregatesFilter | number
    description?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    price?: FloatNullableWithAggregatesFilter | number | null
    store_idstore?: IntWithAggregatesFilter | number
  }

  export type productTypeWhereInput = {
    AND?: Enumerable<productTypeWhereInput>
    OR?: Enumerable<productTypeWhereInput>
    NOT?: Enumerable<productTypeWhereInput>
    idproduct_type?: IntFilter | number
    name?: StringNullableFilter | string | null
    store_idstore?: IntFilter | number
    store?: XOR<StoreRelationFilter, storeWhereInput>
  }

  export type productTypeOrderByWithRelationInput = {
    idproduct_type?: SortOrder
    name?: SortOrder
    store_idstore?: SortOrder
    store?: storeOrderByWithRelationInput
  }

  export type productTypeWhereUniqueInput = {
    idproduct_type_store_idstore?: productTypeIdproduct_typeStore_idstoreCompoundUniqueInput
  }

  export type productTypeOrderByWithAggregationInput = {
    idproduct_type?: SortOrder
    name?: SortOrder
    store_idstore?: SortOrder
    _count?: productTypeCountOrderByAggregateInput
    _avg?: productTypeAvgOrderByAggregateInput
    _max?: productTypeMaxOrderByAggregateInput
    _min?: productTypeMinOrderByAggregateInput
    _sum?: productTypeSumOrderByAggregateInput
  }

  export type productTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<productTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productTypeScalarWhereWithAggregatesInput>
    idproduct_type?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    store_idstore?: IntWithAggregatesFilter | number
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    idusers?: IntFilter | number
    name?: StringNullableFilter | string | null
    last_name?: StringNullableFilter | string | null
    login?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    store_idstore?: IntFilter | number
    store?: XOR<StoreRelationFilter, storeWhereInput>
  }

  export type usersOrderByWithRelationInput = {
    idusers?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    store_idstore?: SortOrder
    store?: storeOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = {
    idusers_store_idstore?: usersIdusersStore_idstoreCompoundUniqueInput
  }

  export type usersOrderByWithAggregationInput = {
    idusers?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    store_idstore?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    idusers?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    last_name?: StringNullableWithAggregatesFilter | string | null
    login?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    store_idstore?: IntWithAggregatesFilter | number
  }

  export type promotionWhereInput = {
    AND?: Enumerable<promotionWhereInput>
    OR?: Enumerable<promotionWhereInput>
    NOT?: Enumerable<promotionWhereInput>
    idpromotion?: IntFilter | number
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    active?: StringNullableFilter | string | null
    price?: FloatNullableFilter | number | null
    store_idstore?: IntFilter | number
    product_idproduct?: IntFilter | number
    product_store_idstore?: IntFilter | number
    product?: XOR<ProductRelationFilter, productWhereInput>
    store?: XOR<StoreRelationFilter, storeWhereInput>
  }

  export type promotionOrderByWithRelationInput = {
    idpromotion?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    product_idproduct?: SortOrder
    product_store_idstore?: SortOrder
    product?: productOrderByWithRelationInput
    store?: storeOrderByWithRelationInput
  }

  export type promotionWhereUniqueInput = {
    idpromotion_store_idstore_product_idproduct_product_store_idstore?: promotionIdpromotionStore_idstoreProduct_idproductProduct_store_idstoreCompoundUniqueInput
  }

  export type promotionOrderByWithAggregationInput = {
    idpromotion?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    product_idproduct?: SortOrder
    product_store_idstore?: SortOrder
    _count?: promotionCountOrderByAggregateInput
    _avg?: promotionAvgOrderByAggregateInput
    _max?: promotionMaxOrderByAggregateInput
    _min?: promotionMinOrderByAggregateInput
    _sum?: promotionSumOrderByAggregateInput
  }

  export type promotionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<promotionScalarWhereWithAggregatesInput>
    OR?: Enumerable<promotionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<promotionScalarWhereWithAggregatesInput>
    idpromotion?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    active?: StringNullableWithAggregatesFilter | string | null
    price?: FloatNullableWithAggregatesFilter | number | null
    store_idstore?: IntWithAggregatesFilter | number
    product_idproduct?: IntWithAggregatesFilter | number
    product_store_idstore?: IntWithAggregatesFilter | number
  }

  export type storeWhereInput = {
    AND?: Enumerable<storeWhereInput>
    OR?: Enumerable<storeWhereInput>
    NOT?: Enumerable<storeWhereInput>
    idstore?: IntFilter | number
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    open?: DateTimeNullableFilter | Date | string | null
    closed?: DateTimeNullableFilter | Date | string | null
    featured_image?: StringNullableFilter | string | null
    logo_image?: StringNullableFilter | string | null
    slug?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    product?: ProductListRelationFilter
    productType?: ProductTypeListRelationFilter
    promotion?: PromotionListRelationFilter
    users?: UsersListRelationFilter
  }

  export type storeOrderByWithRelationInput = {
    idstore?: SortOrder
    name?: SortOrder
    description?: SortOrder
    open?: SortOrder
    closed?: SortOrder
    featured_image?: SortOrder
    logo_image?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    product?: productOrderByRelationAggregateInput
    productType?: productTypeOrderByRelationAggregateInput
    promotion?: promotionOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type storeWhereUniqueInput = {
    idstore?: number
  }

  export type storeOrderByWithAggregationInput = {
    idstore?: SortOrder
    name?: SortOrder
    description?: SortOrder
    open?: SortOrder
    closed?: SortOrder
    featured_image?: SortOrder
    logo_image?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    _count?: storeCountOrderByAggregateInput
    _avg?: storeAvgOrderByAggregateInput
    _max?: storeMaxOrderByAggregateInput
    _min?: storeMinOrderByAggregateInput
    _sum?: storeSumOrderByAggregateInput
  }

  export type storeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<storeScalarWhereWithAggregatesInput>
    OR?: Enumerable<storeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<storeScalarWhereWithAggregatesInput>
    idstore?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    open?: DateTimeNullableWithAggregatesFilter | Date | string | null
    closed?: DateTimeNullableWithAggregatesFilter | Date | string | null
    featured_image?: StringNullableWithAggregatesFilter | string | null
    logo_image?: StringNullableWithAggregatesFilter | string | null
    slug?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
  }

  export type productCreateInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
    store: storeCreateNestedOneWithoutProductInput
    promotion?: promotionCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
    store_idstore: number
    promotion?: promotionUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: storeUpdateOneRequiredWithoutProductInput
    promotion?: promotionUpdateManyWithoutProductInput
  }

  export type productUncheckedUpdateInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store_idstore?: IntFieldUpdateOperationsInput | number
    promotion?: promotionUncheckedUpdateManyWithoutProductInput
  }

  export type productCreateManyInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
    store_idstore: number
  }

  export type productUpdateManyMutationInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productUncheckedUpdateManyInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type productTypeCreateInput = {
    idproduct_type?: number
    name?: string | null
    store: storeCreateNestedOneWithoutProductTypeInput
  }

  export type productTypeUncheckedCreateInput = {
    idproduct_type?: number
    name?: string | null
    store_idstore: number
  }

  export type productTypeUpdateInput = {
    idproduct_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutProductTypeInput
  }

  export type productTypeUncheckedUpdateInput = {
    idproduct_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type productTypeCreateManyInput = {
    idproduct_type?: number
    name?: string | null
    store_idstore: number
  }

  export type productTypeUpdateManyMutationInput = {
    idproduct_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productTypeUncheckedUpdateManyInput = {
    idproduct_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    idusers: number
    name?: string | null
    last_name?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    store: storeCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    idusers: number
    name?: string | null
    last_name?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    store_idstore: number
  }

  export type usersUpdateInput = {
    idusers?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store?: storeUpdateOneRequiredWithoutUsersInput
  }

  export type usersUncheckedUpdateInput = {
    idusers?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateManyInput = {
    idusers: number
    name?: string | null
    last_name?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
    store_idstore: number
  }

  export type usersUpdateManyMutationInput = {
    idusers?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    idusers?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type promotionCreateInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    product: productCreateNestedOneWithoutPromotionInput
    store: storeCreateNestedOneWithoutPromotionInput
  }

  export type promotionUncheckedCreateInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    store_idstore: number
    product_idproduct: number
    product_store_idstore: number
  }

  export type promotionUpdateInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: productUpdateOneRequiredWithoutPromotionInput
    store?: storeUpdateOneRequiredWithoutPromotionInput
  }

  export type promotionUncheckedUpdateInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store_idstore?: IntFieldUpdateOperationsInput | number
    product_idproduct?: IntFieldUpdateOperationsInput | number
    product_store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type promotionCreateManyInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    store_idstore: number
    product_idproduct: number
    product_store_idstore: number
  }

  export type promotionUpdateManyMutationInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type promotionUncheckedUpdateManyInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store_idstore?: IntFieldUpdateOperationsInput | number
    product_idproduct?: IntFieldUpdateOperationsInput | number
    product_store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type storeCreateInput = {
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productCreateNestedManyWithoutStoreInput
    productType?: productTypeCreateNestedManyWithoutStoreInput
    promotion?: promotionCreateNestedManyWithoutStoreInput
    users?: usersCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateInput = {
    idstore?: number
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productUncheckedCreateNestedManyWithoutStoreInput
    productType?: productTypeUncheckedCreateNestedManyWithoutStoreInput
    promotion?: promotionUncheckedCreateNestedManyWithoutStoreInput
    users?: usersUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUpdateManyWithoutStoreInput
    productType?: productTypeUpdateManyWithoutStoreInput
    promotion?: promotionUpdateManyWithoutStoreInput
    users?: usersUpdateManyWithoutStoreInput
  }

  export type storeUncheckedUpdateInput = {
    idstore?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUncheckedUpdateManyWithoutStoreInput
    productType?: productTypeUncheckedUpdateManyWithoutStoreInput
    promotion?: promotionUncheckedUpdateManyWithoutStoreInput
    users?: usersUncheckedUpdateManyWithoutStoreInput
  }

  export type storeCreateManyInput = {
    idstore?: number
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
  }

  export type storeUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storeUncheckedUpdateManyInput = {
    idstore?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type StoreRelationFilter = {
    is?: storeWhereInput
    isNot?: storeWhereInput
  }

  export type PromotionListRelationFilter = {
    every?: promotionWhereInput
    some?: promotionWhereInput
    none?: promotionWhereInput
  }

  export type promotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productIdproductStore_idstoreCompoundUniqueInput = {
    idproduct: number
    store_idstore: number
  }

  export type productCountOrderByAggregateInput = {
    idproduct?: SortOrder
    description?: SortOrder
    image?: SortOrder
    name?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    idproduct?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    idproduct?: SortOrder
    description?: SortOrder
    image?: SortOrder
    name?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    idproduct?: SortOrder
    description?: SortOrder
    image?: SortOrder
    name?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    idproduct?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type productTypeIdproduct_typeStore_idstoreCompoundUniqueInput = {
    idproduct_type: number
    store_idstore: number
  }

  export type productTypeCountOrderByAggregateInput = {
    idproduct_type?: SortOrder
    name?: SortOrder
    store_idstore?: SortOrder
  }

  export type productTypeAvgOrderByAggregateInput = {
    idproduct_type?: SortOrder
    store_idstore?: SortOrder
  }

  export type productTypeMaxOrderByAggregateInput = {
    idproduct_type?: SortOrder
    name?: SortOrder
    store_idstore?: SortOrder
  }

  export type productTypeMinOrderByAggregateInput = {
    idproduct_type?: SortOrder
    name?: SortOrder
    store_idstore?: SortOrder
  }

  export type productTypeSumOrderByAggregateInput = {
    idproduct_type?: SortOrder
    store_idstore?: SortOrder
  }

  export type usersIdusersStore_idstoreCompoundUniqueInput = {
    idusers: number
    store_idstore: number
  }

  export type usersCountOrderByAggregateInput = {
    idusers?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    store_idstore?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    idusers?: SortOrder
    store_idstore?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    idusers?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    store_idstore?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    idusers?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    store_idstore?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    idusers?: SortOrder
    store_idstore?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type promotionIdpromotionStore_idstoreProduct_idproductProduct_store_idstoreCompoundUniqueInput = {
    idpromotion: number
    store_idstore: number
    product_idproduct: number
    product_store_idstore: number
  }

  export type promotionCountOrderByAggregateInput = {
    idpromotion?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    product_idproduct?: SortOrder
    product_store_idstore?: SortOrder
  }

  export type promotionAvgOrderByAggregateInput = {
    idpromotion?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    product_idproduct?: SortOrder
    product_store_idstore?: SortOrder
  }

  export type promotionMaxOrderByAggregateInput = {
    idpromotion?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    product_idproduct?: SortOrder
    product_store_idstore?: SortOrder
  }

  export type promotionMinOrderByAggregateInput = {
    idpromotion?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    product_idproduct?: SortOrder
    product_store_idstore?: SortOrder
  }

  export type promotionSumOrderByAggregateInput = {
    idpromotion?: SortOrder
    price?: SortOrder
    store_idstore?: SortOrder
    product_idproduct?: SortOrder
    product_store_idstore?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type ProductTypeListRelationFilter = {
    every?: productTypeWhereInput
    some?: productTypeWhereInput
    none?: productTypeWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storeCountOrderByAggregateInput = {
    idstore?: SortOrder
    name?: SortOrder
    description?: SortOrder
    open?: SortOrder
    closed?: SortOrder
    featured_image?: SortOrder
    logo_image?: SortOrder
    slug?: SortOrder
    address?: SortOrder
  }

  export type storeAvgOrderByAggregateInput = {
    idstore?: SortOrder
  }

  export type storeMaxOrderByAggregateInput = {
    idstore?: SortOrder
    name?: SortOrder
    description?: SortOrder
    open?: SortOrder
    closed?: SortOrder
    featured_image?: SortOrder
    logo_image?: SortOrder
    slug?: SortOrder
    address?: SortOrder
  }

  export type storeMinOrderByAggregateInput = {
    idstore?: SortOrder
    name?: SortOrder
    description?: SortOrder
    open?: SortOrder
    closed?: SortOrder
    featured_image?: SortOrder
    logo_image?: SortOrder
    slug?: SortOrder
    address?: SortOrder
  }

  export type storeSumOrderByAggregateInput = {
    idstore?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type storeCreateNestedOneWithoutProductInput = {
    create?: XOR<storeCreateWithoutProductInput, storeUncheckedCreateWithoutProductInput>
    connectOrCreate?: storeCreateOrConnectWithoutProductInput
    connect?: storeWhereUniqueInput
  }

  export type promotionCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<promotionCreateWithoutProductInput>, Enumerable<promotionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutProductInput>
    createMany?: promotionCreateManyProductInputEnvelope
    connect?: Enumerable<promotionWhereUniqueInput>
  }

  export type promotionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<promotionCreateWithoutProductInput>, Enumerable<promotionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutProductInput>
    createMany?: promotionCreateManyProductInputEnvelope
    connect?: Enumerable<promotionWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type storeUpdateOneRequiredWithoutProductInput = {
    create?: XOR<storeCreateWithoutProductInput, storeUncheckedCreateWithoutProductInput>
    connectOrCreate?: storeCreateOrConnectWithoutProductInput
    upsert?: storeUpsertWithoutProductInput
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutProductInput, storeUncheckedUpdateWithoutProductInput>
  }

  export type promotionUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<promotionCreateWithoutProductInput>, Enumerable<promotionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<promotionUpsertWithWhereUniqueWithoutProductInput>
    createMany?: promotionCreateManyProductInputEnvelope
    set?: Enumerable<promotionWhereUniqueInput>
    disconnect?: Enumerable<promotionWhereUniqueInput>
    delete?: Enumerable<promotionWhereUniqueInput>
    connect?: Enumerable<promotionWhereUniqueInput>
    update?: Enumerable<promotionUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<promotionUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<promotionScalarWhereInput>
  }

  export type promotionUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<promotionCreateWithoutProductInput>, Enumerable<promotionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<promotionUpsertWithWhereUniqueWithoutProductInput>
    createMany?: promotionCreateManyProductInputEnvelope
    set?: Enumerable<promotionWhereUniqueInput>
    disconnect?: Enumerable<promotionWhereUniqueInput>
    delete?: Enumerable<promotionWhereUniqueInput>
    connect?: Enumerable<promotionWhereUniqueInput>
    update?: Enumerable<promotionUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<promotionUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<promotionScalarWhereInput>
  }

  export type storeCreateNestedOneWithoutProductTypeInput = {
    create?: XOR<storeCreateWithoutProductTypeInput, storeUncheckedCreateWithoutProductTypeInput>
    connectOrCreate?: storeCreateOrConnectWithoutProductTypeInput
    connect?: storeWhereUniqueInput
  }

  export type storeUpdateOneRequiredWithoutProductTypeInput = {
    create?: XOR<storeCreateWithoutProductTypeInput, storeUncheckedCreateWithoutProductTypeInput>
    connectOrCreate?: storeCreateOrConnectWithoutProductTypeInput
    upsert?: storeUpsertWithoutProductTypeInput
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutProductTypeInput, storeUncheckedUpdateWithoutProductTypeInput>
  }

  export type storeCreateNestedOneWithoutUsersInput = {
    create?: XOR<storeCreateWithoutUsersInput, storeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: storeCreateOrConnectWithoutUsersInput
    connect?: storeWhereUniqueInput
  }

  export type storeUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<storeCreateWithoutUsersInput, storeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: storeCreateOrConnectWithoutUsersInput
    upsert?: storeUpsertWithoutUsersInput
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutUsersInput, storeUncheckedUpdateWithoutUsersInput>
  }

  export type productCreateNestedOneWithoutPromotionInput = {
    create?: XOR<productCreateWithoutPromotionInput, productUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: productCreateOrConnectWithoutPromotionInput
    connect?: productWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutPromotionInput = {
    create?: XOR<storeCreateWithoutPromotionInput, storeUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: storeCreateOrConnectWithoutPromotionInput
    connect?: storeWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutPromotionInput = {
    create?: XOR<productCreateWithoutPromotionInput, productUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: productCreateOrConnectWithoutPromotionInput
    upsert?: productUpsertWithoutPromotionInput
    connect?: productWhereUniqueInput
    update?: XOR<productUpdateWithoutPromotionInput, productUncheckedUpdateWithoutPromotionInput>
  }

  export type storeUpdateOneRequiredWithoutPromotionInput = {
    create?: XOR<storeCreateWithoutPromotionInput, storeUncheckedCreateWithoutPromotionInput>
    connectOrCreate?: storeCreateOrConnectWithoutPromotionInput
    upsert?: storeUpsertWithoutPromotionInput
    connect?: storeWhereUniqueInput
    update?: XOR<storeUpdateWithoutPromotionInput, storeUncheckedUpdateWithoutPromotionInput>
  }

  export type productCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<productCreateWithoutStoreInput>, Enumerable<productUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productCreateOrConnectWithoutStoreInput>
    createMany?: productCreateManyStoreInputEnvelope
    connect?: Enumerable<productWhereUniqueInput>
  }

  export type productTypeCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<productTypeCreateWithoutStoreInput>, Enumerable<productTypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productTypeCreateOrConnectWithoutStoreInput>
    createMany?: productTypeCreateManyStoreInputEnvelope
    connect?: Enumerable<productTypeWhereUniqueInput>
  }

  export type promotionCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<promotionCreateWithoutStoreInput>, Enumerable<promotionUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutStoreInput>
    createMany?: promotionCreateManyStoreInputEnvelope
    connect?: Enumerable<promotionWhereUniqueInput>
  }

  export type usersCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<usersCreateWithoutStoreInput>, Enumerable<usersUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutStoreInput>
    createMany?: usersCreateManyStoreInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type productUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<productCreateWithoutStoreInput>, Enumerable<productUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productCreateOrConnectWithoutStoreInput>
    createMany?: productCreateManyStoreInputEnvelope
    connect?: Enumerable<productWhereUniqueInput>
  }

  export type productTypeUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<productTypeCreateWithoutStoreInput>, Enumerable<productTypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productTypeCreateOrConnectWithoutStoreInput>
    createMany?: productTypeCreateManyStoreInputEnvelope
    connect?: Enumerable<productTypeWhereUniqueInput>
  }

  export type promotionUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<promotionCreateWithoutStoreInput>, Enumerable<promotionUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutStoreInput>
    createMany?: promotionCreateManyStoreInputEnvelope
    connect?: Enumerable<promotionWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<usersCreateWithoutStoreInput>, Enumerable<usersUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutStoreInput>
    createMany?: usersCreateManyStoreInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type productUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<productCreateWithoutStoreInput>, Enumerable<productUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<productUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: productCreateManyStoreInputEnvelope
    set?: Enumerable<productWhereUniqueInput>
    disconnect?: Enumerable<productWhereUniqueInput>
    delete?: Enumerable<productWhereUniqueInput>
    connect?: Enumerable<productWhereUniqueInput>
    update?: Enumerable<productUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<productUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<productScalarWhereInput>
  }

  export type productTypeUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<productTypeCreateWithoutStoreInput>, Enumerable<productTypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productTypeCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<productTypeUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: productTypeCreateManyStoreInputEnvelope
    set?: Enumerable<productTypeWhereUniqueInput>
    disconnect?: Enumerable<productTypeWhereUniqueInput>
    delete?: Enumerable<productTypeWhereUniqueInput>
    connect?: Enumerable<productTypeWhereUniqueInput>
    update?: Enumerable<productTypeUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<productTypeUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<productTypeScalarWhereInput>
  }

  export type promotionUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<promotionCreateWithoutStoreInput>, Enumerable<promotionUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<promotionUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: promotionCreateManyStoreInputEnvelope
    set?: Enumerable<promotionWhereUniqueInput>
    disconnect?: Enumerable<promotionWhereUniqueInput>
    delete?: Enumerable<promotionWhereUniqueInput>
    connect?: Enumerable<promotionWhereUniqueInput>
    update?: Enumerable<promotionUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<promotionUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<promotionScalarWhereInput>
  }

  export type usersUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<usersCreateWithoutStoreInput>, Enumerable<usersUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: usersCreateManyStoreInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type productUncheckedUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<productCreateWithoutStoreInput>, Enumerable<productUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<productUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: productCreateManyStoreInputEnvelope
    set?: Enumerable<productWhereUniqueInput>
    disconnect?: Enumerable<productWhereUniqueInput>
    delete?: Enumerable<productWhereUniqueInput>
    connect?: Enumerable<productWhereUniqueInput>
    update?: Enumerable<productUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<productUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<productScalarWhereInput>
  }

  export type productTypeUncheckedUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<productTypeCreateWithoutStoreInput>, Enumerable<productTypeUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<productTypeCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<productTypeUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: productTypeCreateManyStoreInputEnvelope
    set?: Enumerable<productTypeWhereUniqueInput>
    disconnect?: Enumerable<productTypeWhereUniqueInput>
    delete?: Enumerable<productTypeWhereUniqueInput>
    connect?: Enumerable<productTypeWhereUniqueInput>
    update?: Enumerable<productTypeUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<productTypeUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<productTypeScalarWhereInput>
  }

  export type promotionUncheckedUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<promotionCreateWithoutStoreInput>, Enumerable<promotionUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<promotionCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<promotionUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: promotionCreateManyStoreInputEnvelope
    set?: Enumerable<promotionWhereUniqueInput>
    disconnect?: Enumerable<promotionWhereUniqueInput>
    delete?: Enumerable<promotionWhereUniqueInput>
    connect?: Enumerable<promotionWhereUniqueInput>
    update?: Enumerable<promotionUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<promotionUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<promotionScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutStoreInput = {
    create?: XOR<Enumerable<usersCreateWithoutStoreInput>, Enumerable<usersUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: usersCreateManyStoreInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type storeCreateWithoutProductInput = {
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    productType?: productTypeCreateNestedManyWithoutStoreInput
    promotion?: promotionCreateNestedManyWithoutStoreInput
    users?: usersCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutProductInput = {
    idstore?: number
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    productType?: productTypeUncheckedCreateNestedManyWithoutStoreInput
    promotion?: promotionUncheckedCreateNestedManyWithoutStoreInput
    users?: usersUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutProductInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutProductInput, storeUncheckedCreateWithoutProductInput>
  }

  export type promotionCreateWithoutProductInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    store: storeCreateNestedOneWithoutPromotionInput
  }

  export type promotionUncheckedCreateWithoutProductInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    store_idstore: number
  }

  export type promotionCreateOrConnectWithoutProductInput = {
    where: promotionWhereUniqueInput
    create: XOR<promotionCreateWithoutProductInput, promotionUncheckedCreateWithoutProductInput>
  }

  export type promotionCreateManyProductInputEnvelope = {
    data: Enumerable<promotionCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type storeUpsertWithoutProductInput = {
    update: XOR<storeUpdateWithoutProductInput, storeUncheckedUpdateWithoutProductInput>
    create: XOR<storeCreateWithoutProductInput, storeUncheckedCreateWithoutProductInput>
  }

  export type storeUpdateWithoutProductInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: productTypeUpdateManyWithoutStoreInput
    promotion?: promotionUpdateManyWithoutStoreInput
    users?: usersUpdateManyWithoutStoreInput
  }

  export type storeUncheckedUpdateWithoutProductInput = {
    idstore?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: productTypeUncheckedUpdateManyWithoutStoreInput
    promotion?: promotionUncheckedUpdateManyWithoutStoreInput
    users?: usersUncheckedUpdateManyWithoutStoreInput
  }

  export type promotionUpsertWithWhereUniqueWithoutProductInput = {
    where: promotionWhereUniqueInput
    update: XOR<promotionUpdateWithoutProductInput, promotionUncheckedUpdateWithoutProductInput>
    create: XOR<promotionCreateWithoutProductInput, promotionUncheckedCreateWithoutProductInput>
  }

  export type promotionUpdateWithWhereUniqueWithoutProductInput = {
    where: promotionWhereUniqueInput
    data: XOR<promotionUpdateWithoutProductInput, promotionUncheckedUpdateWithoutProductInput>
  }

  export type promotionUpdateManyWithWhereWithoutProductInput = {
    where: promotionScalarWhereInput
    data: XOR<promotionUpdateManyMutationInput, promotionUncheckedUpdateManyWithoutPromotionInput>
  }

  export type promotionScalarWhereInput = {
    AND?: Enumerable<promotionScalarWhereInput>
    OR?: Enumerable<promotionScalarWhereInput>
    NOT?: Enumerable<promotionScalarWhereInput>
    idpromotion?: IntFilter | number
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    active?: StringNullableFilter | string | null
    price?: FloatNullableFilter | number | null
    store_idstore?: IntFilter | number
    product_idproduct?: IntFilter | number
    product_store_idstore?: IntFilter | number
  }

  export type storeCreateWithoutProductTypeInput = {
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productCreateNestedManyWithoutStoreInput
    promotion?: promotionCreateNestedManyWithoutStoreInput
    users?: usersCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutProductTypeInput = {
    idstore?: number
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productUncheckedCreateNestedManyWithoutStoreInput
    promotion?: promotionUncheckedCreateNestedManyWithoutStoreInput
    users?: usersUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutProductTypeInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutProductTypeInput, storeUncheckedCreateWithoutProductTypeInput>
  }

  export type storeUpsertWithoutProductTypeInput = {
    update: XOR<storeUpdateWithoutProductTypeInput, storeUncheckedUpdateWithoutProductTypeInput>
    create: XOR<storeCreateWithoutProductTypeInput, storeUncheckedCreateWithoutProductTypeInput>
  }

  export type storeUpdateWithoutProductTypeInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUpdateManyWithoutStoreInput
    promotion?: promotionUpdateManyWithoutStoreInput
    users?: usersUpdateManyWithoutStoreInput
  }

  export type storeUncheckedUpdateWithoutProductTypeInput = {
    idstore?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUncheckedUpdateManyWithoutStoreInput
    promotion?: promotionUncheckedUpdateManyWithoutStoreInput
    users?: usersUncheckedUpdateManyWithoutStoreInput
  }

  export type storeCreateWithoutUsersInput = {
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productCreateNestedManyWithoutStoreInput
    productType?: productTypeCreateNestedManyWithoutStoreInput
    promotion?: promotionCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutUsersInput = {
    idstore?: number
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productUncheckedCreateNestedManyWithoutStoreInput
    productType?: productTypeUncheckedCreateNestedManyWithoutStoreInput
    promotion?: promotionUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutUsersInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutUsersInput, storeUncheckedCreateWithoutUsersInput>
  }

  export type storeUpsertWithoutUsersInput = {
    update: XOR<storeUpdateWithoutUsersInput, storeUncheckedUpdateWithoutUsersInput>
    create: XOR<storeCreateWithoutUsersInput, storeUncheckedCreateWithoutUsersInput>
  }

  export type storeUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUpdateManyWithoutStoreInput
    productType?: productTypeUpdateManyWithoutStoreInput
    promotion?: promotionUpdateManyWithoutStoreInput
  }

  export type storeUncheckedUpdateWithoutUsersInput = {
    idstore?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUncheckedUpdateManyWithoutStoreInput
    productType?: productTypeUncheckedUpdateManyWithoutStoreInput
    promotion?: promotionUncheckedUpdateManyWithoutStoreInput
  }

  export type productCreateWithoutPromotionInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
    store: storeCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutPromotionInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
    store_idstore: number
  }

  export type productCreateOrConnectWithoutPromotionInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutPromotionInput, productUncheckedCreateWithoutPromotionInput>
  }

  export type storeCreateWithoutPromotionInput = {
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productCreateNestedManyWithoutStoreInput
    productType?: productTypeCreateNestedManyWithoutStoreInput
    users?: usersCreateNestedManyWithoutStoreInput
  }

  export type storeUncheckedCreateWithoutPromotionInput = {
    idstore?: number
    name?: string | null
    description?: string | null
    open?: Date | string | null
    closed?: Date | string | null
    featured_image?: string | null
    logo_image?: string | null
    slug?: string | null
    address?: string | null
    product?: productUncheckedCreateNestedManyWithoutStoreInput
    productType?: productTypeUncheckedCreateNestedManyWithoutStoreInput
    users?: usersUncheckedCreateNestedManyWithoutStoreInput
  }

  export type storeCreateOrConnectWithoutPromotionInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutPromotionInput, storeUncheckedCreateWithoutPromotionInput>
  }

  export type productUpsertWithoutPromotionInput = {
    update: XOR<productUpdateWithoutPromotionInput, productUncheckedUpdateWithoutPromotionInput>
    create: XOR<productCreateWithoutPromotionInput, productUncheckedCreateWithoutPromotionInput>
  }

  export type productUpdateWithoutPromotionInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: storeUpdateOneRequiredWithoutProductInput
  }

  export type productUncheckedUpdateWithoutPromotionInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type storeUpsertWithoutPromotionInput = {
    update: XOR<storeUpdateWithoutPromotionInput, storeUncheckedUpdateWithoutPromotionInput>
    create: XOR<storeCreateWithoutPromotionInput, storeUncheckedCreateWithoutPromotionInput>
  }

  export type storeUpdateWithoutPromotionInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUpdateManyWithoutStoreInput
    productType?: productTypeUpdateManyWithoutStoreInput
    users?: usersUpdateManyWithoutStoreInput
  }

  export type storeUncheckedUpdateWithoutPromotionInput = {
    idstore?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featured_image?: NullableStringFieldUpdateOperationsInput | string | null
    logo_image?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    product?: productUncheckedUpdateManyWithoutStoreInput
    productType?: productTypeUncheckedUpdateManyWithoutStoreInput
    users?: usersUncheckedUpdateManyWithoutStoreInput
  }

  export type productCreateWithoutStoreInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
    promotion?: promotionCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutStoreInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
    promotion?: promotionUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutStoreInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput>
  }

  export type productCreateManyStoreInputEnvelope = {
    data: Enumerable<productCreateManyStoreInput>
    skipDuplicates?: boolean
  }

  export type productTypeCreateWithoutStoreInput = {
    idproduct_type?: number
    name?: string | null
  }

  export type productTypeUncheckedCreateWithoutStoreInput = {
    idproduct_type?: number
    name?: string | null
  }

  export type productTypeCreateOrConnectWithoutStoreInput = {
    where: productTypeWhereUniqueInput
    create: XOR<productTypeCreateWithoutStoreInput, productTypeUncheckedCreateWithoutStoreInput>
  }

  export type productTypeCreateManyStoreInputEnvelope = {
    data: Enumerable<productTypeCreateManyStoreInput>
    skipDuplicates?: boolean
  }

  export type promotionCreateWithoutStoreInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    product: productCreateNestedOneWithoutPromotionInput
  }

  export type promotionUncheckedCreateWithoutStoreInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    product_idproduct: number
    product_store_idstore: number
  }

  export type promotionCreateOrConnectWithoutStoreInput = {
    where: promotionWhereUniqueInput
    create: XOR<promotionCreateWithoutStoreInput, promotionUncheckedCreateWithoutStoreInput>
  }

  export type promotionCreateManyStoreInputEnvelope = {
    data: Enumerable<promotionCreateManyStoreInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutStoreInput = {
    idusers: number
    name?: string | null
    last_name?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
  }

  export type usersUncheckedCreateWithoutStoreInput = {
    idusers: number
    name?: string | null
    last_name?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
  }

  export type usersCreateOrConnectWithoutStoreInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStoreInput, usersUncheckedCreateWithoutStoreInput>
  }

  export type usersCreateManyStoreInputEnvelope = {
    data: Enumerable<usersCreateManyStoreInput>
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutStoreInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutStoreInput, productUncheckedUpdateWithoutStoreInput>
    create: XOR<productCreateWithoutStoreInput, productUncheckedCreateWithoutStoreInput>
  }

  export type productUpdateWithWhereUniqueWithoutStoreInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutStoreInput, productUncheckedUpdateWithoutStoreInput>
  }

  export type productUpdateManyWithWhereWithoutStoreInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutProductInput>
  }

  export type productScalarWhereInput = {
    AND?: Enumerable<productScalarWhereInput>
    OR?: Enumerable<productScalarWhereInput>
    NOT?: Enumerable<productScalarWhereInput>
    idproduct?: IntFilter | number
    description?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    price?: FloatNullableFilter | number | null
    store_idstore?: IntFilter | number
  }

  export type productTypeUpsertWithWhereUniqueWithoutStoreInput = {
    where: productTypeWhereUniqueInput
    update: XOR<productTypeUpdateWithoutStoreInput, productTypeUncheckedUpdateWithoutStoreInput>
    create: XOR<productTypeCreateWithoutStoreInput, productTypeUncheckedCreateWithoutStoreInput>
  }

  export type productTypeUpdateWithWhereUniqueWithoutStoreInput = {
    where: productTypeWhereUniqueInput
    data: XOR<productTypeUpdateWithoutStoreInput, productTypeUncheckedUpdateWithoutStoreInput>
  }

  export type productTypeUpdateManyWithWhereWithoutStoreInput = {
    where: productTypeScalarWhereInput
    data: XOR<productTypeUpdateManyMutationInput, productTypeUncheckedUpdateManyWithoutProductTypeInput>
  }

  export type productTypeScalarWhereInput = {
    AND?: Enumerable<productTypeScalarWhereInput>
    OR?: Enumerable<productTypeScalarWhereInput>
    NOT?: Enumerable<productTypeScalarWhereInput>
    idproduct_type?: IntFilter | number
    name?: StringNullableFilter | string | null
    store_idstore?: IntFilter | number
  }

  export type promotionUpsertWithWhereUniqueWithoutStoreInput = {
    where: promotionWhereUniqueInput
    update: XOR<promotionUpdateWithoutStoreInput, promotionUncheckedUpdateWithoutStoreInput>
    create: XOR<promotionCreateWithoutStoreInput, promotionUncheckedCreateWithoutStoreInput>
  }

  export type promotionUpdateWithWhereUniqueWithoutStoreInput = {
    where: promotionWhereUniqueInput
    data: XOR<promotionUpdateWithoutStoreInput, promotionUncheckedUpdateWithoutStoreInput>
  }

  export type promotionUpdateManyWithWhereWithoutStoreInput = {
    where: promotionScalarWhereInput
    data: XOR<promotionUpdateManyMutationInput, promotionUncheckedUpdateManyWithoutPromotionInput>
  }

  export type usersUpsertWithWhereUniqueWithoutStoreInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutStoreInput, usersUncheckedUpdateWithoutStoreInput>
    create: XOR<usersCreateWithoutStoreInput, usersUncheckedCreateWithoutStoreInput>
  }

  export type usersUpdateWithWhereUniqueWithoutStoreInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutStoreInput, usersUncheckedUpdateWithoutStoreInput>
  }

  export type usersUpdateManyWithWhereWithoutStoreInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    idusers?: IntFilter | number
    name?: StringNullableFilter | string | null
    last_name?: StringNullableFilter | string | null
    login?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    store_idstore?: IntFilter | number
  }

  export type promotionCreateManyProductInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    store_idstore: number
  }

  export type promotionUpdateWithoutProductInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: storeUpdateOneRequiredWithoutPromotionInput
  }

  export type promotionUncheckedUpdateWithoutProductInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type promotionUncheckedUpdateManyWithoutPromotionInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type productCreateManyStoreInput = {
    idproduct?: number
    description?: string | null
    image?: string | null
    name?: string | null
    price?: number | null
  }

  export type productTypeCreateManyStoreInput = {
    idproduct_type?: number
    name?: string | null
  }

  export type promotionCreateManyStoreInput = {
    idpromotion?: number
    name?: string | null
    description?: string | null
    active?: string | null
    price?: number | null
    product_idproduct: number
    product_store_idstore: number
  }

  export type usersCreateManyStoreInput = {
    idusers: number
    name?: string | null
    last_name?: string | null
    login?: string | null
    password?: string | null
    email?: string | null
  }

  export type productUpdateWithoutStoreInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    promotion?: promotionUpdateManyWithoutProductInput
  }

  export type productUncheckedUpdateWithoutStoreInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    promotion?: promotionUncheckedUpdateManyWithoutProductInput
  }

  export type productUncheckedUpdateManyWithoutProductInput = {
    idproduct?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productTypeUpdateWithoutStoreInput = {
    idproduct_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productTypeUncheckedUpdateWithoutStoreInput = {
    idproduct_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productTypeUncheckedUpdateManyWithoutProductTypeInput = {
    idproduct_type?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type promotionUpdateWithoutStoreInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    product?: productUpdateOneRequiredWithoutPromotionInput
  }

  export type promotionUncheckedUpdateWithoutStoreInput = {
    idpromotion?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    product_idproduct?: IntFieldUpdateOperationsInput | number
    product_store_idstore?: IntFieldUpdateOperationsInput | number
  }

  export type usersUpdateWithoutStoreInput = {
    idusers?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutStoreInput = {
    idusers?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    idusers?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    login?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}