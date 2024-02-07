import { type Product } from "@/types";
import { ProductItem } from "@/components/ui/molecules/ProductItem";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="products-list">
			{products.map((product, index) => (
				<ProductItem key={index} {...product} />
			))}
		</ul>
	);
};
