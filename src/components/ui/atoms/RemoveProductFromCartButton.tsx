"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeProductFromCartAction } from "@/api/actions";

export const RemoveProductFromCartButton = ({
	cartId,
	productId,
}: {
	cartId: string;
	productId: string;
}) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			type="submit"
			onClick={() => {
				startTransition(async () => {
					await removeProductFromCartAction(cartId, productId);
					router.refresh();
				});
			}}
			className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
		>
			<span>Remove</span>
		</button>
	);
};
