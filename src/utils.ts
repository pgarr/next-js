import { type CartItemFragment } from "@/gql/graphql";

export const getPageSize = () => {
	return Number(process.env.PRODUCTS_PER_PAGE) || 10;
};

export const formatMoney = (amount: number) => {
	return `${(amount / 100).toFixed(2)} zł`;
};

export const calculateTotal = (cart: CartItemFragment) => {
	return cart.items.reduce((acc, item) => {
		if (!item.product) {
			return acc;
		}
		return acc + item.product.price * item.quantity;
	}, 0);
};

export const formatRating = (rating: number) => {
	return rating.toFixed(2);
};
