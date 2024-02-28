import { cookies } from "next/headers";
import Link from "next/link";
import NextImage from "next/image";
import { getCart } from "@/api/cart";
import { Overlay } from "@/components/ui/atoms/Overlay";
import { handleStripePaymentAction } from "@/api/actions";
import { CheckoutButton } from "@/components/ui/atoms/CheckoutButton";
import { calculateTotal, formatMoney } from "@/utils";

export default async function ModalCart() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return null;
	}
	const cart = await getCart(cartId);
	if (!cart) {
		return null;
	}

	const total = calculateTotal(cart);

	return (
		<>
			<Overlay>
				<div className="animation-slide-from-right absolute bottom-0 right-0 top-0 flex h-full flex-col overflow-hidden bg-white shadow-xl sm:w-1/2 lg:w-1/3">
					<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-medium text-slate-900">Shopping cart</h3>
							<Link href="/cart" className="text-sm text-blue-500">
								(open full view)
							</Link>
						</div>
						<div className="mt-8">
							<ul className="-my-6 divide-y divide-gray-200">
								{cart?.items.map((item) => (
									<li key={item.product.id} className="flex py-6">
										<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<NextImage
												src={item.product.images[0].url}
												alt={item.product.images[0].alt}
												width={100}
												height={100}
												className="h-24 w-24 rounded-lg object-cover object-center"
											/>
										</div>
										<div className="ml-4 flex flex-1 flex-col">
											<div className="flex justify-between text-base font-medium text-slate-900">
												<h3>{item.product?.name}</h3>
												<p className="small-caps ml-4">{formatMoney(item.product?.price)}</p>
											</div>
											<p className="mt-1 text-sm text-slate-500">
												{item.product.categories[0].name}
											</p>
											<div className="flex flex-1 items-end text-sm">
												<p className="font-bold text-slate-500">Quantity: {item.quantity}</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
						<div className="flex justify-between text-base font-medium text-slate-900">
							<p>Total</p>
							<p className="small-caps">{formatMoney(total)}</p>
						</div>
						<p className="mt-0.5 text-sm text-slate-500">
							Shipping and taxes will be added at the next step
						</p>
						<form action={handleStripePaymentAction} className="mt-6">
							<CheckoutButton />
						</form>
					</div>
				</div>
			</Overlay>
		</>
	);
}
