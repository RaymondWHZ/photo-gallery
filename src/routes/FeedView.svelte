<script lang="ts">
	import WorkView from './WorkView.svelte';
	import type { WorkOverview } from '$lib/utils/cms';

	export let feed: WorkOverview[];

	let index = 0;

	let outerWidth: number;
	let pageX = 0;
	let pageY = 0;
</script>

<svelte:window bind:outerWidth on:mousemove={e => ({ pageX, pageY } = e)}/>
<WorkView work={feed[index]} />
{#if pageX > outerWidth / 3.5}
	{#if index < feed.length - 1}
		<h1
			class="bg-black text-white text-xs p-1"
			style="position: absolute; top: {pageY + 10}px; left: {pageX + 10}px"
		>
			CLICK HERE TO VIEW NEXT
		</h1>
	{/if}
{:else}
	{#if index > 0}
		<h1
			class="bg-black text-white text-xs p-1"
			style="position: absolute; top: {pageY + 10}px; left: {pageX + 10}px"
		>
			CLICK HERE TO VIEW PREVIOUS
		</h1>
	{/if}
{/if}
