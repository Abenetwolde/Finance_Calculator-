import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Slet',
		short_name: 'Slet',
		description:
			'Slet is a finance web-application with various types of easy to use finance calculators.',
		start_url: '/',
		display: 'standalone',
		background_color: '#1B181F',
		theme_color: '#ffbd33',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
			{
				src: '/icon.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: '/apple-icon.png',
				sizes: 'any',
				type: 'image/png',
			},
		],
	};
}
 