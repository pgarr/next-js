import type { Metadata, Route } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/ui/molecules/NavigationBar";
import { SearchBar } from "@/components/ui/molecules/SearchBar";
import { getCategories } from "@/api/categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shop",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const categories = await getCategories();

	return (
		<html lang="en">
			<body className={inter.className}>
				<NavigationBar
					links={[
						{ href: "/" as Route, label: "Home", exact: true },
						{ href: "/products" as Route, label: "All" },
						{ href: "/collections", label: "Collections" },
						...categories.map((category) => ({
							href: `/categories/${category.slug}/1` as Route,
							label: category.name,
						})),
					]}
					navLinkClassName="text-blue-600 hover:text-blue-300"
					navLinkActiveClassName="underline"
					navbarClassName="flex flex-row justify-between px-5 py-3 bg-gray-300 "
				>
					<SearchBar />
				</NavigationBar>
				{children}
				<NavigationBar
					links={[{ href: "/static/regulamin" as Route, label: "Regulamin", exact: true }]}
					navLinkClassName="text-gray-600 hover:text-gray-300 text-xs"
					navLinkActiveClassName="underline"
				/>
			</body>
		</html>
	);
}
