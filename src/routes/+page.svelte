<script>
  import {base} from '$app/paths'
	const statements = ['Искусственный интеллект', 'Генерация изображений', 'Обработка голоса']

	const media = [
		{ iconSrc: '/icons/Telegram.svg', link: 'https://t.me/VoiceChatAI_bot', alt: 'Telegram icon' },
	]
</script>

<div class="min-h-screen flex justify-center items-center flex-col">
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

<style>
	@font-face {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		src: url('/fonts/Montserrat-SemiBold.ttf');
	}
</style>
