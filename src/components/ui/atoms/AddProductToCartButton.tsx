"use client";

import { useFormStatus } from "react-dom";

export const AddProductToCartButton = () => {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			className="w-full rounded-md border bg-slate-600 px-8 py-3 text-white transition duration-300 ease-in-out hover:bg-slate-800"
		>
			Add to cart
		</button>
	);
};
