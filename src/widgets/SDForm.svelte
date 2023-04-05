<script lang="ts">
	import { Select, TextField, Range } from '@shared/ui'
	import { noop } from '@shared/lib'
	import { pipe } from 'ts-pipe-compose'

	export let form: HTMLFormElement | null = null
	export let parseExtra: (
		data: Record<string, unknown>
	) => Promise<Record<string, unknown>> | Record<string, unknown> = x => x
	export let onSubmit: (data: Record<string, unknown>) => void = noop

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
	const formNames = {
		prompt: 'prompt',
		negativePrompt: 'negative_prompt',
		dimensions: 'dimensions',
		samplerMethod: 'sampler_method',
		samplerSteps: 'sampler_steps',
		seed: 'seed',
	}

	function formDataToRecord(formData: FormData) {
		const json: Record<string, unknown> = {}
		formData.forEach((value, key) => {
			json[key] = value
		})
		return json
	}

	function parseDimensions({
		[formNames.dimensions]: dimensions,
		...formData
	}: Record<string, unknown>) {
		if (typeof dimensions === 'string') {
			if (!(dimensions in dimensionValues)) {
				throw Error('Неизвестное разрешение картинки')
			}
			const { width, height } =
				dimensionValues[dimensions as keyof typeof dimensionValues] || dimensionValues.square
			return { ...formData, width, height }
		}
		return formData
	}

	function parseBaseNumberValues({
		[formNames.samplerSteps]: samplerSteps,
		[formNames.seed]: seed,
		...formData
	}: Record<string, unknown>) {
		return {
			...formData,
			[formNames.samplerSteps]: Number(samplerSteps),
			[formNames.seed]: Number(seed || -1),
		}
	}

	function submitForm(form: HTMLFormElement) {
		const formData = new FormData(form)

		try {
			const result = pipe(
				formData,
				formDataToRecord,
				parseBaseNumberValues,
				parseDimensions,
				parseExtra
			)

			Promise.resolve(result).then(onSubmit)
		} catch (err) {
			if (err instanceof Error) {
				alert(err.message)
				return
			}
			alert('Что-то пошло не так, проверьте введенные данные и попробуйте снова')
		}
	}
</script>

<form
	class="grid gap-4 p-4 mt-4"
	bind:this={form}
	on:submit|preventDefault={e => submitForm(e.currentTarget)}
	on:input
>
	<slot name="pre-basic" />
	<div class="grid grid-cols-2 gap-2">
		<TextField name={formNames.prompt} label="Запрос" placeholder="elden ring, epic" required />
		<TextField name={formNames.negativePrompt} label="Антизапрос" placeholder="realism" />
	</div>
	<Select name={formNames.dimensions} options={dimensionItems} label="Размер изображения: " />
	<slot name="post-basic" />
	<details>
		<summary>Продвинутые опции</summary>
		<div class="grid gap-4">
			<slot name="pre-advanced" />
			<Select name={formNames.samplerMethod} options={samplerMethods} label="Метод семплера" />
			<Range
				name={formNames.samplerSteps}
				min={20}
				max={40}
				label="Шаги семплера"
				defaultValue={20}
			/>
			<TextField name={formNames.seed} label="Seed" placeholder="1234567890" type="number" />
			<slot name="post-advanced" />
		</div>
	</details>
</form>
