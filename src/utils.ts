export const getPageSize = () => {
	return Number(process.env.PRODUCTS_PER_PAGE) || 10;
};
