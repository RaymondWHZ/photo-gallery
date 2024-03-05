<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';
	import { PUBLIC_GITHUB_REPO_URL } from '$env/static/public';
</script>

<div class="h-[100vh] flex flex-col justify-stretch items-stretch">
	<nav class="px-4 sm:px-10 lg:px-40 flex flex-row justify-center">
		<div class="w-full max-w-safe-screen">
			<Header />
		</div>
	</nav>

	<main class="grow">
		<slot />
	</main>

	<footer class="px-4 sm:px-10 lg:px-40 flex flex-row justify-center">
		<div class="w-full max-w-safe-screen">
			<p class="text-gray-400 text-xs py-10">
				© 2023 Raymond Wu. All rights reserved. Applies to all contents.
				<a class="underline" href={PUBLIC_GITHUB_REPO_URL}>Github</a>.
			</p>
		</div>
	</footer>
</div>
