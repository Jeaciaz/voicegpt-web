<script lang="ts">
	import Labelled from './Labelled.svelte'
	export let name: string | undefined = undefined
	export let options: Array<{ label: string; value: string }> = []
	export let label: string | undefined = undefined
  export let value: string | undefined = undefined
</script>

<Labelled {label}>
	<select
		{name}
		aria-label={label}
    on:change={(e) => value = e.currentTarget.value}
		class="block border border-slate-400 hover:border-slate-500 rounded-md p-1.5"
	>
		{#each options as { label, value }}
			<option {value}>{label}</option>
		{/each}
	</select>
</Labelled>
