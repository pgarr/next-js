"use client";

import { type Route } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

const sortValues: {
	value: string;
	name: string;
	orderBy: ProductSortBy;
	order: SortDirection;
	testId?: string;
}[] = [
	{ value: "nameASC", name: "Name (a-z)", orderBy: "NAME", order: "ASC" },
	{ value: "nameDESC", name: "Name (z-a)", orderBy: "NAME", order: "DESC" },
	{
		value: "priceASC",
		name: "Price (Low to High)",
		orderBy: "PRICE",
		order: "ASC",
		testId: "sort-by-price",
	},
	{
		value: "priceDESC",
		name: "Price (High to Low)",
		orderBy: "PRICE",
		order: "DESC",
		testId: "sort-by-price",
	},
	{
		value: "ratingASC",
		name: "Rating (Low to High)",
		orderBy: "RATING",
		order: "ASC",
		testId: "sort-by-rating",
	},
	{
		value: "ratingDESC",
		name: "Rating (High to Low)",
		orderBy: "RATING",
		order: "DESC",
		testId: "sort-by-rating",
	},
];

const emptySortValue = "---SORT RESULTS---";

export const SortSelect = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const sortSelected =
		sortValues.find((sortValue) => {
			return (
				sortValue.orderBy === searchParams.get("orderBy") &&
				sortValue.order === searchParams.get("order")
			);
		})?.value || emptySortValue;

	return (
		<select
			data-testid="sort-select"
			className="rounded-md border bg-white px-8 py-3 text-slate-900"
			onChange={(e) => {
				const val = e.target.value;
				const sortValue = sortValues.find((sortValue) => sortValue.value === val);
				const query = sortValue ? `?orderBy=${sortValue.orderBy}&order=${sortValue.order}` : "";
				const href = `/products/1${query}` as Route;

				router.push(href);
			}}
			value={sortSelected}
		>
			<option>{emptySortValue}</option>
			{sortValues.map((sortValue) => (
				<option key={sortValue.value} value={sortValue.value} data-testid={sortValue.testId}>
					{sortValue.name}
				</option>
			))}
		</select>
	);
};
