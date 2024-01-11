import { fetchSingleWork } from '$lib/utils/cms';
import {error} from "@sveltejs/kit";

export const config = {
	isr: {
		expiration: 10
	}
};

export async function load({ params }) {
	const { id } = params;
	const numberId = Number(id);
	if (isNaN(numberId)) {
		error(404, 'Not found');
	}
	const work = await fetchSingleWork(numberId);
	if (!work) {
		error(404, 'Not found');
	}
	return {
		work
	};
}
