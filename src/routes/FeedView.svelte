<script lang="ts">
	import WorkView from './WorkView.svelte';
	import type { WorkOverview } from '$lib/utils/cms';

	export let feed: WorkOverview[];

	let index = 0;

	let innerWidth: number;
	let pageX = 0;
	let pageY = 0;

	$: hasNext = index < feed.length - 1;
	$: hasPrev = index > 0;
	$: mouseInNext = pageX > innerWidth / 2;

	let mouseIn = false;

	let mouseDownTime: number;
</script>

<svelte:window
	bind:innerWidth on:mousemove={e => ({ pageX, pageY } = e)}
	on:mousedown={() => mouseDownTime = Date.now()}
	on:mouseup={() => {
		if (!mouseIn || Date.now() - mouseDownTime > 200) return;
		if (mouseInNext && hasNext) index++;
		if (!mouseInNext && hasPrev) index--;
	}}
	on:keyup={(e) => {
		if (e.key === 'ArrowRight' && index < feed.length - 1) index++;
		if (e.key === 'ArrowLeft' && index > 0) index--;
	}}
/>
<svelte:head>
	{#if index > 0}
		<link rel="preload" as="image" href={feed[index - 1].imageUrl} />
	{/if}
	{#if index < feed.length - 1}
		<link rel="preload" as="image" href={feed[index + 1].imageUrl} />
	{/if}
</svelte:head>
<div
	class="h-full w-full flex flex-col items-center px-40"
	role="application"
	on:mouseenter={() => mouseIn = true}
	on:mouseleave={() => mouseIn = false}
>
	<div class="h-full w-full max-w-[1200px]">
		<WorkView work={feed[index]} />
	</div>
</div>
{#if mouseIn}
	{#if mouseInNext}
		{#if hasNext}
			<h1
				class="bg-black text-white text-xs p-1"
				style="position: absolute; top: {pageY + 10}px; left: {pageX + 10}px"
			>
				CLICK HERE TO VIEW NEXT
			</h1>
		{:else}
			<h1
				class="bg-black text-white text-xs p-1 opacity-40"
				style="position: absolute; top: {pageY + 10}px; left: {pageX + 10}px"
			>
				YOU'VE REACHED THE END!
			</h1>
		{/if}
	{:else}
		{#if hasPrev}
			<h1
				class="bg-black text-white text-xs p-1"
				style="position: absolute; top: {pageY + 10}px; left: {pageX + 10}px"
			>
				CLICK HERE TO VIEW PREVIOUS
			</h1>
		{:else}
			<h1
				class="bg-black text-white text-xs p-1 opacity-40"
				style="position: absolute; top: {pageY + 10}px; left: {pageX + 10}px"
			>
				NO PREVIOUS
			</h1>
	{/if}
	{/if}
{/if}