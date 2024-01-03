import { createClient } from '@sanity/client';

const client = createClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	useCdn: true,
	apiVersion: '2023-05-03',
	perspective: 'published'
});

export interface WorkOverview {
	_id: string;
	display: string;
	imageUrl: string;
	title: string;
	shutter: string;
	aperture: string;
	iso: string;
	description: string;
	date: string;
	locationName: string;
	deviceName: string;
	lensName: string;
}

export function fetchAllWorks(): Promise<WorkOverview[]> {
	return client.fetch(`
		*[_type == 'work'] {
			_id, display,
			"imageUrl": image.asset->url,
			title, shutter, aperture, iso,
			description, date,
			"locationName": location->name,
			"deviceName": device->name,
			"lensName": lens->name
		}
	`);
}

export interface AboutInfo {
	title: string;
	description: string;
	quoteIntro: string;
	quote: string;
}

export function fetchAboutInfo(): Promise<AboutInfo> {
	return client.fetch(`
		*[_type == 'about'] {
			title, description, quoteIntro, quote
		}[0]
	`);
}
