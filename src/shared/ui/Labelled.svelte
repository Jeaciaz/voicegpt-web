<script lang="ts">
	export let label: string | undefined = undefined
	export let required: boolean = false
</script>

{#if label !== undefined}
	<label class="flex flex-col">
		<span class="text-sm text-[var(--theme-hint-color)] pl-1.5">
			{label}
			{#if required}
				<span class="text-sm text-red-500">*</span>
			{/if}
		</span>
		<slot />
	</label>
{:else}
	<slot />
{/if}
