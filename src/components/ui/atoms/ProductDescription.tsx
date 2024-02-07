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
		<div className="flex flex-row justify-between p-5">
			<div>
				<h2 className="mb-2 font-bold">{name}</h2>
				<p className="text-sm text-gray-600">{category}</p>
			</div>
			<p className="mt-2 text-xl">{price} $</p>
		</div>
	);
};
