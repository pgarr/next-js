import { getProductsSuggested } from "@/api/products";
import { ProductList } from "@/components/ui/organisms/ProductList";

export const SuggestedProducts = async () => {
	const suggestedProducts = await getProductsSuggested();

	return (
		<section className="mt-16" data-testid="related-products">
			<h3 className="text-2xl font-bold">Suggested products</h3>
			<ProductList products={suggestedProducts} />
		</section>
	);
};
