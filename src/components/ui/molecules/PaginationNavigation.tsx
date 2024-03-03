import { type Route } from "next";
import { ActiveLink } from "@/components/ui/atoms/ActiveLink";

export const PaginationNavigation = ({
	currentPage,
	totalPages,
	basePath,
	searchParams,
}: {
	currentPage: number;
	totalPages: number;
	basePath: Route;
	searchParams?: Record<string, string>;
}) => {
	const queryString = new URLSearchParams(searchParams).toString();
	const links = new Set([1, currentPage - 1, currentPage, currentPage + 1, totalPages]);

	return (
		<nav role="navigation" aria-label="Pagination Navigation">
			<ul className="flex justify-center gap-5 text-xl">
				{[...links].map((page) => {
					if (page < 1 || page > totalPages) {
						return null;
					}
					return (
						<li key={page}>
							<ActiveLink
								exact
								href={`${basePath}/${page.toString()}?${queryString}` as Route}
								activeClassName="underline"
								className="text-blue-600 hover:text-blue-300"
								aria-label={`Goto Page ${page}`}
							>
								{page}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
