<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	import Range from '../../shared/ui/Range.svelte'
	import Select from '../../shared/ui/Select.svelte'
	import TextField from '../../shared/ui/TextField.svelte'

	const samplerMethods = [
		{ label: 'Euler 𝛼', value: 'Euler a' },
		{ label: 'Heun', value: 'Heun' },
		{ label: 'DPM++ M2', value: 'DPM++ 2M' },
		{ label: 'DDIM', value: 'DDIM' },
	]

	const dimensionItems = [
		{ label: 'Квадрат [512x512]', value: 'square' },
		{ label: 'Портрет [512x768]', value: 'portrait' },
		{ label: 'Пейзаж [768x512]', value: 'landscape' },
	]
	const dimensionValues = {
		square: { width: 512, height: 512 },
		portrait: { width: 512, height: 768 },
		landscape: { width: 768, height: 512 },
	}
	const dimensionsFormName = 'dimensions'

	let form: HTMLFormElement

	function transformDimensions(dimensions: (typeof dimensionItems)[number]['value']) {
		return dimensions in dimensionValues
			? dimensionValues[dimensions as keyof typeof dimensionValues]
			: {}
	}

	function validateForm() {
		if (form.checkValidity()) {
			window.Telegram.WebApp.MainButton.setParams({
				color: window.Telegram.WebApp.themeParams.button_color,
			}).enable()
		}
	}

	function submitForm() {
		window.Telegram.WebApp.MainButton.showProgress()
		const json: Record<string, unknown> = {}

		const data = new FormData(form)
		const numberKeys = ['cfg_scale', 'sampler_steps']
		data.forEach((value, key) => {
			if (!!value) {
				json[key] = numberKeys.includes(key) ? +value : value
			}
		})

		if (typeof json[dimensionsFormName] === 'string') {
			Object.assign(json, transformDimensions(json[dimensionsFormName]))
			delete json[dimensionsFormName]
		}

		window.Telegram.WebApp.sendData(JSON.stringify(json))
	}

	onMount(async () => {
		await import(`${base}/telegram-web-app.js`)
		window.Telegram.WebApp.MainButton.setText('Сгенерировать')
			.onClick(() => submitForm())
			.disable()
			.setParams({ color: window.Telegram.WebApp.themeParams.hint_color })
			.show()
	})
</script>

<h1 class="text-center text-3xl">TXT -> IMG</h1>

<form class="grid gap-4 p-4" bind:this={form} on:submit|preventDefault on:input={validateForm}>
	<div class="grid grid-cols-2 gap-2 mt-4">
		<TextField name="prompt" label="Запрос" placeholder="elden ring, epic" required />
		<TextField name="negative_prompt" label="Антизапрос" placeholder="realism" />
	</div>
	<Select name="dimensions" options={dimensionItems} label="Размер изображения: " />
	<details>
		<summary>Продвинутые опции</summary>
		<div class="grid gap-4">
			<Select name="sampler_method" options={samplerMethods} label="Метод семплера" />
			<Range name="sampler_steps" min={20} max={40} label="Шаги семплера" defaultValue={20} />
			<TextField name="seed" label="Seed" placeholder="1234567890" type="number" />
			<Range name="cfg_scale" min={1} max={25} label="CFG Scale" step={0.5} defaultValue={7.5} />
		</div>
	</details>
</form>
