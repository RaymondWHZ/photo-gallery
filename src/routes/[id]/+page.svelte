<script>
	import FeedView from '../FeedView.svelte';

	export let data;
	$: feed = [data.work];
</script>

<section class="h-full w-screen">
	<FeedView statusDescription="" {feed} mode="single"/>
</section>