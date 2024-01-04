<script lang="ts">
	import { page } from '$app/stores';

	let href: string | null;
	page.subscribe(value => href = value.route.id);
</script>

<header class="flex flex-row items-center py-8 gap-2 sm:gap-4 lg:gap-8">
	<a href="/" class="font-lekton text-xl tracking-wider">
		Raymond's Works
	</a>

	<div class="flex-grow"></div>

	<a href="/timeline" class={`text-sm ${href === '/timeline' ? 'font-bold underline' : ''}`}>
		Timeline
	</a>

	<div class="border border-black text-sm h-[1.4em]"></div>

	<a href="/about" class={`text-sm ${href === '/about' ? 'font-bold underline' : ''}`}>
		About
	</a>
</header>
