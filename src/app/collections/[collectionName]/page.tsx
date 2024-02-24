import { type Metadata } from "next";
import { getCollectionWithProducts } from "@/api/collections";
import { ProductList } from "@/components/ui/organisms/ProductList";

export async function generateMetadata({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> {
	const collection = await getCollectionWithProducts(params.collectionName);
	const name = collection?.name || params.collectionName;

	return {
		title: name,
		description: `List of products available in our store in ${name} category`,
		keywords: ["products", "store", "shop", name],
	};
}

export default async function CategoryProducts({ params }: { params: { collectionName: string } }) {
	const collection = await getCollectionWithProducts(params.collectionName);

	return (
		collection && (
			<main className="min-h-screen p-24">
				<h1 className="text-4xl font-bold">{collection.name}</h1>
				<article>{collection.description}</article>
				<ProductList products={collection.products} />
			</main>
		)
	);
}
