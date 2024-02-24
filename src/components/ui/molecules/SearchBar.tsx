import { Suspense } from "react";
import { SearchFallback } from "@/components/ui/atoms/SearchFallback";
import { SearchInput } from "@/components/ui/atoms/SearchInput";

export const SearchBar = () => {
	return (
		<Suspense fallback={<SearchFallback />}>
			<SearchInput />
		</Suspense>
	);
};
