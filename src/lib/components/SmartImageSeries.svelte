<script lang="ts">
	import type { Action } from "svelte/action";

	export let additionalClasses: string = "";
	export let image: string;

	let loadedLevel = 0;

	const onload: Action<HTMLImageElement, number> = (el, level: number) => {
        el.addEventListener('load', () => {
            if (level > loadedLevel) {
				loadedLevel = level;
			}
        });
		setTimeout(() => {
			el.src = image;
		}, 50);
    }
</script>

<div class={"overflow-clip relative " + additionalClasses}>
	<img src={image + "&width=200"} alt="" class={"w-full blur-lg transition duration-[600] delay-200" + (loadedLevel > 0 ? " opacity-0" : "")} />
	<div class={"absolute inset-0 transition duration-200 ease-in" + (loadedLevel < 1 ? " opacity-0" : "")}>
		<img use:onload={1} alt="" class={"w-full transition duration-[600] delay-200" + (loadedLevel < 1 ? " blur-md" : "")} />
	</div>
</div>
