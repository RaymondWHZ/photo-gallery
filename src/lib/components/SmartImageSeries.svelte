<!--
  @component

  Need to be used in a tag with relative positioning to work properly.
-->

<script lang="ts">
	import type { Action } from "svelte/action";

	export let additionalClasses: string = "";
	export let image: string;
	export let alt: string;
	export let interWidth: number = 1000;

	let loadedLevel = 0;

	const onload: Action<HTMLImageElement, number> = (el, level: number) => {
		console.log(level);
        el.addEventListener('load', () => {
            if (level > loadedLevel) {
				loadedLevel = level;
				console.log("Loaded level: " + loadedLevel);
			}
        })
    }
</script>

<div class={"overflow-clip relative " + additionalClasses}>
	<img src={image + "&width=1"} {alt} class={"w-full blur-md" + (loadedLevel > 0 ? " opacity-0" : "")} />
	<img use:onload={1} src={image + `&width=${interWidth}`} {alt} class={"w-full absolute inset-0" + (loadedLevel > 1 ? " opacity-0" : "")} />
	<img use:onload={2} src={image} {alt} class="w-full absolute inset-0" />
</div>
