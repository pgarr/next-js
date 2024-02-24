import { type Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> {
	return {
		title: `Products in ${params.collectionName}`,
		description: `List of products available in our store in ${params.collectionName} category`,
		keywords: ["products", "store", "shop", params.collectionName],
	};
}

export default async function CollectionLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen p-24">{children}</main>;
}
