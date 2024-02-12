import { getProduct } from "@/api/products";
import { ProductImage } from "@/components/ui/atoms/ProductImage";

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProduct(params.productId);
	const {
		name,
		category,
		price,
		image: { src, alt },
	} = product;

	return (
		<main className="min-h-screen p-24">
			<h1 className="text-4xl font-bold">{name}</h1>
			<span>{category}</span>
			<ProductImage src={src} alt={alt} />
			<span>{price}</span>
			<article>{product.description}</article>
		</main>
	);
}
