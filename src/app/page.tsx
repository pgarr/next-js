import { type Route } from "next";
import { getCollections } from "@/api/collections";
import { getProductsListPaginated } from "@/api/products";
import { Loading } from "@/components/ui/atoms/Loading";
import { NavigationBar } from "@/components/ui/molecules/NavigationBar";
import { ProductList } from "@/components/ui/organisms/ProductList";

export default async function Home() {
	const collections = await getCollections();
	const products = await getProductsListPaginated(1, 3);

	return (
		<>
			<NavigationBar
				links={collections.map((collection) => ({
					href: `/collections/${collection.slug}` as Route,
					label: collection.name,
				}))}
				navLinkClassName="text-blue-600 hover:text-blue-300"
				navLinkActiveClassName="underline"
			/>
			<main className="min-h-screen p-24">
				<h1 className="text-4xl font-bold">HOME</h1>
				<Loading>
					<ProductList products={products} />
				</Loading>
			</main>
		</>
	);
}
