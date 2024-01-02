<script lang="ts">
	import FeedView from './FeedView.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-full">
	<FeedView feed={data.feed}/>
</section>
