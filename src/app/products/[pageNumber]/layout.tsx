import { getProductsListCount } from "@/api/products";
import { PaginationNavigation } from "@/components/ui/molecules/PaginationNavigation";

export const metadata = {
	title: "Products",
	description: "List of products available in our store",
	keywords: ["products", "store", "shop"],
};

export async function generateStaticParams() {
	const productsCount = await getProductsListCount();
	const pages = Math.ceil(productsCount / 20);
	return Array.from({ length: pages }).map((_, i) => ({ pageNumber: (i + 1).toString() }));
}

export default async function ProductsLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { pageNumber: string };
}>) {
	const productsCount = await getProductsListCount();
	const pages = Math.ceil(productsCount / 20);

	return (
		<main className="min-h-screen p-24">
			<h1 className="text-4xl font-bold">Products</h1>
			<PaginationNavigation
				totalPages={pages}
				currentPage={Number.parseInt(params.pageNumber)}
				basePath="/products"
			/>
			{children}
		</main>
	);
}
