<script lang="ts">
	import Labelled from './Labelled.svelte'
	export let max: number
	export let min: number
	export let value: number = (max + min) / 2
	export let name: string | undefined = undefined
	export let label: string | undefined = undefined

	function onInput(newValue: string) {
		value = +newValue
	}
</script>

<Labelled label="{label}: {value}">
	<div class="flex text-sm">
		<span>{min}</span>
		<input
			class="mx-1 flex-1 accent-teal-500"
			type="range"
			on:input={e => onInput(e.currentTarget.value)}
			{value}
			{max}
			{min}
			{name}
		/>
		<span>{max}</span>
	</div>
</Labelled>
