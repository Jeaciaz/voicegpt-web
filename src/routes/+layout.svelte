<script>
	import { base } from '$app/paths'
	import { browser } from '$app/environment'
	import '../app.postcss'

	const isLanding = browser && location.pathname === '/'

	const promise = browser && !isLanding ? import(`${base}/telegram-web-app.js`) : Promise.resolve()
</script>

{#await promise then}
	<main>
		<slot />
	</main>
{/await}
