<script lang="ts">
	import Labelled from './Labelled.svelte'
	export let max: number
	export let min: number
	export let step: number = 1
	export let defaultValue = (max + min) / 2
	export let name: string | undefined = undefined
	export let label: string | undefined = undefined

	let value: string = `${defaultValue}`
</script>

<Labelled label="{label}: {value}">
	<div class="flex text-sm">
		<span>{min}</span>
		<input
			class="mx-1 flex-1 accent-[var(--theme-button-color)]"
			type=range
			bind:value={value}
			max={max}
			min={min}
			step={step}
			{name}
		/>
		<span>{max}</span>
	</div>
</Labelled>
