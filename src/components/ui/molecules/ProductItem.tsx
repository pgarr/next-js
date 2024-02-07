import { type Product } from "@/types";
import { ProductDescription } from "@/components/ui/atoms/ProductDescription";
import { ProductImage } from "@/components/ui/atoms/ProductImage";

export const ProductItem = ({
	image: { src, alt },
	description: { name, category, price },
}: Product) => {
	return (
		<li className="w-fit cursor-pointer bg-gray-100">
			<ProductImage src={src} alt={alt} />
			<ProductDescription name={name} category={category} price={price} />
		</li>
	);
};
