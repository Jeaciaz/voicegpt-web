<script>
	import { base } from '$app/paths'
	import { browser } from '$app/environment'
	import '../app.postcss'

	const promise = browser ? import(`${base}/telegram-web-app.js`) : Promise.resolve()
</script>

{#await promise}
	<main>
		<slot />
	</main>
{/await}
