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

<div class="h-full w-full px-safe-screen flex flex-row items-stretch justify-center py-8 lg:py-20">
	<div class="h-full grow max-w-safe-screen flex flex-col items-stretch justify-start">
		{#each data.monthYears as monthYear}
			<div class="w-full border-b pb-4">
				<h1 class="text-2xl">{monthYear}</h1>
			</div>
			<div class="w-full flex flex-row flex-wrap gap-x-8 gap-y-2 pt-4 pb-8">
				{#each data.timeline[monthYear] as work}
					<div>
						<span class="text-sm text-gray-500">{work.date.split('-')[2]}</span>
						<a href={"/" + work.id} on:mouseenter={() => prefetchImageUrl = work.image}>
							<img class="max-h-[250px]" src={work.image + "&width=1000"} alt={work.title} />
						</a>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>