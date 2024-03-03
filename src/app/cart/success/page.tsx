import Stripe from "stripe";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		//@ts-expect-error api
		apiVersion: "2022-11-15",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return (
		<>
			<div>{stripeCheckoutSession.payment_status}</div>
			<div>{stripeCheckoutSession.metadata?.cartId}</div>
		</>
	);
}
