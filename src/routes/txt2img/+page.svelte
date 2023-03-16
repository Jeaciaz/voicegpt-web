<script lang="ts">
	import { onMount } from 'svelte'
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
		{ label: 'Квадрат [512x512]', value: 'square' },
		{ label: 'Портрет [512x768]', value: 'portrait' },
		{ label: 'Пейзаж [768x512]', value: 'landscape' },
	]
	const dimensionValues = {
		square: { x: 512, y: 512 },
		portrait: { x: 512, y: 768 },
		landscape: { x: 768, y: 512 },
	}

	let form: HTMLFormElement

	function validateForm() {
		if (form.checkValidity()) {
			window.Telegram.WebApp.MainButton
				.setColor(window.Telegram.WebApp.themeParams.button_color)
				.enable()
		}
	}

	function submitForm() {
		validateForm()
		const json: Record<string, unknown> = {}

		const data = new FormData(form)
		data.forEach((value, key) => {
			json[key] = value
		})

		json.dimensions =
			typeof json.dimensions === 'string' && json.dimensions in dimensionValues
				? dimensionValues[json.dimensions as keyof typeof dimensionValues]
				: json.dimensions

		window.Telegram.WebApp.sendData(JSON.stringify(json))
	}

	onMount(() => {
		window.Telegram.WebApp.MainButton.setText('Сгенерировать')
			.onClick(() => form.submit())
			.disable()
			.setColor(window.Telegram.WebApp.themeParams.hint_color)
			.show()
	})
</script>

<h1 class="text-center text-3xl">TXT -> IMG</h1>

<form
	class="grid gap-4"
	bind:this={form}
	on:submit|preventDefault={submitForm}
	on:input={validateForm}
>
	<div class="grid grid-cols-2 gap-2 mt-4">
		<TextField name="prompt" label="Запрос" placeholder="elden ring, epic" required />
		<TextField name="negative-prompt" label="Антизапрос" placeholder="realism" />
	</div>
	<Select name="dimensions" options={dimensionItems} label="Размер изображения: " />
	<details>
		<summary>Продвинутые опции</summary>
		<div class="grid gap-4">
			<Select name="sampler-method" options={samplerMethods} label="Метод семплера" />
			<Range name="sampler-steps" min={20} max={40} label="Шаги семплера" />
			<TextField name="seed" label="Seed" placeholder="1234567890" type="number" />
			<Range name="cfg-scale" min={1} max={25} label="CFG Scale" />
		</div>
	</details>
</form>
