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
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
				pathname: "/uploads/**",
			},
		],
	},
};

const withMDX = mdx();
export default withMDX(nextConfig);
