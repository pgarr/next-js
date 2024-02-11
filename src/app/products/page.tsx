import { type Product } from "@/types";
import { ProductList } from "@/components/ui/organisms/ProductList";

export default function Products() {
	const products: Product[] = [
		{
			image: { src: "donut_love.jpg", alt: "Donut walentynkowy" },
			description: { name: "Donut walentynkowy", category: "Pączki", price: 2.5 },
		},
		{
			image: { src: "donut_posypka.jpg", alt: "Donut z posypką" },
			description: { name: "Donut z posypką", category: "Pączki", price: 2.0 },
		},
		{
			image: { src: "donut_posypka2.jpg", alt: "Donut z posypką" },
			description: { name: "Donut z posypką", category: "Pączki", price: 2.0 },
		},
		{
			image: { src: "donut.jpg", alt: "Donut" },
			description: { name: "Donut", category: "Pączki", price: 1.8 },
		},
	];
	return (
		<main className="min-h-screen p-24">
			<h1 className="text-4xl font-bold">Products</h1>
			<ProductList products={products} />
		</main>
	);
}
