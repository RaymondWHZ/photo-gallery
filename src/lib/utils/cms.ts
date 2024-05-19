import { NOTION_TOKEN, NOTION_CMS_PAGE_ID } from '$env/static/private';
import {
	createDBSchemas,
	createNotionDBClient,
	date, type DBObjectTypesInfer,
	files,
	rich_text, rollup,
	select,
	title,
	unique_id
} from "notion-cms-adaptor";
import type {RichTextItemResponse} from "@notionhq/client/build/src/api-endpoints";

function packPlainText(arr: RichTextItemResponse[]): string {
	return arr.reduce((acc, cur) => acc + cur.plain_text, '');
}

const rollupSingleTitle = rollup().handleArrayUsing((value): string => {
	const first = value[0];
	if (first && first.type === 'title') {
		return packPlainText(first.title);
	}
	return '';
});

const dbSchemas = createDBSchemas({
	about: {
		section: title().plainText(),
		text: rich_text().plainText(),
	},
	works: {
		id: unique_id().number(),
		title: title().plainText(),
		image: files().singleNotionImageUrl(),
		shutter: rich_text().plainText(),
		aperture: rich_text().plainText(),
		iso: rich_text().plainText(),
		description: rich_text().plainText(),
		date: date().handleUsing(value => value?.start ?? ''),
		display: select().stringEnum('left', 'right', 'top', 'middle', undefined),
		locationName: rollupSingleTitle,
		deviceName: rollupSingleTitle,
		lensName: rollupSingleTitle
	}
})

const client = createNotionDBClient({
	notionToken: NOTION_TOKEN,
	dbPageId: NOTION_CMS_PAGE_ID,
	dbSchemas,
});

export type ObjectTypes = DBObjectTypesInfer<typeof dbSchemas>;
export type Work = ObjectTypes['works'];

export async function fetchAllWorksDateDesc(): Promise<Work[]> {
	return await client.query('works', {
		filter: {
			property: 'status',
			select: {
				does_not_equal: 'hidden'
			}
		},
		sorts: [
			{
				property: 'date',
				direction: 'descending'
			}
		]
	})
}

export async function fetchSingleWork(id: number): Promise<Work | undefined> {
	const results = await client.query('works', {
		filter: {
			property: 'id',
			unique_id: {
				equals: id
			}
		}
	})
	return results[0] ?? undefined;
}

export type AboutInfo = {
	title: string;
	description: string;
	quote_title: string;
	quote: string;
}

export async function fetchAboutInfo(): Promise<AboutInfo> {
	return (await client.queryKV('about', 'section', 'text')) as AboutInfo;
}
