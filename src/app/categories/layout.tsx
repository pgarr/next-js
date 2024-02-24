import { type Route } from "next";
import { NavigationBar } from "@/components/ui/molecules/NavigationBar";
import { getCategories } from "@/api/categories";

export default async function CategoriesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const categories = await getCategories();

	return (
		<>
			<NavigationBar
				links={categories.map((category) => ({
					href: `/categories/${category.slug}/1` as Route,
					label: category.name,
				}))}
				navLinkClassName="text-blue-600 hover:text-blue-300"
				navLinkActiveClassName="underline"
			/>
			{children}
		</>
	);
}
