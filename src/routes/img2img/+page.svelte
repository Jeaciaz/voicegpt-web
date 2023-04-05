<script lang="ts">
	import { onMount } from 'svelte'
	import { getCacheValue } from '@app/use-cache-value'
	import { sendData, setIsBtnEnabled, setIsBtnLoading, setupBtn } from '@app/use-tg-button'
	import SDForm from '@widgets/SDForm.svelte'
	import { ImageFileField, Range } from '@shared/ui'
	import { pipe } from 'ts-pipe-compose'

	let form: HTMLFormElement

	function checkIfButtonEnabled() {
		setIsBtnEnabled(form.checkValidity())
	}

	function submitForm(formData: Record<string, unknown>) {
		setIsBtnLoading(true)
		getCacheValue(JSON.stringify(formData))
			.then(result => ({
				...result,
				operation: 'img2img'
			}))
			.then(result => {
				sendData(result)
			})
			.catch(e => {
				setIsBtnLoading(false)
				pipe(e, JSON.stringify, alert)
			})
	}

	function parseExtra({ source_img, denoising_strength, ...formData }: Record<string, unknown>) {
		const resultWithoutFiles: Record<string, unknown> = {
			...formData,
			denoising_strength: Number(denoising_strength),
		}
		if (!(source_img instanceof File)) {
			return resultWithoutFiles
		}
		return new Promise<Record<string, unknown>>((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.onload = () =>
				resolve({
					...resultWithoutFiles,
					init_images: [String(fileReader.result).split?.(',')[1] || null].filter(Boolean),
				})
			fileReader.onerror = reject
			fileReader.readAsDataURL(source_img)
		})
	}

	onMount(() => setupBtn(() => form.requestSubmit()))
</script>

<h1 class="text-center text-3xl">IMG -> IMG</h1>

<SDForm bind:form onSubmit={submitForm} {parseExtra} on:input={checkIfButtonEnabled}>
	<ImageFileField slot="pre-basic" name="source_img" label="Исходное изображение" required />
	<Range
		slot="post-advanced"
		name="denoising_strength"
		label="Denoising strength"
		min={0}
		max={1}
		step={0.05}
		defaultValue={0.7}
	/>
</SDForm>
