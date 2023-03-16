<script lang="ts">
	import Labelled from './Labelled.svelte'
	export let label: string | undefined = undefined
	export let defaultValue: number | string = ''
	export let value: number | string = defaultValue
	export let placeholder: string | undefined = undefined
	export let disabled: boolean = false
	export let name: string | undefined = undefined
	export let required: boolean = false
	export let validate: undefined | ((value: number | string) => Error | undefined) = undefined
	export let type: 'number' | 'password' | 'text' = 'text'

	let validationError: Error | undefined = undefined
	let dirty = false

	function castValue(value: number | string) {
		return type.match(/^number|range$/) ? +value : value
	}

	function performValidation(value: string) {
		validationError = validate?.(castValue(value))
	}

	function onInput(e: Event & { currentTarget: HTMLInputElement }) {
		value = castValue(e.currentTarget.value)
	}
</script>

<Labelled {label} {required}>
	<input
		{type}
		{name}
		{placeholder}
		{disabled}
		{required}
		{value}
		on:input={onInput}
		on:change={e => performValidation(e.currentTarget.value)}
		on:focus={() => (dirty = false)}
		on:blur={() => (dirty = true)}
		class="border
		border-[var(--theme-hint-color)]
			rounded-md
			p-1
		focus-visible:border-[var(--theme-text-color)]
		 outline-0
			{dirty ? 'invalid:border-red-500' : ''}
			{dirty && validationError !== undefined ? 'border-red-500' : ''}"
		aria-label={label}
	/>
	{#if dirty && validationError !== undefined}
		<span class="text-xs text-red-500">{validationError.message}</span>
	{/if}
</Labelled>
