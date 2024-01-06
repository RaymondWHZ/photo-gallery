import { Client } from '@notionhq/client';

const client = new Client({
	auth: import.meta.env.VITE_NOTION_TOKEN
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

function resultToWorkOverview(result: any): WorkOverview {
	const pageId = result.id;
	const rawImageUrl = result.properties.image.files[0].file.url;
	const imageUrl =
		'https://www.notion.so/image/' +
		encodeURIComponent(rawImageUrl.split('?')[0]) +
		'?id=' +
		pageId +
		'&table=block';
	return {
		_id: result.properties.id.unique_id.number.toString(),
		display: result.properties.display.select.name,
		imageUrl,
		title: result.properties.title.title[0].plain_text,
		shutter: result.properties.shutter.rich_text[0].plain_text,
		aperture: result.properties.aperture.rich_text[0].plain_text,
		iso: result.properties.iso.rich_text[0].plain_text,
		description: result.properties.description.rich_text[0].plain_text,
		date: result.properties.date.date.start,
		locationName: result.properties.locationName.rollup.array[0].title[0].plain_text,
		deviceName: result.properties.deviceName.rollup.array[0].title[0].plain_text,
		lensName: result.properties.lensName.rollup.array[0]?.title[0].plain_text
	};
}

export async function fetchAllWorksDateDesc(): Promise<WorkOverview[]> {
	const results = (
		await client.databases.query({
			database_id: import.meta.env.VITE_NOTION_DATABASE_ID,
			sorts: [
				{
					property: 'date',
					direction: 'descending'
				}
			]
		})
	).results as any[];
	return results.map(resultToWorkOverview);
}

export async function fetchSingleWork(id: string): Promise<WorkOverview> {
	const result = (
		await client.databases.query({
			database_id: import.meta.env.VITE_NOTION_DATABASE_ID,
			filter: {
				property: 'id',
				unique_id: {
					equals: Number(id)
				}
			}
		})
	).results[0] as any;
	return resultToWorkOverview(result);
}

export interface AboutInfo {
	title: string;
	description: string;
	quoteIntro: string;
	quote: string;
}

export async function fetchAboutInfo(): Promise<AboutInfo> {
	const res = (await client.blocks.children.list({
		block_id: import.meta.env.VITE_NOTION_ABOUT_PAGE_ID,
		page_size: 4
	})) as any;
	const title = res.results[0].paragraph.rich_text[0].plain_text;
	const description = res.results[1].paragraph.rich_text[0].plain_text;
	const quoteIntro = res.results[2].paragraph.rich_text[0].plain_text;
	const quote = res.results[3].paragraph.rich_text[0].plain_text;
	return {
		title,
		description,
		quoteIntro,
		quote
	};
}
