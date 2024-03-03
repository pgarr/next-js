import { executeGraphql } from "@/api/executeGraphql";
import { CategoriesGetListDocument, CategoryGetWithProductsDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoriesGetListDocument });
	return graphqlResponse.categories.data;
};

export const getCategoryWithProducts = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CategoryGetWithProductsDocument,
		variables: {
			slug: categorySlug,
		},
	});
	return graphqlResponse.category || null;
};
