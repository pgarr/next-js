export const getPageSize = () => {
	return Number(process.env.PRODUCTS_PER_PAGE) || 10;
};

export const formatMoney = (amount: number) => {
	return `${amount.toFixed(2)} zł`;
};
