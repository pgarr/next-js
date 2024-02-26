export const ProductDescription = ({
	name,
	price,
	category,
}: {
	name: string;
	price: number;
	category: string;
}) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h2 className="text-sm font-semibold text-slate-700">{name}</h2>
				<p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">
					{price} zł
				</p>
			</div>
			<div className="mt-1 flex flex-row justify-between">
				<p className="text-sm text-slate-500">{category}</p>
			</div>
		</div>
	);
};
