import { Suspense } from "react";

export const Loading = ({ children }: { children: React.ReactNode }) => {
	return <Suspense fallback={<div aria-busy="true">Loading...</div>}>{children}</Suspense>;
};
