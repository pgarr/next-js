/** @type {import('next').NextConfig} */

import mdx from "@next/mdx";

const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

const withMDX = mdx();
export default withMDX(nextConfig);
