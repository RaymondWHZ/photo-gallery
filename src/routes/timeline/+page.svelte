<script lang="ts">
	export let data;

	$: allImageUrls = data.monthYears.flatMap(monthYear => data.timeline[monthYear].map(work => work.image));
</script>

<svelte:head>
	<title>Timeline | Raymond's Works</title>
	{#each allImageUrls as imageUrl}
		<link rel="preload" as="image" href={imageUrl + "&width=1"} />
	{/each}
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
						<div class="overflow-clip">
							<a href={"/" + work.id} class="focus:blur-lg transition duration-100">
								<img class="max-h-[250px]" src={work.image + "&width=" + (work.display === "top" ? "2000" : "1000")} alt={work.title} />
							</a>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>