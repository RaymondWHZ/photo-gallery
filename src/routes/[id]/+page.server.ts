import { fetchSingleWork } from '$lib/utils/cms';

export const config = {
	isr: {
		expiration: 10
	}
};

export async function load({ params }) {
	return {
		work: await fetchSingleWork(params.id)
	};
}
