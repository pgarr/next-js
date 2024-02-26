import { ProductItem } from "@/components/ui/molecules/ProductItem";
import { type ProductItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: ProductItemFragment[] }) => {
	return (
		<ul
			className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
