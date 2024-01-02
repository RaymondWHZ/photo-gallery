<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="px-40 h-[100vh] flex flex-row justify-center items-stretch">
	<div class="flex flex-col grow max-w-[1200px]">
		<Header />

		<main class="grow">
			<slot />
		</main>

		<footer>
			<p class="text-gray-400 text-xs py-10">© 2023 Raymond Wu. All rights reserved. Applies to all contents.</p>
		</footer>
	</div>
</div>
