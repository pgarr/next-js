import {
	ProductGetByIdDocument,
	ProductsGetByCategoryDocument,
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphql";

export const getProductsListCount = async (): Promise<number> => {
	return 14;
};

export const getProductsListPaginated = async (page: number, pageSize: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		take: pageSize,
		skip: pageSize * (page - 1),
	});
	return graphqlResponse.products.data || [];
};

export const getProduct = async (id: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });
	return graphqlResponse.product;
};

export const getProductsByCategory = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategoryDocument, {
		slug: categorySlug,
	});
	return graphqlResponse.category?.products || [];
};

export const getProductsSuggested = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		take: 4,
		skip: 0,
	});
	return graphqlResponse.products.data || [];
};

export const getProductsBySearch = async (search: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetListBySearchDocument, { search });
	return graphqlResponse.products.data || [];
};
