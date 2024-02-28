import Link from "next/link";
import { ProductDescription } from "@/components/ui/atoms/ProductDescription";
import { ProductImage } from "@/components/ui/atoms/ProductImage";
import { type ProductItemFragment } from "@/gql/graphql";

export const ProductItem = ({ product }: { product: ProductItemFragment }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				{product.images[0] && (
					<ProductImage src={product.images[0].url} alt={product.images[0].url} />
				)}
				<ProductDescription
					name={product.name}
					category={product.categories[0]?.name || ""}
					price={product.price}
					rating={product.rating || 0}
				/>
			</Link>
		</li>
	);
};
