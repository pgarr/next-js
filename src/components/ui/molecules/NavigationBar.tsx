import { type ReactNode } from "react";
import type { Route } from "next";
import { ActiveLink } from "@/components/ui/atoms/ActiveLink";

export const NavigationBar = ({
	links,
	navLinkClassName,
	navLinkActiveClassName,
	children,
	navbarClassName,
}: {
	links: { href: Route; label: string; exact?: boolean }[];
	navLinkClassName?: string;
	navLinkActiveClassName?: string;
	children?: ReactNode;
	navbarClassName?: string;
}) => {
	return (
		<nav className={navbarClassName}>
			<ul className="mt-2 flex justify-center gap-5 text-xl">
				{links.map((link) => (
					<li key={link.href}>
						<ActiveLink
							exact={link.exact}
							href={link.href}
							activeClassName={navLinkActiveClassName}
							className={navLinkClassName}
						>
							{link.label}
						</ActiveLink>
					</li>
				))}
			</ul>
			{children}
		</nav>
	);
};
