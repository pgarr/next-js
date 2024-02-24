import { getProductsListCount, getProductsListPaginated } from "@/api/products";
import { PaginationNavigation } from "@/components/ui/molecules/PaginationNavigation";
import { ProductList } from "@/components/ui/organisms/ProductList";
import { getPageSize } from "@/utils";

export const metadata = {
	title: "Products",
	description: "List of products available in our store",
	keywords: ["products", "store", "shop"],
};

export async function generateStaticParams() {
	return Array.from({ length: 2 }).map((_, i) => ({ pageNumber: (i + 1).toString() }));
}

export default async function Products({ params }: { params: { pageNumber: string } }) {
	const pageSize = getPageSize();
	const productsCount = await getProductsListCount();
	const pages = Math.ceil(productsCount / getPageSize());

	const products = await getProductsListPaginated(
		params.pageNumber ? parseInt(params.pageNumber) : 1,
		pageSize,
	);

	return (
		<main className="min-h-screen p-24">
			<h1 className="text-4xl font-bold">Products</h1>
			<PaginationNavigation
				totalPages={pages}
				currentPage={Number.parseInt(params.pageNumber)}
				basePath="/products"
			/>
			<ProductList products={products} />
		</main>
	);
}
