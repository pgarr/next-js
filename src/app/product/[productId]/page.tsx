import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/api/products";
import { ProductImage } from "@/components/ui/atoms/ProductImage";
import { SuggestedProducts } from "@/components/ui/templates/SuggestedProducts";
import { Loading } from "@/components/ui/atoms/Loading";
import { AddProductToCartButton } from "@/components/ui/atoms/AddProductToCartButton";
import { addProductToCartAction } from "@/api/actions";
import { formatMoney, formatRating } from "@/utils";
import { ReviewsWidget } from "@/components/ui/atoms/ReviewsWidget";

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
	const quantity = 1;

	const product = await getProduct(params.productId);

	if (!product) {
		notFound();
	}

	const { name, categories, price, images, rating, reviews } = product;

	return (
		<div>
			<h1 className="mt-3 text-4xl font-bold">{name}</h1>
			<div className="mt-10 flex flex-row gap-5">
				<div>
					{images[0] && (
						<ProductImage src={images[0].url} alt={images[0].alt} width={500} height={500} />
					)}
				</div>
				<div className="flex w-1/2 flex-col gap-4 p-6">
					<div className="flex flex-row gap-8">
						<span className="text-xl font-bold">{formatMoney(price)}</span>
						{rating && <span className="text-xl">{formatRating(rating)}</span>}
					</div>
					{categories[0] && <span>{categories[0].name}</span>}
					<article>{product.description}</article>
					<form
						action={async () => {
							"use server";
							if (!product) return;
							await addProductToCartAction(product.id, quantity);
						}}
					>
						<AddProductToCartButton />
					</form>
				</div>
			</div>
			<Loading>
				<SuggestedProducts />
			</Loading>
			<ReviewsWidget reviews={reviews} productId={product.id} />
		</div>
	);
}
