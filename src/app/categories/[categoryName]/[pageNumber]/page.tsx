import { getProductsByCategory } from "@/api/products";
import { ProductList } from "@/components/ui/organisms/ProductList";

export default async function CategoryProducts({
	params,
}: {
	params: { categoryName: string; pageNumber: string };
}) {
	const products = await getProductsByCategory(params.categoryName);

	return <ProductList products={products} />;
}
