import { getProductsList } from "@/api/products";
import { ProductList } from "@/components/ui/organisms/ProductList";

export const metadata = {
	title: "Products",
	description: "List of products available in our store",
	keywords: ["products", "store", "shop"],
};

export default async function Products() {
	const products = await getProductsList();

	return (
		<main className="min-h-screen p-24">
			<h1 className="text-4xl font-bold">Products</h1>
			<ProductList products={products} />
		</main>
	);
}
