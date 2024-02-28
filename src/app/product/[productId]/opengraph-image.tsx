import { ImageResponse } from "next/og";
import { getProduct } from "@/api/products";

export const runtime = "edge";

export const alt = "Product";
export const size = {
	width: 600,
	height: 300,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { productId: string } }) {
	const product = await getProduct(params.productId);

	if (!product) {
		return null;
	}

	return new ImageResponse(
		(
			<div tw="flex">
				<div tw="flex py-6">
					{/* eslint-disable-next-line @next/next/no-img-element  */}
					<img
						src={product.images[0].url}
						alt={product.images[0].alt}
						width={100}
						height={100}
						tw="h-24 w-24 rounded-lg"
					/>
					<div tw="ml-4 flex flex-1 flex-col">
						<div tw="flex justify-between text-base font-medium text-slate-900">
							<h3>{product?.name}</h3>
						</div>
						<p tw="mt-1 text-sm text-slate-500">{product.categories[0].name}</p>
					</div>
				</div>
				<p>{product?.description}</p>
			</div>
		),
	);
}
