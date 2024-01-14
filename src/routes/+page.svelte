<script lang="ts">
	import FeedView from '$lib/components/FeedView.svelte';

	export let data;
</script>

<svelte:head>
	<title>Raymond's Works</title>
</svelte:head>

<section class="h-full w-screen">
	<FeedView statusDescription="Randomly chosen to be displayed" feed={data.feed}/>
</section>
