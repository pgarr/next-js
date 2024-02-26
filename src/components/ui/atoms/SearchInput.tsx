"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const router = useRouter();

	const redirectToSearch = (val: string) => {
		router.push(`/search?query=${val}`);
	};

	return (
		<form
			action={() => {
				redirectToSearch(search);
			}}
		>
			<label className="sr-only">Szukaj</label>
			<input
				name="search"
				className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
				type="search"
				placeholder="Search"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					if (timeoutRef.current) {
						clearTimeout(timeoutRef.current);
					}
					if (e.target.value.length > 2) {
						timeoutRef.current = setTimeout(redirectToSearch, 500, e.target.value);
					}
				}}
			/>
		</form>
	);
};
