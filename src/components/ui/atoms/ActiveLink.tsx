"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import clsx from "clsx";

export const ActiveLink = ({
	children,
	href,
	className,
	activeClassName,
	inactiveClassName,
	exact,
}: {
	children: React.ReactNode;
	href: Route;
	className?: string;
	activeClassName?: string;
	inactiveClassName?: string;
	exact?: boolean;
}) => {
	const currentPath = usePathname();
	const hrefWithoutQuery = href.split("?")[0];
	const isActive = exact
		? currentPath === hrefWithoutQuery
		: currentPath.startsWith(hrefWithoutQuery);

	return (
		<Link
			className={clsx(className, isActive ? activeClassName : inactiveClassName)}
			href={href}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
