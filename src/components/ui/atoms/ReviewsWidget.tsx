"use client";
import { useOptimistic } from "react";
import { type ReviewItemFragment } from "@/gql/graphql";
import { createReviewAction } from "@/api/actions";

export const ReviewsWidget = ({
	reviews,
	productId,
}: {
	reviews: ReviewItemFragment[];
	productId: string;
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_state, newReviews: ReviewItemFragment[]) => {
			return newReviews;
		},
	);

	return (
		<div className="mt-24 flex flex-row gap-8">
			<div className="flex-1">
				<h2 className="mt-3 text-2xl font-bold">Add review</h2>
				<form
					data-testid="add-review-form"
					className="flex flex-col gap-2"
					action={async (formData: FormData) => {
						const rating = Number(formData.get("rating") as unknown as string);
						const description = formData.get("content") as unknown as string;
						const email = formData.get("email") as unknown as string;
						const author = formData.get("name") as unknown as string;
						const title = formData.get("headline") as unknown as string;
						const optimisticReviews = [
							...reviews,
							{ id: "", rating, description, email, author, title },
						];
						setOptimisticReviews(optimisticReviews);
						await createReviewAction({
							productId,
							rating,
							description,
							email,
							author,
							title,
						});
					}}
				>
					<label htmlFor="rating">Rating</label>
					<input type="number" id="rating" name="rating" className="rounded-md border" />
					<label htmlFor="headline">Headline</label>
					<input type="text" id="headline" name="headline" className="rounded-md border" />
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" className="rounded-md border" />
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" className="rounded-md border" />
					<label htmlFor="content">Content</label>
					<textarea id="content" name="content" className="rounded-md border" />
					<button type="submit" className="w-1/3 rounded-md border bg-blue-600 hover:bg-blue-300">
						Submit
					</button>
				</form>
			</div>
			<div className="flex-1">
				<h2 className="mt-3 text-2xl font-bold">Reviews</h2>
				{optimisticReviews.slice(-3).map((review) => (
					<div key={review.id} className="my-4">
						<div className="mb-2 flex flex-row gap-3">
							<p className="font-bold">{review.rating}</p>
							<p className="font-bold">{review.title}</p>
							<p className="text-gray-500">{review.author}</p>
						</div>
						<p>{review.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
