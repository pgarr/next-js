import { getProductsBySearch } from "@/api/products";
import { ProductList } from "@/components/ui/organisms/ProductList";

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
	const products = await getProductsBySearch(searchParams.query || "");

	return (
		<main className="min-h-screen p-24">
			<h1 className="text-4xl font-bold">Search results:</h1>
			<ProductList products={products} />
		</main>
	);
}
