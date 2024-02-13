import { type Metadata } from "next";
import { getProduct } from "@/api/products";
import { ProductImage } from "@/components/ui/atoms/ProductImage";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
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
			<h1 className="mt-3 text-4xl font-bold">{name}</h1>
			<div className="mt-10 flex flex-row gap-5">
				<ProductImage src={src} alt={alt} />
				<div className="flex flex-col gap-4 p-6">
					<span className="text-xl font-bold">{price}$</span>
					<span>{category}</span>
					<article>{product.description}</article>
				</div>
			</div>
		</main>
	);
}
