import { type Route, type Metadata } from "next";
import { getProductsByCategory } from "@/api/products";
import { PaginationNavigation } from "@/components/ui/molecules/PaginationNavigation";
import { getPageSize } from "@/utils";

export async function generateMetadata({
	params,
}: {
	params: { categoryName: string };
}): Promise<Metadata> {
	return {
		title: `Products in ${params.categoryName}`,
		description: `List of products available in our store in ${params.categoryName} category`,
		keywords: ["products", "store", "shop", params.categoryName],
	};
}

export default async function CategoryLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { categoryName: string; pageNumber: string };
}>) {
	const productsCount = (await getProductsByCategory(params.categoryName)).length;
	const pages = Math.ceil(productsCount / getPageSize());

	return (
		<main className="min-h-screen p-24">
			<PaginationNavigation
				totalPages={pages}
				currentPage={Number.parseInt(params.pageNumber)}
				basePath={`/categories/${params.categoryName}` as Route}
			/>
			{children}
		</main>
	);
}
