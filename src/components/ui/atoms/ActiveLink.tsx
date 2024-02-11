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
	exact,
}: {
	children: React.ReactNode;
	href: Route;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const currentPath = usePathname();
	const isActive = exact ? currentPath === href : currentPath.startsWith(href);

	return (
		<Link
			className={clsx(className, isActive && activeClassName)}
			href={href}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
