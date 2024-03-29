import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NextImage from "next/image";
import Link from "next/link";
import { calculateTotal, formatMoney } from "@/utils";
import { getCart } from "@/api/cart";
import { ChangeQuantityWidget } from "@/components/ui/atoms/ChangeQuantityWidget";
import { RemoveProductFromCartButton } from "@/components/ui/atoms/RemoveProductFromCartButton";
import { handleStripePaymentAction } from "@/api/actions";
import { CheckoutButton } from "@/components/ui/atoms/CheckoutButton";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		redirect("/");
	}

	const cart = await getCart(cartId);
	if (!cart) {
		redirect("/");
	}

	const total = calculateTotal(cart);

	return (
		<div>
			<h1 className="text-3xl font-bold tracking-tight text-slate-900">Order summary</h1>
			<form className="mt-12">
				<ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
					{cart.items.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<li key={item.product.id} className="flex py-4">
								<div className="flex-shrink-0 rounded-md border bg-slate-50">
									<NextImage
										src={item.product.images[0].url}
										alt={item.product.images[0].alt}
										width={150}
										height={150}
									/>
								</div>
								<div className="relative ml-4 flex flex-1 flex-col justify-between">
									<div>
										<div className="flex justify-between">
											<div className="pr-6">
												<h3 className="font-medium text-slate-700">{item.product.name}</h3>
												<p className="mt-1 text-sm text-slate-500">
													{item.product.categories[0].name}
												</p>
											</div>
											<p className="small-caps p-4 text-right font-semibold text-slate-900">
												{formatMoney(item.product.price)}
											</p>
										</div>
										<div className="mt-4">
											<ChangeQuantityWidget
												cartId={cartId}
												productId={item.product.id}
												quantity={item.quantity}
											/>
											<RemoveProductFromCartButton cartId={cartId} productId={item.product.id} />
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</form>
			<div className="mt-8">
				<div className="rounded-lg bg-gray-50 p-4">
					<h2 className="sr-only">Order summary</h2>
					<div className="-my-4 divide-y divide-gray-200 text-sm">
						<div className="flex items-center justify-between py-4">
							<div>
								<div className="text-slate-900">Order total</div>
								<p className="mt-1 text-sm text-slate-500">
									Shipping and taxes will be calculated at the next step
								</p>
							</div>
							<div className=" small-caps font-medium text-slate-900">{formatMoney(total)}</div>
						</div>
					</div>
				</div>
				<form action={handleStripePaymentAction} className="mt-10 grid grid-cols-2">
					<div></div>
					<CheckoutButton />
				</form>
				<div className="mt-4 text-center ">
					<Link className="text-sm font-medium text-blue-600 hover:text-blue-500" href="/products">
						Continue Shopping
					</Link>
				</div>
			</div>
		</div>
	);
}
