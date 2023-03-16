<script lang="ts">
	import Labelled from './Labelled.svelte'
	export let name: string | undefined = undefined
	export let options: Array<{ label: string; value: string }> = []
	export let label: string | undefined = undefined
	export let value: string | undefined = options[0].value
</script>

{#if options.length > 0}
	<Labelled {label}>
		<ul class="flex flex-nowrap list-none overflow-auto max-w-full pt-1">
			{#each options as { label, value: itemValue }}
				<li class="[&:not(:last-child)]:mr-4">
					<button
						type="button"
						class="item cursor-pointer"
						class:selected={value === itemValue}
						on:click={() => (value = itemValue)}
					>
						{label}
					</button>
				</li>
			{/each}
		</ul>

		<!-- For working with forms -->
		<input type="hidden" {name} {value} />
	</Labelled>
{/if}

<style>
	.item {
		@apply py-0.5 px-2 border rounded-lg;
		border-color: var(--theme-hint-color);
	}
	.selected {
		@apply border-transparent;
		background-color: var(--theme-button-color);
		color: var(--theme-button-text-color);
	}
</style>
