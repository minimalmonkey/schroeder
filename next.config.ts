import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,

	/**
	 * Enable static exports for the App Router.
	 *
	 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
	 */
	output: 'export',

	/**
	 * Set base path. This is usually the slug of your repository.
	 *
	 * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
	 */
	basePath: '/schroeder',

	/**
	 * Disable server-based image optimization. Next.js does not support
	 * dynamic features with static exports.
	 *
	 * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
	 */
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
