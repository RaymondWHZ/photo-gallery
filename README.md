# Raymond's Works (Photo Gallery)

This is a simplistic photo gallery of my works. It is built with SvelteKit and TailwindCSS, and uses Notion as a CMS. It is deployed at the link in the About section of this repository.

## Prerequisites

This app uses [Notion](https://notion.so) as a CMS. You will need to create a Notion account and create a page with a database called `db: works` with the following properties:

- `id` (unique id)
- `status` (single-select with option `hidden`)
- `title` (title)
- `image` (file)
- `shutter` (text)
- `aperture` (text)
- `iso` (text)
- `description` (text)
- `date` (date)
- `display` (single-select with options `left`, `right`, `top`, `middle`)
- `location` (reference to a table with a title property with name `name`)
- `locationName` (rollup of `location` with property name `name`)
- `device` (reference to a table with a title property with name `name`)
- `deviceName` (rollup of `device` with property name `name`)
- `lens` (reference to a table with a title property with name `name`, this property is the only property that is optional to fill in)
- `lensName` (rollup of `lens` with property name `name`)
- more if you wish, but these will not be displayed

You will then also need to create a database called `db: about` to store about page texts, in the format of:

| section (type: title) | text: (type: text)        |
|-----------------------|---------------------------|
| title                 | Title for your about page |
| intro                 | Intro on your about page  |
| quote_title           | Title for quote section   |
| quote                 | A quote                   |

You will then need to create an integration with read capability and share the page containing all page with it. You will also need to publish the `db: works` database to web so that images can be accessed.

You can then create a `.env` file with the following contents:

```dotenv
NOTION_TOKEN=<your-integration-token>
NOTION_CMS_PAGE_ID=<your-cms-page-id>
PUBLIC_GITHUB_REPO_URL=<your-github-repo-url-to-be-put-in-the-footer>
```

## Developing

This project uses [bun](https://bun.sh/) to manage dependencies. You can install it following the instructions on the website.

Install dependencies with:

```bash
bun install
```

You can then start a development server using:

```bash
bun dev
```

## Building

> This building step is just for preview purposes and is not necessary for deploying to the web.

To create a production version of your app:

```bash
bun build
```

You can then preview the production build with:

```bash
bun preview
```

## Deploying to the web

This app includes the [adaptor-auto](https://kit.svelte.dev/docs/adapter-auto), which will allow you to deploy the app seamlessly to many platforms including [vercel.com](https://vercel.com/).

You might add other adapters for different platforms, reference the [SvelteKit documentation](https://kit.svelte.dev/docs/adapters) for more information.
