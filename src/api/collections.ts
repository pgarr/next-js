import { executeGraphql } from "@/api/executeGraphql";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument);
	return graphqlResponse.collections.data;
};
