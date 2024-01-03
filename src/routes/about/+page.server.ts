import { fetchAboutInfo } from '$lib/utils/cms';

export const config = {
	isr: {
		expiration: 10
	}
};

export async function load() {
	return {
		about: await fetchAboutInfo()
	};
}
