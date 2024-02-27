import { removeProductFromCartAction } from "@/api/actions";

export const RemoveProductFromCartButton = ({
	cartId,
	productId,
}: {
	cartId: string;
	productId: string;
}) => {
	return (
		<button
			type="submit"
			formAction={async () => {
				"use server";
				await removeProductFromCartAction(cartId, productId);
			}}
			className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
		>
			<span>Remove</span>
		</button>
	);
};
