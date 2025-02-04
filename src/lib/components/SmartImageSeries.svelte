<script lang="ts">
	import type { Action } from "svelte/action";

	export let additionalClasses: string = "";
	export let image: string;
	export let alt: string;

	let loadedLevel = 0;

	const onload: Action<HTMLImageElement, number> = (el, level: number) => {
        el.addEventListener('load', () => {
            if (level > loadedLevel) {
				loadedLevel = level;
			}
        })
		el.src = image;
    }
</script>

<div class={"overflow-clip relative " + additionalClasses}>
	<img src={image + "&width=1"} {alt} class={"w-full blur-sm" + (loadedLevel > 0 ? " opacity-0" : "")} />
	<img use:onload={1} alt="" class="w-full absolute inset-0" />
</div>
