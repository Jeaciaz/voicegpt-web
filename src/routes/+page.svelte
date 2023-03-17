<script lang="ts">
	import { base } from '$app/paths'
	const statements = ['Искусственный интеллект', 'Генерация изображений', 'Обработка голоса']

	const media = [
		{ iconSrc: '/icons/Telegram.svg', link: 'https://t.me/VoiceChatAI_bot', alt: 'Telegram icon' },
	]

	const bgId = Math.floor((Date.now() % 4000) / 1000) + 1

	function constructBg(resolution: string, orientation: 'landscape' | 'portrait') {
		return `url('${base}/pictures/landing-bg-${resolution}-${bgId}-${orientation}.png')`
	}

	const resolutionVariants = ['2k'] as const
	const orientationVariants = ['landscape', 'portrait'] as const

	const bgStyles = resolutionVariants
		.flatMap(resolution => {
			return orientationVariants.map(
				orientation => `--bg-${resolution}-${orientation}: ${constructBg(resolution, orientation)}`
			)
		})
		.join(';')
</script>

<div
	style={bgStyles}
	class="min-h-screen flex justify-center flex-col bg-[url:var(--bg-2k-landscape)] portrait:bg-[url:var(--bg-2k-portrait)] dark:text-neutral-200 font-[Raleway]"
>
	<div class="bg-white/50 dark:bg-black/50 flex justify-center items-center flex-col py-6">
		<h1 class="text-3xl md:text-6xl font-medium font-[Montserrat] tracking-wider">VoiceGPT</h1>
		<ul class="flex list-none items-center flex-col md:flex-row mt-5 text-lg md:text-xl">
			{#each statements as statement}
				<li class="text-center">{statement}</li>
				<div aria-hidden class="last:hidden">&nbsp;•&nbsp;</div>
			{/each}
		</ul>

		<ul class="flex mt-5">
			{#each media as { link, iconSrc, alt }}
				<li>
					<a href={link} class="inline-block p-2 rounded-full border">
						<img src="{base}{iconSrc}" {alt} class="w-8" />
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="fixed bottom-0 w-screen text-center py-6 bg-white/50 dark:bg-black/50">
		(c) copyright blabla
	</div>
</div>

<style>
	@font-face {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		src: url('./fonts/Montserrat-SemiBold.ttf');
	}

	@font-face {
		font-family: Raleway;
		font-style: normal;
		font-weight: normal;
		src: url('./fonts/Raleway-Regular.ttf');
	}
</style>
