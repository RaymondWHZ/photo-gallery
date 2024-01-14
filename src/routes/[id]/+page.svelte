<script>
	import FeedView from '$lib/components/FeedView.svelte';

	export let data;
	$: feed = [data.work];
</script>

<svelte:head>
	<title>{data.work.title} | Raymond's Works</title>
</svelte:head>

<section class="h-full w-screen">
	<FeedView statusDescription="" {feed} mode="single"/>
</section>