import { getProduct } from "@/api/products";
import { ProductImage } from "@/components/ui/atoms/ProductImage";

export async function generateMetadata({ params }: { params: { productId: string } }) {
	const product = await getProduct(params.productId);

	return {
		title: product.name,
		description: product.description,
		keywords: [product.category, product.name, "product"],
	};
}

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
			<h1 className="my-3 text-4xl font-bold">{name}</h1>
			<span>{category}</span>
			<div className="flex flex-row gap-5">
				<ProductImage src={src} alt={alt} />
				<span className="text-xl font-bold">{price}$</span>
			</div>
			<article>{product.description}</article>
		</main>
	);
}
