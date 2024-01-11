<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.error?.message} | Raymond's Works</title>
</svelte:head>

<div class="h-full w-full px-4 sm:px-10 lg:px-40 flex flex-row items-stretch justify-center py-8 lg:py-20">
    <div class="h-full grow max-w-[1200px] flex flex-row items-stretch justify-start">
        <div class="h-full w-full sm:w-[500px] flex flex-col gap-4">
            <h2 class="text-3xl mb-10">{$page.status} {$page.error?.message}</h2>
            <p class="text-xs font-light text-gray-500">
                Please return to the <a class="underline" href="/">home page</a>.
            </p>
        </div>
    </div>
</div>