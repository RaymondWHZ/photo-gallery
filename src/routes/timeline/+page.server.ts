import { fetchAllWorksDateDesc, type WorkOverview } from '$lib/utils/cms';

export const config = {
	isr: {
		expiration: 10
	}
};

export async function load() {
	const works = await fetchAllWorksDateDesc();
	const monthYears: string[] = [];
	const timeline: Record<string, WorkOverview[]> = {};
	works.forEach((work) => {
		const monthYear = new Date(work.date).toLocaleString('en-US', {
			month: 'long',
			year: 'numeric'
		});
		if (timeline[monthYear]) {
			timeline[monthYear].push(work);
		} else {
			monthYears.push(monthYear);
			timeline[monthYear] = [work];
		}
	});
	return {
		monthYears,
		timeline
	};
}
