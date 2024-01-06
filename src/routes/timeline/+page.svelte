<script lang="ts">
	export let data;

	let prefetchImageUrl: string = '';
</script>

<svelte:head>
	<title>Timeline | Raymond's Works</title>
	{#if prefetchImageUrl}
		<link rel="preload" as="image" href={prefetchImageUrl} />
	{/if}
</svelte:head>

<div class="h-full w-full px-4 sm:px-10 lg:px-40 flex flex-row items-stretch justify-center py-8 lg:py-20">
	<div class="h-full grow max-w-[1200px] flex flex-col items-stretch justify-start">
		{#each data.monthYears as monthYear}
			<div class="w-full border-b pb-4">
				<h1 class="text-2xl">{monthYear}</h1>
			</div>
			<div class="w-full flex flex-row flex-wrap gap-x-8 gap-y-2 pt-4 pb-8">
				{#each data.timeline[monthYear] as image}
					<div>
						<span class="text-sm text-gray-500">{image.date.split('-')[2]}</span>
						<a href={"/" + image._id} on:mouseenter={() => prefetchImageUrl = image.imageUrl}>
							<img class="max-h-[250px]" src={image.imageUrl + "&width=1000"} alt={image.title} />
						</a>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>