<script lang="ts">
	import Labelled from './Labelled.svelte'
	export let max: number
	export let min: number
	export let step: number = 1
	export let defaultValue = (max + min) / 2
	export let name: string | undefined = undefined
	export let label: string | undefined = undefined

	let value: number = defaultValue
	$: coef = 1 / step

	function onInput(newValue: string) {
		value = +newValue / coef
	}
</script>

<Labelled label="{label}: {value}">
	<div class="flex text-sm">
		<span>{min}</span>
		<input
			class="mx-1 flex-1 accent-[var(--theme-button-color)]"
			type="range"
			on:input={e => onInput(e.currentTarget.value)}
			value={coef * value}
			max={coef * max}
			min={coef * min}
			step={coef * step}
			{name}
		/>
		<span>{max}</span>
	</div>
</Labelled>
