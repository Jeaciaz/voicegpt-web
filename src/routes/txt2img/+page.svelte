<script lang="ts">
	import { enhance } from '$app/forms'
	import { onMount } from 'svelte'
	import Button from '../../shared/ui/Button.svelte'
	import Range from '../../shared/ui/Range.svelte'
	import Select from '../../shared/ui/Select.svelte'
	import TextField from '../../shared/ui/TextField.svelte'

	const samplerMethods = [
		{ label: 'Euler 𝛼', value: 'euler_a' },
		{ label: 'Heun', value: 'heun' },
		{ label: 'DPM++ M2', value: 'dpmpp_m2' },
		{ label: 'DDIM', value: 'ddim' },
	]

	const dimensionItems = [
		{ label: 'Квадрат', value: 'square' },
		{ label: 'Портрет', value: 'portrait' },
		{ label: 'Пейзаж', value: 'landscape' },
		{ label: 'Другое', value: 'custom' },
	]
	let dimension: string = dimensionItems[0].value

	function validateDimension(dimension: string | number) {
		if (typeof dimension === 'string' || isNaN(dimension)) {
			return new Error('Введите корректное число')
		}

		if (dimension % 2 === 1) {
			return new Error('Размер должен быть кратен 2')
		}
	}

	function submitForm(data: FormData) {
		const json: Record<string, FormDataEntryValue> = {}
		data.forEach((value, key) => {
			json[key] = value
		})
		console.log(json)
		window.Telegram.WebApp.sendData(JSON.stringify(json))
	}
	const resizeListener = () => {
		document.documentElement.style.setProperty('min-height', `${window.visualViewport?.height}`)
	}

	onMount(() => {
		window.visualViewport?.addEventListener('resize', resizeListener)
		return () => window.visualViewport?.removeEventListener('resize', resizeListener)
	})
</script>

<h1 class="text-center text-3xl">TXT -> IMG</h1>

<form
	class="grid gap-4"
	on:submit|preventDefault={e => submitForm(new FormData(e.currentTarget))}
>
	<div class="grid grid-cols-2 gap-2 mt-4">
		<TextField name="prompt" label="Запрос" placeholder="elden ring, epic" required />
		<TextField name="negative-prompt" label="Антизапрос" placeholder="realism" required />
	</div>
	<Select name="sampler-method" options={samplerMethods} label="Метод семплера" />
	<Range name="sampler-steps" min={20} max={40} label="Шаги семплера" />
	<Select
		name="dimensions"
		options={dimensionItems}
		label="Размер изображения"
		bind:value={dimension}
	/>
	{#if dimension === 'custom'}
		<div class="grid grid-cols-2 gap-2">
			<TextField
				name="dim-x"
				label="X"
				placeholder="512"
				required
				type="number"
				validate={validateDimension}
			/>
			<TextField
				name="dim-y"
				label="Y"
				placeholder="512"
				required
				type="number"
				validate={validateDimension}
			/>
		</div>
	{/if}
	<TextField name="seed" label="Seed" placeholder="любой текст" />
	<Range name="cfg-scale" min={1} max={25} label="CFG Scale" />
	<Button type="submit">Подтвердить</Button>
</form>
