import { type Route } from "next";
import { ActiveLink } from "@/components/ui/atoms/ActiveLink";

export const PaginationNavigation = ({
	currentPage,
	totalPages,
	basePath,
}: {
	currentPage: number;
	totalPages: number;
	basePath: Route;
}) => {
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
								// @ts-expect-error href is a Route
								href={`${basePath}/${page.toString()}`}
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
