<script lang="ts">
	export let type: 'button' | 'submit' = 'button'
</script>

<button
	class="px-2 py-1 bg-teal-500 text-white rounded-md
       hover:bg-teal-600 active:bg-teal-700"
	{type}
	on:click
>
	<slot />
</button>
