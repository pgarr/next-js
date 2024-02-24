import { type Route, type Metadata } from "next";
import { ProductList } from "@/components/ui/organisms/ProductList";
import { PaginationNavigation } from "@/components/ui/molecules/PaginationNavigation";
import { getCategoryWithProducts } from "@/api/categories";

export async function generateMetadata({
	params,
}: {
	params: { categoryName: string };
}): Promise<Metadata> {
	const category = await getCategoryWithProducts(params.categoryName);
	const name = category?.name || params.categoryName;

	return {
		title: name,
		description: `List of products available in our store in ${name} category`,
		keywords: ["products", "store", "shop", name],
	};
}

export default async function CategoryProducts({
	params,
}: {
	params: { categoryName: string; pageNumber: string };
}) {
	const category = await getCategoryWithProducts(params.categoryName);
	const pages = 1;

	return (
		<main className="min-h-screen p-24">
			<PaginationNavigation
				totalPages={pages}
				currentPage={Number.parseInt(params.pageNumber)}
				basePath={`/categories/${params.categoryName}` as Route}
			/>
			{category && <ProductList products={category.products} />}
		</main>
	);
}
