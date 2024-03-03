import { formatMoney, formatRating } from "@/utils";

export const ProductDescription = ({
	name,
	price,
	category,
	rating,
}: {
	name: string;
	price: number;
	category: string;
	rating: number;
}) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h2 className="text-sm font-semibold text-slate-700">{name}</h2>
				<p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">
					{formatMoney(price)}
				</p>
			</div>
			<div className="mt-1 flex flex-row justify-between">
				<p className="text-sm text-slate-500">{category}</p>
				<p className="text-sm text-slate-500">{formatRating(rating)}</p>
			</div>
		</div>
	);
};
