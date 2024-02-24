import { getProductsListPaginated } from "@/api/products";
import { Loading } from "@/components/ui/atoms/Loading";
import { ProductList } from "@/components/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProductsListPaginated(1);

	return (
		<main className="min-h-screen p-24">
			<h1 className="text-4xl font-bold">HOME</h1>
			<Loading>
				<ProductList products={products} />
			</Loading>
		</main>
	);
}
