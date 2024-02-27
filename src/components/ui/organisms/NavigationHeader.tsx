import { type Route } from "next";
import { cookies } from "next/headers";
import { getCategories } from "@/api/categories";
import { SearchBar } from "@/components/ui/molecules/SearchBar";
import { ActiveLink } from "@/components/ui/atoms/ActiveLink";
import { CartButton } from "@/components/ui/atoms/CartButton";
import { getCart } from "@/api/cart";

export const NavigationHeader = async () => {
	const categories = await getCategories();
	const links: { href: Route; label: string; exact?: boolean }[] = [
		{ href: "/", label: "Home", exact: true },
		{ href: "/products", label: "All" },
		...categories.map((category) => ({
			href: `/categories/${category.slug}/1` as Route,
			label: category.name,
		})),
	];

	const cartId = cookies().get("cartId")?.value;
	const cart = cartId ? await getCart(cartId) : null;
	const count = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
				<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
					<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
						<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
							{links.map((link) => (
								<li key={link.href} className="first:pl-4 last:pr-4 lg:px-0">
									<ActiveLink
										exact={link.exact}
										href={link.href}
										activeClassName="border-blue-500"
										className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
										inactiveClassName="border-transparent"
									>
										{link.label}
									</ActiveLink>
								</li>
							))}
						</ul>
					</nav>
					<div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">
						<SearchBar />
						<CartButton count={count} />
					</div>
				</div>
			</div>
		</header>
	);
};
