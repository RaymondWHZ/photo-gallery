import { Client } from '@notionhq/client';
import { NOTION_TOKEN, NOTION_DATABASE_ID, NOTION_ABOUT_PAGE_ID } from '$env/static/private';

const client = new Client({
	auth: NOTION_TOKEN,
	notionVersion: '2022-06-28'
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

function packPlainText(arr: { plain_text: string }[] = []): string {
	return arr.reduce((acc: string, cur: { plain_text: string }) => acc + cur.plain_text, '')
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
		title: packPlainText(result.properties.title.title),
		shutter: packPlainText(result.properties.shutter.rich_text),
		aperture: packPlainText(result.properties.aperture.rich_text),
		iso: packPlainText(result.properties.iso.rich_text),
		description: packPlainText(result.properties.description.rich_text),
		date: result.properties.date.date.start,
		locationName: packPlainText(result.properties.locationName.rollup.array[0].title),
		deviceName: packPlainText(result.properties.deviceName.rollup.array[0].title),
		lensName: packPlainText(result.properties.lensName.rollup.array[0]?.title)
	};
}

export async function fetchAllWorksDateDesc(): Promise<WorkOverview[]> {
	const results = (
		await client.databases.query({
			database_id: NOTION_DATABASE_ID,
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

export async function fetchSingleWork(id: number): Promise<WorkOverview | undefined> {
	const result = (
		await client.databases.query({
			database_id: NOTION_DATABASE_ID,
			filter: {
				property: 'id',
				unique_id: {
					equals: id
				}
			}
		})
	).results[0] as any;
	if (!result) {
		return undefined;
	}
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
		block_id: NOTION_ABOUT_PAGE_ID,
		page_size: 4
	})) as any;
	const title = packPlainText(res.results[0].paragraph.rich_text);
	const description = packPlainText(res.results[1].paragraph.rich_text);
	const quoteIntro = packPlainText(res.results[2].paragraph.rich_text);
	const quote = packPlainText(res.results[3].paragraph.rich_text);
	return {
		title,
		description,
		quoteIntro,
		quote
	};
}
