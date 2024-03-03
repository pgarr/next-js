import {
	ProductGetByIdDocument,
	type ProductSortBy,
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
	type SortDirection,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphql";

export const getProductsListPaginated = async (
	page: number,
	pageSize: number,
	orderBy?: ProductSortBy,
	order?: SortDirection,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take: pageSize,
			skip: pageSize * (page - 1),
			orderBy,
			order,
		},
	});
	return graphqlResponse.products || { data: [], meta: { total: 0 } };
};

export const getProduct = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
	});
	return graphqlResponse.product;
};

export const getProductsSuggested = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take: 4,
			skip: 0,
		},
	});
	return graphqlResponse.products.data || [];
};

export const getProductsBySearch = async (search: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListBySearchDocument,
		variables: { search },
	});
	return graphqlResponse.products.data || [];
};
