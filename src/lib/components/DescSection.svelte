<script lang="ts">
    export let work: {
        title: string;
        shutter: string;
        aperture: string;
        iso: string;
        description: string;
    };
    export let statusDescription: string = '';
    export let wide = false;
    export let width: string | undefined = undefined;
</script>

{#if statusDescription}
    <p class="text-xs font-light text-gray-500">{statusDescription}</p>
{/if}

{#if wide}
    <div class="flex flex-row items-baseline gap-x-6 gap-y-3 flex-wrap">
        <h2 class="text-3xl">{work.title}</h2>
        <div class="flex flex-row gap-2">
            <h3>{work.shutter}</h3>
            <h3>f/{work.aperture}</h3>
            <h3>{work.iso}</h3>
        </div>
    </div>
{:else}
    <h2 class="text-3xl">{work.title}</h2>
    <div class="flex flex-row gap-2">
        <h3>{work.shutter}</h3>
        <h3>f/{work.aperture}</h3>
        <h3>{work.iso}</h3>
    </div>
{/if}

<p class="text-xs font-light text-gray-500" style={width ? `width: ${width}px` : ''}>{work.description}</p>