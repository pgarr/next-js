import { ProductItem } from "@/components/ui/molecules/ProductItem";
import { type ProductItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: ProductItemFragment[] }) => {
	return (
		<ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="products-list">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
