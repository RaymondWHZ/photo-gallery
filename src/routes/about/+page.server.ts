import { fetchAboutInfo } from '$lib/utils/cms';

export async function load() {
	return {
		about: await fetchAboutInfo()
	};
}
