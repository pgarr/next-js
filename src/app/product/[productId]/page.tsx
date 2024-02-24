import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/api/products";
import { ProductImage } from "@/components/ui/atoms/ProductImage";
import { SuggestedProducts } from "@/components/ui/templates/SuggestedProducts";
import { Loading } from "@/components/ui/atoms/Loading";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProduct(params.productId);
	if (product) {
		return {
			title: product.name,
			description: product.description,
			keywords: [...product.categories.map((c) => c.name), product.name, "product"],
		};
	}
	return {};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProduct(params.productId);

	if (!product) {
		notFound();
	}

	const { name, categories, price, images } = product;

	return (
		<main className="min-h-screen p-24">
			<h1 className="mt-3 text-4xl font-bold">{name}</h1>
			<div className="mt-10 flex flex-row gap-5">
				{images[0] && <ProductImage src={images[0].url} alt={images[0].alt} />}
				<div className="flex flex-col gap-4 p-6">
					<span className="text-xl font-bold">{price}$</span>
					{categories[0] && <span>{categories[0].name}</span>}
					<article>{product.description}</article>
				</div>
			</div>
			<Loading>
				<SuggestedProducts />
			</Loading>
		</main>
	);
}
