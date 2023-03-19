<script lang="ts">
	import { onMount } from 'svelte'
	import { sendData, setIsBtnEnabled, setIsBtnLoading, setupBtn } from '@app/use-tg-button'
	import SDForm from '@widgets/SDForm.svelte'
	import { Range } from '@shared/ui'

	let form: HTMLFormElement

	function checkIfButtonEnabled() {
		setIsBtnEnabled(form.checkValidity())
	}

	function submitForm(formData: Record<string, unknown>) {
		setIsBtnLoading(true)
		console.log(formData)
		sendData(formData)
	}

	function parseExtra({ cfg_scale, ...formData }: Record<string, unknown>) {
		return {
			...formData,
			cfg_scale: Number(cfg_scale),
		}
	}

	onMount(() => setupBtn(() => form.requestSubmit()))
</script>

<h1 class="text-center text-3xl">TXT -> IMG</h1>

<SDForm {form} onSubmit={submitForm} {parseExtra} on:input={checkIfButtonEnabled}>
	<Range
		slot="post-advanced"
		name="cfg_scale"
		min={1}
		max={25}
		label="CFG Scale"
		step={0.5}
		defaultValue={7.5}
	/>
</SDForm>
