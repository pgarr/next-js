import { executeGraphql } from "@/api/executeGraphql";
import { CollectionGetWithProductsDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsGetListDocument });
	return graphqlResponse.collections.data;
};

export const getCollectionWithProducts = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetWithProductsDocument,
		variables: {
			slug: collectionSlug,
		},
	});
	return graphqlResponse.collection || null;
};
