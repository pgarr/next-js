import { getProductsByCollection } from "@/api/products";
import { ProductList } from "@/components/ui/organisms/ProductList";

export default async function CategoryProducts({ params }: { params: { collectionName: string } }) {
	const products = await getProductsByCollection(params.collectionName);

	return <ProductList products={products} />;
}
