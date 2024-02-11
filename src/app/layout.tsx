import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/components/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

const navLinkProps = {
	className: "text-blue-600 hover:text-blue-300",
	activeClassName: "underline",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="mt-2 flex justify-center gap-5 text-xl">
						<li>
							<ActiveLink exact href="/" {...navLinkProps}>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products" {...navLinkProps}>
								Products
							</ActiveLink>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
