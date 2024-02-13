import { Loading } from "@/components/ui/atoms/Loading";

export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Loading>{children}</Loading>;
}
