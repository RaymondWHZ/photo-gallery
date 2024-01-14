<script lang="ts">
	import type { WorkOverview } from '$lib/utils/cms';
	import MetaSection from "$lib/components/MetaSection.svelte";
	import DescSection from "$lib/components/DescSection.svelte";

	export let statusDescription: string;
	export let work: WorkOverview;
</script>

{#key work._id}
	<div class="flex flex-col justify-center items-center h-full md:hidden">
		<div class="flex flex-col items-start w-full gap-10">
			<div class="w-full">
				<img src={work.imageUrl} alt={work.title} />
			</div>
			<div class="flex flex-col items-start gap-3">
				<DescSection {work} {statusDescription} />
				<MetaSection {work} />
			</div>
		</div>
	</div>
	<div class="flex flex-col justify-center items-center h-full max-md:hidden">
		{#if work.display === 'top'}
			<div class="flex flex-col items-start w-full gap-10">
				<div class="w-full">
					<img src={work.imageUrl} alt={work.title} />
				</div>
				<div class="w-[500px] flex flex-col items-start gap-3">
					<DescSection {work} {statusDescription} wide />
					<MetaSection {work} />
				</div>
			</div>
		{/if}
		{#if work.display === 'left'}
			<div class="flex flex-row items-end w-full gap-8 xl:gap-16">
				<div class="shrink">
					<img src={work.imageUrl} alt={work.title} />
				</div>
				<div class="flex flex-col items-start gap-3">
					<DescSection {work} {statusDescription} width="300" />
					<MetaSection {work} />
				</div>
			</div>
		{/if}
		{#if work.display === 'right' || work.display === 'middle'}
			<div class={`flex flex-row items-end w-full gap-2 xl:gap-16 ${work.display === 'middle' ? 'xl:hidden' : ''}`}>
				<div class="flex flex-col items-start gap-3">
					<DescSection {work} {statusDescription} wide width="350" />
					<MetaSection {work} />
				</div>
				<div class="shrink">
					<img src={work.imageUrl} alt={work.title} />
				</div>
			</div>
		{/if}
		{#if work.display === 'middle'}
			<div class="flex flex-row items-start w-full gap-8 2xl:gap-16 max-xl:hidden">
				<div class="flex flex-col items-start gap-3">
					<DescSection {work} {statusDescription} width="280" />
				</div>
				<div class="shrink">
					<img src={work.imageUrl} alt={work.title} />
				</div>
				<div class="flex flex-col items-start justify-end gap-3 h-full">
					<MetaSection {work} width="280" />
				</div>
			</div>
		{/if}
	</div>
{/key}
