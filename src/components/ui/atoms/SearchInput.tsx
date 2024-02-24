"use client";

import { useRouter } from "next/navigation";

export const SearchInput = () => {
	const router = useRouter();

	return (
		<form
			action={(formData) => {
				router.push(`/search?query=${String(formData.get("search"))}`);
			}}
		>
			<input
				name="search"
				className="rounded-md border-2 border-gray-300 p-2"
				type="search"
				placeholder="Search"
			/>
		</form>
	);
};
