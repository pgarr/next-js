import Link from "next/link";
import clsx from "clsx";
import { getProductsListPaginated } from "@/api/products";
import { PaginationNavigation } from "@/components/ui/molecules/PaginationNavigation";
import { ProductList } from "@/components/ui/organisms/ProductList";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";
import { getPageSize } from "@/utils";

export const metadata = {
	title: "Products",
	description: "List of products available in our store",
	keywords: ["products", "store", "shop"],
};

export async function generateStaticParams() {
	return Array.from({ length: 2 }).map((_, i) => ({ pageNumber: (i + 1).toString() }));
}

export default async function Products({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { order?: string; orderBy?: string };
}) {
	const pageSize = getPageSize();
	const orderByValidated = searchParams.orderBy as ProductSortBy | undefined; //TODO
	const orderValidated = searchParams.order as SortDirection | undefined; //TODO

	const products = await getProductsListPaginated(
		params.pageNumber ? parseInt(params.pageNumber) : 1,
		pageSize,
		orderByValidated,
		orderValidated,
	);
	const pages = Math.ceil(products.meta.total / getPageSize());

	return (
		<div>
			<h1 className="text-4xl font-bold">Products</h1>
			<div className="flex flex-row gap-2">
				<p>Sort by price</p>
				<Link
					href="/products/1?orderBy=PRICE&order=ASC"
					data-testid="sort-by-price"
					className={clsx(orderByValidated === "PRICE" && orderValidated === "ASC" && "invisible")}
				>
					ASC
				</Link>
				<Link
					href="/products/1?orderBy=PRICE&order=DESC"
					data-testid="sort-by-price"
					className={clsx(orderByValidated === "PRICE" && orderValidated === "DESC" && "invisible")}
				>
					DESC
				</Link>
			</div>
			<PaginationNavigation
				totalPages={pages}
				currentPage={Number.parseInt(params.pageNumber)}
				basePath="/products"
				searchParams={searchParams}
			/>
			<ProductList products={products.data} />
		</div>
	);
}
