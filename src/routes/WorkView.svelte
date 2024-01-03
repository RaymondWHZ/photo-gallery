<script lang="ts">
	import type { WorkOverview } from '$lib/utils/cms';

	export let work: WorkOverview;
</script>

{#key work._id}
	<div class="flex flex-col justify-center items-center h-full">
		{#if work.display === 'top'}
			<div class="flex flex-col items-start w-full gap-10">
				<div class="w-full">
					<img src={work.imageUrl} alt={work.title} />
				</div>
				<div class="w-[400px] flex flex-col items-start gap-3">
					<p class="text-xs font-light text-gray-500">Randomly chosen to be displayed</p>
					<div class="flex flex-row items-baseline gap-6">
						<h2 class="text-3xl">{work.title}</h2>
						<h3>{work.shutter} f{work.aperture} {work.iso}</h3>
					</div>
					<p class="text-xs font-light text-gray-500">{work.description}</p>
					<p class="text-xs font-light italic text-gray-500">
						Shot on {work.date} at {work.locationName} <br/>
						with {work.deviceName} {#if work.lensName}+ {work.lensName}{/if}
					</p>
					<span class="text-3xl font-reenie-beanie">
						Raymond Wu
					</span>
				</div>
			</div>
		{/if}
		{#if work.display === 'left'}
			<div class="flex flex-row items-end w-full gap-16">
				<div class="shrink">
					<img src={work.imageUrl} alt={work.title} />
				</div>
				<div class="flex flex-col items-start gap-3">
					<p class="text-xs font-light text-gray-500">Randomly chosen to be displayed</p>
					<h2 class="text-3xl">{work.title}</h2>
					<h3>{work.shutter} f{work.aperture} {work.iso}</h3>
					<p class="text-xs font-light text-gray-500 w-[250px]">{work.description}</p>
					<p class="text-xs font-light italic text-gray-500">
						Shot on {work.date} at {work.locationName} <br/>
						with {work.deviceName} {#if work.lensName}+ {work.lensName}{/if}
					</p>
					<span class="text-3xl font-reenie-beanie">
						Raymond Wu
					</span>
				</div>
			</div>
		{/if}
		{#if work.display === 'right'}
			<div class="flex flex-row items-end w-full gap-16">
				<div class="flex flex-col items-start gap-3">
					<p class="text-xs font-light text-gray-500">Randomly chosen to be displayed</p>
					<div class="flex flex-row items-baseline gap-6">
						<h2 class="text-3xl">{work.title}</h2>
						<h3>{work.shutter} f{work.aperture} {work.iso}</h3>
					</div>
					<p class="text-xs font-light text-gray-500 w-[350px]">{work.description}</p>
					<p class="text-xs font-light italic text-gray-500">
						Shot on {work.date} at {work.locationName} <br/>
						with {work.deviceName} {#if work.lensName}+ {work.lensName}{/if}
					</p>
					<span class="text-3xl font-reenie-beanie">
						Raymond Wu
					</span>
				</div>
				<div class="shrink">
					<img src={work.imageUrl} alt={work.title} />
				</div>
			</div>
		{/if}
		{#if work.display === 'middle'}
			<div class="flex flex-row items-start w-full gap-16">
				<div class="flex flex-col items-start gap-3">
					<p class="text-xs font-light text-gray-500">Randomly chosen to be displayed</p>
					<h2 class="text-3xl">{work.title}</h2>
					<h3>{work.shutter} f{work.aperture} {work.iso}</h3>
					<p class="text-xs font-light text-gray-500 w-[280px]">{work.description}</p>
				</div>
				<div class="shrink">
					<img src={work.imageUrl} alt={work.title} />
				</div>
				<div class="flex flex-col items-start justify-end gap-3 h-full">
					<p class="text-xs font-light italic text-gray-500 w-[280px]">
						Shot on {work.date} at {work.locationName} <br/>
						with {work.deviceName} {#if work.lensName}+ {work.lensName}{/if}
					</p>
					<span class="text-3xl font-reenie-beanie">
						Raymond Wu
					</span>
				</div>
			</div>
		{/if}
	</div>
{/key}
