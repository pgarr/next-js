"use client";
import { useOptimistic } from "react";
import { changeQuantityAction } from "@/api/actions";

export const ChangeQuantityWidget = ({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	return (
		<div className="flex">
			<button
				className="h-6 w-6 border"
				type="submit"
				disabled={quantity === 1}
				data-testid="decrement"
				formAction={async () => {
					const newQuantity = optimisticQuantity - 1;
					setOptimisticQuantity(newQuantity);
					await changeQuantityAction(cartId, productId, newQuantity);
				}}
			>
				-
			</button>
			<span className="w-8 text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				data-testid="increment"
				formAction={async () => {
					const newQuantity = optimisticQuantity + 1;
					setOptimisticQuantity(newQuantity);
					await changeQuantityAction(cartId, productId, newQuantity);
				}}
			>
				+
			</button>
		</div>
	);
};
