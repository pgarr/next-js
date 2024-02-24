import { type Route } from "next";
import { NavigationBar } from "@/components/ui/molecules/NavigationBar";
import { getCollections } from "@/api/collections";

export default async function CollectionsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const collections = await getCollections();

	return (
		<>
			<NavigationBar
				links={collections.map((collection) => ({
					href: `/collections/${collection.slug}` as Route,
					label: collection.name,
				}))}
				navLinkClassName="text-blue-600 hover:text-blue-300"
				navLinkActiveClassName="underline"
			/>
			{children}
		</>
	);
}
