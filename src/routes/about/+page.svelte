<script>
	export let data;
</script>

<svelte:head>
	<title>About | Raymond's Works</title>
</svelte:head>

<div class="h-full w-full px-safe-screen flex flex-row items-stretch justify-center py-8 lg:py-20">
	<div class="h-full grow max-w-safe-screen flex flex-row items-stretch justify-start">
		<div class="h-full w-full sm:w-[500px] flex flex-col gap-4">
			<h2 class="text-3xl mb-10">{data.about.title}</h2>
			<p class="text-xs font-light text-gray-500">{data.about.description}</p>
			<span class="text-3xl font-reenie-beanie">
				Raymond Wu
			</span>
			<div class="h-20"></div>
			<p class="text-xs font-light text-gray-500">{data.about.quote_title}</p>
			<p class="text-xs font-lekton tracking-wide">{data.about.quote}</p>
		</div>
	</div>
</div>
