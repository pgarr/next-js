import { getProductsListPaginated } from "@/api/products";
import { ProductList } from "@/components/ui/organisms/ProductList";
import { getPageSize } from "@/utils";

export const metadata = {
	title: "Products",
	description: "List of products available in our store",
	keywords: ["products", "store", "shop"],
};

export default async function Products({ params }: { params: { pageNumber: string } }) {
	const pageSize = getPageSize();

	const products = await getProductsListPaginated(
		params.pageNumber ? parseInt(params.pageNumber) : 1,
		pageSize,
	);

	return <ProductList products={products} />;
}
