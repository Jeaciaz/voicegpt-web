<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	const statements = ['Искусственный интеллект', 'Генерация изображений', 'Обработка голоса']

	const media = [
		{ iconSrc: '/icons/Telegram.svg', link: 'https://t.me/VoiceChatAI_bot', alt: 'Telegram icon' },
	]
	const resolutionVariants = ['2k', '720p'] as const
	const orientationVariants = ['landscape', 'portrait'] as const

	let bgStyles = ''
  const bgClasses = [
    'xl:bg-[url:var(--bg-2k-landscape)]',
    'md:portrait:bg-[url:var(--bg-2k-portrait)]',
    'bg-[url:var(--bg-720p-landscape)]',
    'portrait:bg-[url:var(--bg-720p-portrait)]',
  ].join(' ')

	onMount(() => {
		const bgId = Math.floor(Math.random() * 4) + 1

		function constructBg(resolution: string, orientation: 'landscape' | 'portrait') {
			return `url('${base}/pictures/landing-bg-${resolution}-${bgId}-${orientation}.jpg')`
		}

		bgStyles = resolutionVariants
			.flatMap(resolution => {
				return orientationVariants.map(
					orientation =>
						`--bg-${resolution}-${orientation}: ${constructBg(resolution, orientation)}`
				)
			})
			.join(';')
	})
</script>

<div
	style={bgStyles}
	class="min-h-screen flex justify-center flex-col dark:text-neutral-200 font-[Raleway] {bgClasses}"
>
	<div class="bg-white/50 dark:bg-black/50 flex justify-center items-center flex-col py-6">
		<h1 class="text-3xl md:text-6xl font-semibold font-[Montserrat] tracking-wider">VoiceGPT</h1>
		<ul class="flex list-none items-center flex-col md:flex-row mt-5 text-lg md:text-3xl">
			{#each statements as statement}
				<li class="text-center">{statement}</li>
				<div aria-hidden class="last:hidden select-none px-2">&nbsp;•&nbsp;</div>
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
		src: url('fonts/Montserrat-SemiBold.ttf');
	}

	@font-face {
		font-family: Raleway;
		font-style: normal;
		font-weight: normal;
		src: url('fonts/Raleway-Regular.ttf');
	}
</style>
