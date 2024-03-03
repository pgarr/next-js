"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const href = "/cart";

export const CartButton = ({ count }: { count: number }) => {
	const currentPath = usePathname();
	const isActive = currentPath === href;
	return (
		<div className="ml-auto h-full lg:ml-4">
			<Link
				className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
				href={href}
				aria-current={isActive ? "page" : undefined}
			>
				Cart
				<div className="w-4">
					<span className="ml-2 text-sm font-medium ">{count}</span>
					<span className="sr-only">items in cart, view bag</span>
				</div>
			</Link>
		</div>
	);
};
