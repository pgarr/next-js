/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartFindOrCreate(\n    id: $cartId\n    input: {items: {productId: $productId, quantity: $quantity}}\n  ) {\n    ...CartItem\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    ...CartItem\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($productId: String!, $quantity: Int!) {\n  cartFindOrCreate(input: {items: {productId: $productId, quantity: $quantity}}) {\n    ...CartItem\n  }\n}": types.CartCreateDocument,
    "fragment CartItem on Cart {\n  id\n  items {\n    quantity\n    product {\n      ...ProductItem\n    }\n  }\n}": types.CartItemFragmentDoc,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    ...CartItem\n  }\n}": types.CartRemoveItemDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoryItem\n    }\n  }\n}": types.CategoriesGetListDocument,
    "fragment CategoryItem on Category {\n  slug\n  id\n  name\n  description\n}": types.CategoryItemFragmentDoc,
    "query CategoryGetWithProducts($slug: String!) {\n  category(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductItem\n    }\n  }\n}": types.CategoryGetWithProductsDocument,
    "fragment CollectionItem on Collection {\n  slug\n  id\n  name\n  description\n}": types.CollectionItemFragmentDoc,
    "query CollectionGetWithProducts($slug: String!) {\n  collection(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductItem\n    }\n  }\n}": types.CollectionGetWithProductsDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      ...CollectionItem\n    }\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  price\n  description\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}": types.ProductItemFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductItem\n    }\n  }\n}": types.ProductsGetListBySearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartFindOrCreate(\n    id: $cartId\n    input: {items: {productId: $productId, quantity: $quantity}}\n  ) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($productId: String!, $quantity: Int!) {\n  cartFindOrCreate(input: {items: {productId: $productId, quantity: $quantity}}) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItem on Cart {\n  id\n  items {\n    quantity\n    product {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoryItem\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryItem on Category {\n  slug\n  id\n  name\n  description\n}"): typeof import('./graphql').CategoryItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetWithProducts($slug: String!) {\n  category(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetWithProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionItem on Collection {\n  slug\n  id\n  name\n  description\n}"): typeof import('./graphql').CollectionItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetWithProducts($slug: String!) {\n  collection(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetWithProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      ...CollectionItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  price\n  description\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
