import { fetchAllWorks } from '$lib/utils/cms';
import { shuffleArray } from '$lib/utils/utils';

export async function load() {
	const feed = await fetchAllWorks();
	return {
		feed: shuffleArray(feed)
	};
}
