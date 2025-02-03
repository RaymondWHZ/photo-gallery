import { fetchAllWorksDateDesc, type Work } from '$lib/utils/cms';

export const config = {
	isr: {
		expiration: 10
	}
};

const monthDict: Record<string, string> = {
	'01': 'January',
	'02': 'February',
	'03': 'March',
	'04': 'April',
	'05': 'May',
	'06': 'June',
	'07': 'July',
	'08': 'August',
	'09': 'September',
	'10': 'October',
	'11': 'November',
	'12': 'December'
}

export async function load() {
	const works = await fetchAllWorksDateDesc();
	const monthYears: string[] = [];
	const timeline: Record<string, Work[]> = {};
	works.forEach((work) => {
		const [year, month] = work.date.split('-');
		const monthYear = `${monthDict[month]} ${year}`;
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
