"use client";

import { useRouter } from "next/navigation";

export function Overlay({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<aside className="animation-fade-in fixed inset-0 z-20 backdrop-blur-md">
			<div onClick={() => router.back()} className="absolute inset-0 bg-slate-600 bg-opacity-75" />
			{children}
		</aside>
	);
}
