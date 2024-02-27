import type { Metadata, Route } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/ui/molecules/NavigationBar";
import { NavigationHeader } from "@/components/ui/organisms/NavigationHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shop",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavigationHeader />
				<main className="min-h-screen p-24">{children}</main>
				<NavigationBar
					links={[{ href: "/static/regulamin" as Route, label: "Regulamin", exact: true }]}
					navLinkClassName="text-gray-600 hover:text-gray-300 text-xs"
					navLinkActiveClassName="underline"
				/>
			</body>
		</html>
	);
}
