import { executeGraphql } from "@/api/executeGraphql";
import { CollectionGetWithProductsDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument);
	return graphqlResponse.collections.data;
};

export const getCollectionWithProducts = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql(CollectionGetWithProductsDocument, {
		slug: collectionSlug,
	});
	return graphqlResponse.collection || null;
};
