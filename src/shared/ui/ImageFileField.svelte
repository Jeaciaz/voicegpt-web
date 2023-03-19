<script lang="ts">
	import Labelled from './Labelled.svelte'

	export let label: string | undefined = undefined
	export let name: string | undefined = undefined
	export let required: boolean = false

	let value: File | undefined
	let dirty = false
</script>

<Labelled {label} {required}>
	<input
		type="file"
		{name}
		{required}
		class="absolute opacity-0"
		on:change={e => (value = e.currentTarget.files?.[0])}
		accept="image/png,image/jpeg"
		on:focus|preventDefault={() => (dirty = true)}
	/>
	<div
		class="p-1 border rounded flex items-center h-10 input-replacement "
		class:active={!!value}
		class:dirty={!!dirty}
	>
		{#if !value}
			Выбрать изображение...
		{:else}
			<img src={URL.createObjectURL(value)} alt="" class="pr-2 h-8" />
			<span class="whitespace-nowrap overflow-x-hidden text-ellipsis">{value.name}</span>
		{/if}
	</div>
</Labelled>

<style>
	input:invalid + .dirty {
		@apply border-red-500;
	}

	input:focus + .input-replacement {
		border-color: var(--theme-text-color);
	}

	.active {
		border-color: var(--theme-button-color);
	}
</style>
