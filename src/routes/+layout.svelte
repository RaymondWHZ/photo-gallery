<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="px-40 h-[100vh] flex flex-col justify-stretch items-center">
	<div class="w-full max-w-[1200px]">
		<Header />
	</div>

	<main class="-mx-40 grow w-screen">
		<slot />
	</main>

	<footer class="w-full max-w-[1200px]">
		<p class="text-gray-400 text-xs py-10">© 2023 Raymond Wu. All rights reserved. Applies to all contents.</p>
	</footer>
</div>
