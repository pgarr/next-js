"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const router = useRouter();

	const redirectToSearch = () => {
		router.push(`/search?query=${search}`);
	};

	return (
		<form
			action={() => {
				redirectToSearch();
			}}
		>
			<input
				name="search"
				className="rounded-md border-2 border-gray-300 p-2"
				type="search"
				placeholder="Search"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					if (timeoutRef.current) {
						clearTimeout(timeoutRef.current);
					}
					if (e.target.value.length > 2) {
						timeoutRef.current = setTimeout(redirectToSearch, 500);
					}
				}}
			/>
		</form>
	);
};
